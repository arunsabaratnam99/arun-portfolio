import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 86400; // Cache for 24 hours

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const domain = searchParams.get("domain");

    if (!domain) {
      return new NextResponse("Missing domain parameter", { status: 400 });
    }

    console.log("Fetching logo from Brandfetch CDN for:", domain);

    // Get client ID from environment or use from query
    const clientId = process.env.BRANDFETCH_API_KEY || "";

    // Use Brandfetch's CDN Logo API with size and client ID parameters
    // Format: https://cdn.brandfetch.io/{domain}/w/{width}/h/{height}?c={client_id}
    const logoUrl = `https://cdn.brandfetch.io/${domain}/w/400/h/400?c=${clientId}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(logoUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; Portfolio/1.0)",
          "Accept": "image/*",
        },
        signal: controller.signal,
        cache: "no-store",
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.error("Brandfetch CDN error:", domain, response.status);
        return createFallbackResponse();
      }

      const imageBuffer = await response.arrayBuffer();
      const contentType = response.headers.get("content-type") || "image/png";

      return new NextResponse(imageBuffer, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=86400", // Cache for 24 hours
          "X-Logo-Source": "brandfetch-cdn",
        },
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.error("Error fetching from Brandfetch CDN:", domain, fetchError);
      return createFallbackResponse();
    }
  } catch (error) {
    console.error("Brandfetch CDN error:", error);
    return createFallbackResponse();
  }
}

// Helper function to create a transparent 1x1 pixel PNG fallback
function createFallbackResponse() {
  const transparentPng = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "base64"
  );
  
  return new NextResponse(transparentPng, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600",
      "X-Logo-Source": "fallback",
    },
  });
}
