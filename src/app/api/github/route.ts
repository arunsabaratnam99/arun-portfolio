import { NextResponse } from "next/server";
import { portfolioData } from "@/config/portfolio-data";

export const dynamic = "force-dynamic";

interface GitHubCommit {
  repo: string;
  repoUrl: string;
  message: string;
  sha: string;
  url: string;
  date: string;
  additions: number;
  deletions: number;
}

export async function GET() {
  try {
    const username = portfolioData.social.github.username;

    // Fetch user events (including commits)
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events?per_page=30`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Optional: Add GitHub token for higher rate limits
          // Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!eventsResponse.ok) {
      throw new Error("Failed to fetch GitHub events");
    }

    const events = await eventsResponse.json();

    // Extract push events and get commits
    const commits: GitHubCommit[] = [];

    for (const event of events) {
      if (event.type === "PushEvent" && event.payload.commits) {
        for (const commit of event.payload.commits) {
          // Only add if we don't already have 6 commits
          if (commits.length >= 6) break;

          // Extract repo name from event
          const repoName = event.repo.name;

          // Format date
          const date = new Date(event.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });

          commits.push({
            repo: repoName,
            repoUrl: `https://github.com/${repoName}`,
            message: commit.message.split("\n")[0], // First line only
            sha: commit.sha.substring(0, 7), // Short SHA
            url: `https://github.com/${repoName}/commit/${commit.sha}`,
            date,
            additions: 0, // GitHub events API doesn't provide this easily
            deletions: 0,
          });
        }
      }

      if (commits.length >= 6) break;
    }

    return NextResponse.json(commits);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
