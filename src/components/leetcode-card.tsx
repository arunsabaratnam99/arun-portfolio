"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/config/portfolio-data";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
}

interface Submission {
  title: string;
  slug: string;
  timestamp: string;
  language: string;
}

export function LeetCodeCard() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetCode() {
      try {
        const response = await fetch("/api/leetcode", {
          cache: "no-store", // Always fetch fresh data
        });
        if (response.ok) {
          const data = await response.json();
          if (data.stats) {
            setStats(data.stats);
            setSubmissions(data.recentSubmissions || []);
          }
        }
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeetCode();

    // Refresh every 5 minutes for dynamic updates
    const interval = setInterval(fetchLeetCode, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-900 p-4 h-full rounded-lg flex flex-col text-white transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="font-bold font-geist-mono uppercase">LeetCode</div>
      <div className="font-geist text-xl mb-2">Progress.</div>

      {loading ? (
        <div className="flex flex-col gap-3 animate-pulse">
          <div className="flex flex-col gap-2">
            <div className="h-8 bg-neutral-800 rounded w-16" />
            <div className="h-3 bg-neutral-800 rounded w-32" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="h-4 bg-neutral-800 rounded w-8" />
                <div className="h-3 bg-neutral-800 rounded w-12" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="h-3 bg-neutral-800 rounded w-24" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="h-3 bg-neutral-800 rounded w-full" />
                <div className="h-3 bg-neutral-800 rounded w-20" />
              </div>
            ))}
          </div>
        </div>
      ) : !stats ? (
        <div className="text-neutral-500 text-sm">No stats available</div>
      ) : (
        <div className="flex flex-col gap-3">
          {/* Total Solved */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold font-geist-mono">
              {stats.totalSolved}
            </div>
            <div className="text-xs text-neutral-400">Problems Solved</div>
          </div>

          {/* Difficulty Breakdown */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <div className="text-sm font-geist-mono text-emerald-400">
                {stats.easySolved}
              </div>
              <div className="text-xs text-neutral-500">Easy</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-geist-mono text-yellow-400">
                {stats.mediumSolved}
              </div>
              <div className="text-xs text-neutral-500">Medium</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-geist-mono text-red-400">
                {stats.hardSolved}
              </div>
              <div className="text-xs text-neutral-500">Hard</div>
            </div>
          </div>

          {/* Recent Submissions */}
          {submissions.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              <div className="text-xs text-neutral-400 font-geist-mono">
                Recent Accepted
              </div>
              {submissions.map((sub, idx) => (
                <a
                  key={idx}
                  href={`${portfolioData.social.leetcode.url}problems/${sub.slug}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="text-xs font-geist-mono text-white group-hover:underline truncate">
                    {sub.title}
                  </div>
                  <div className="text-xs text-neutral-500">{sub.timestamp}</div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
