"use client";

import { portfolioData } from "@/config/portfolio-data";

export function AboutCard() {
  return (
    <div className="bg-neutral-900 p-4 h-full rounded-lg flex flex-col text-white transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="font-bold font-geist-mono uppercase">About Me</div>
      <div className="font-geist text-xl mb-2">Who Am I?</div>
      <p className="text-lg leading-relaxed font-mono">
        {portfolioData.about.map((item, idx) => (
          <span key={idx}>
            - {item}
            {idx < portfolioData.about.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}
