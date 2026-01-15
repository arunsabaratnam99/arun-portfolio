"use client";

import { useState } from "react";
import { portfolioData } from "@/config/portfolio-data";

export function ExperienceCard() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  const getCompanyInitial = (company: string) => {
    return company.charAt(0).toUpperCase();
  };

  const getCompanyColor = (index: number) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-orange-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-neutral-900 p-4 h-full rounded-lg flex flex-col text-white transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="font-bold font-geist-mono uppercase">Co-op</div>
      <div className="font-geist text-xl mb-4">Where I've Worked.</div>
      <div className="flex flex-col gap-4 mb-2">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative">
            <a
              href={exp.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-lg hover:cursor-crosshair"
              onMouseEnter={() => setHoveredExp(idx)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              {/* Company Initial Badge */}
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-lg ${getCompanyColor(
                  idx
                )} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
                <span className="text-white font-bold text-lg">
                  {getCompanyInitial(exp.company)}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="text-sm font-geist-mono group-hover:underline group-hover:decoration-white">
                  {exp.title}
                </div>
                <div className="text-sm font-geist text-neutral-400">
                  {exp.company} · {exp.period}
                </div>
              </div>
            </a>
            {hoveredExp === idx && (
              <div className="absolute left-0 bottom-full mb-2 bg-neutral-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none border border-neutral-700 animate-in fade-in slide-in-from-bottom-1 duration-200">
                Open {exp.company} Website
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
