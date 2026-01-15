"use client";

import { useState } from "react";
import { portfolioData } from "@/config/portfolio-data";
import Image from "next/image";

export function ExperienceCard() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  const getCompanyLogo = (domain: string) => {
    // Use Next.js image proxy to fetch company logos from Clearbit
    const clearbitUrl = `https://logo.clearbit.com/${domain}?size=256`;
    return `/api/image-proxy?url=${encodeURIComponent(clearbitUrl)}`;
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
              {/* Company Logo */}
              <img
                src={getCompanyLogo(exp.companyDomain)}
                alt={`${exp.company} logo`}
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                className="flex-shrink-0 w-10 h-10 rounded-lg bg-white p-1.5 xl:p-[0px] object-fill transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                onError={(e) => {
                  // Fallback: Show first letter of company name
                  const target = e.target as HTMLImageElement;
                  const wrapper = document.createElement("div");
                  wrapper.className =
                    "flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg";
                  wrapper.innerHTML = `<span class="text-white font-bold text-sm">${exp.company.charAt(
                    0
                  )}</span>`;
                  target.parentElement?.replaceChild(wrapper, target);
                }}
              />

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
