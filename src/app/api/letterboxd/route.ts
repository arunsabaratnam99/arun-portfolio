import { NextResponse } from "next/server";
import { portfolioData } from "@/config/portfolio-data";

export const dynamic = "force-dynamic";

interface LetterboxdFilm {
  title: string;
  link: string;
  pubDate: string;
  rating?: string;
  filmTitle: string;
  filmYear: string;
  image?: string;
}

export async function GET() {
  try {
    const username = portfolioData.social.letterboxd.username;
    const rssUrl = `https://letterboxd.com/${username}/rss/`;

    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Letterboxd RSS feed");
    }

    const xmlText = await response.text();

    // Parse XML manually (simple parser for RSS)
    const items: LetterboxdFilm[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemContent = match[1];

      // Extract title
      const titleMatch = /<letterboxd:filmTitle>(.*?)<\/letterboxd:filmTitle>/.exec(
        itemContent
      );
      const yearMatch = /<letterboxd:filmYear>(.*?)<\/letterboxd:filmYear>/.exec(
        itemContent
      );
      const linkMatch = /<link>(.*?)<\/link>/.exec(itemContent);
      const pubDateMatch = /<pubDate>(.*?)<\/pubDate>/.exec(itemContent);
      const ratingMatch = /<letterboxd:memberRating>(.*?)<\/letterboxd:memberRating>/.exec(
        itemContent
      );

      // Extract image from description
      const descMatch = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/.exec(
        itemContent
      );
      let imageUrl = "";
      if (descMatch) {
        const imgMatch = /<img src="(.*?)"/.exec(descMatch[1]);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }

      if (titleMatch && yearMatch && linkMatch && pubDateMatch) {
        const rating = ratingMatch ? `${ratingMatch[1]}★` : undefined;

        items.push({
          title: `${titleMatch[1]} (${yearMatch[1]})`,
          link: linkMatch[1],
          pubDate: new Date(pubDateMatch[1]).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          rating,
          filmTitle: titleMatch[1],
          filmYear: yearMatch[1],
          image: imageUrl || undefined,
        });
      }
    }

    // Return only the first 10 films
    return NextResponse.json(items.slice(0, 10));
  } catch (error) {
    console.error("Error fetching Letterboxd data:", error);
    return NextResponse.json(
      { error: "Failed to fetch Letterboxd data" },
      { status: 500 }
    );
  }
}
