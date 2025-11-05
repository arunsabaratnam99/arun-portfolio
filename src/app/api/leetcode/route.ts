import { NextResponse } from "next/server";
import { portfolioData } from "@/config/portfolio-data";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const username = portfolioData.social.leetcode.username;

    // LeetCode GraphQL query
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
            reputation
          }
        }
        recentSubmissionList(username: $username, limit: 5) {
          title
          titleSlug
          timestamp
          statusDisplay
          lang
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 300 }, // Cache for 5 minutes - dynamic updates
    });

    if (!response.ok) {
      throw new Error("Failed to fetch LeetCode data");
    }

    const data = await response.json();

    // Extract stats
    const user = data.data?.matchedUser;
    const submissions = data.data?.recentSubmissionList || [];

    if (!user) {
      return NextResponse.json({
        error: "User not found",
        stats: null,
      });
    }

    const stats = {
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      ranking: user.profile?.ranking || 0,
    };

    // Calculate solved problems
    user.submitStats.acSubmissionNum.forEach(
      (item: { difficulty: string; count: number }) => {
        if (item.difficulty === "All") {
          stats.totalSolved = item.count;
        } else if (item.difficulty === "Easy") {
          stats.easySolved = item.count;
        } else if (item.difficulty === "Medium") {
          stats.mediumSolved = item.count;
        } else if (item.difficulty === "Hard") {
          stats.hardSolved = item.count;
        }
      }
    );

    // Format recent submissions
    const recentSubmissions = submissions
      .filter(
        (sub: { statusDisplay: string }) => sub.statusDisplay === "Accepted"
      )
      .slice(0, 3)
      .map(
        (sub: {
          title: string;
          titleSlug: string;
          timestamp: string;
          lang: string;
        }) => ({
        title: sub.title,
        slug: sub.titleSlug,
        timestamp: new Date(parseInt(sub.timestamp) * 1000).toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
          }
        ),
        language: sub.lang,
        })
      );

    return NextResponse.json({
      stats,
      recentSubmissions,
    });
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch LeetCode data",
        stats: null,
      },
      { status: 500 }
    );
  }
}
