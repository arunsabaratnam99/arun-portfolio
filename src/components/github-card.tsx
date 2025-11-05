"use client";

import { useEffect, useState } from "react";

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

export function GithubCard() {
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await fetch("/api/github");
        if (response.ok) {
          const data = await response.json();
          setCommits(data);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCommits();
  }, []);

  return (
    <div className="bg-neutral-900 p-4 h-full rounded-lg flex flex-col text-white transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="font-bold font-geist-mono uppercase">GitHub</div>
      <div className="font-geist text-xl mb-2">Recent Commits.</div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {loading ? (
          <>
            {[1, 2].map((i) => (
              <li
                key={i}
                className="rounded-lg border border-neutral-800 p-3 animate-pulse"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="h-3 bg-neutral-800 rounded w-20" />
                  <div className="h-3 bg-neutral-800 rounded w-16" />
                </div>
                <div className="mt-2 h-4 bg-neutral-800 rounded w-full" />
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-3 bg-neutral-800 rounded w-12" />
                  <div className="h-3 bg-neutral-800 rounded w-8" />
                </div>
              </li>
            ))}
          </>
        ) : commits.length === 0 ? (
          <div className="text-neutral-500 text-sm col-span-full">
            No recent commits found
          </div>
        ) : (
          commits.map((commit, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-neutral-800 p-3 hover:bg-neutral-800/40 transition"
            >
              <div className="flex items-center justify-between gap-2">
                <a
                  href={commit.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="truncate text-xs font-geist text-blue-400 hover:underline"
                  title={commit.repo}
                >
                  {commit.repo.split("/")[1] || commit.repo}
                </a>
                <span className="text-xs font-geist text-neutral-400 whitespace-nowrap">
                  {commit.date}
                </span>
              </div>
              <a
                href={commit.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-geist-mono hover:underline truncate"
                title={commit.message}
              >
                {commit.message}
              </a>
              <div className="mt-1 flex items-center gap-3 text-xs text-neutral-400 font-geist-mono">
                <code className="rounded bg-neutral-900 px-1 py-[2px]">
                  {commit.sha}
                </code>
                {commit.additions > 0 && (
                  <span className="text-emerald-400">+{commit.additions}</span>
                )}
                {commit.deletions > 0 && (
                  <span className="text-red-400">-{commit.deletions}</span>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
