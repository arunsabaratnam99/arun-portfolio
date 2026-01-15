import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const imageUrl = searchParams.get("url");

    if (!imageUrl) {
      return new NextResponse("Missing image URL", { status: 400 });
    }

    console.log("Fetching image:", imageUrl);

    // Fetch the image with timeout and better error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const imageResponse = await fetch(imageUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; Portfolio/1.0)",
          "Accept": "image/*",
        },
        cache: "no-store",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!imageResponse.ok) {
        console.error("Failed to fetch image:", imageUrl, imageResponse.status);
        // Return a transparent 1x1 pixel PNG as fallback
        return createFallbackResponse();
      }

      const imageBuffer = await imageResponse.arrayBuffer();
      const contentType =
        imageResponse.headers.get("content-type") || "image/png";

      // Return the image with proper headers
      return new NextResponse(imageBuffer, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=86400", // Cache for 24 hours
          "X-Image-URL": imageUrl,
        },
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.error("Fetch error for image:", imageUrl, fetchError);
      return createFallbackResponse();
    }
  } catch (error) {
    console.error("Image proxy error:", error);
    return createFallbackResponse();
  }
}

// Helper function to create a transparent 1x1 pixel PNG
function createFallbackResponse() {
  // Transparent 1x1 PNG
  const transparentPng = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "base64"
  );
  
  return new NextResponse(transparentPng, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
