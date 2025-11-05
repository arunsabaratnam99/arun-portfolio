"use client";

import { useState } from "react";
import { portfolioData } from "@/config/portfolio-data";
import { ShaderBackground } from "./shader-background";

export function HeroSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[300px]">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        {/* GLSL Shader Background */}
        <ShaderBackground />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-start justify-start p-4">
          <div className="flex flex-col w-full h-full justify-between">
            <div>
              <h1 className="text-white font-extrabold uppercase font-geist-mono text-4xl md:text-8xl">
                {portfolioData.personal.name}
              </h1>
              <h2 className="font-geist-mono text-xl md:text-2xl lowercase text-white">
                {portfolioData.personal.tagline}
                {portfolioData.personal.subtitle && (
                  <>
                    , <br /> {portfolioData.personal.subtitle}
                  </>
                )}
              </h2>
            </div>

            <div className="flex flex-row gap-4">
              <div className="relative">
                <a
                  className="font-geist text-lg bg-black px-2 hover:text-neutral-300 transition-colors hover:cursor-crosshair"
                  href={portfolioData.social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredLink("github")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  GitHub
                </a>
                {hoveredLink === "github" && (
                  <div className="absolute left-0 bottom-full mb-2 bg-neutral-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none border border-neutral-700 animate-in fade-in slide-in-from-bottom-1 duration-200">
                    Open GitHub
                  </div>
                )}
              </div>
              <div className="relative">
                <a
                  className="font-geist text-lg bg-black px-2 hover:text-neutral-300 transition-colors hover:cursor-crosshair"
                  href={portfolioData.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredLink("linkedin")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  LinkedIn
                </a>
                {hoveredLink === "linkedin" && (
                  <div className="absolute left-0 bottom-full mb-2 bg-neutral-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none border border-neutral-700 animate-in fade-in slide-in-from-bottom-1 duration-200">
                    Open LinkedIn
                  </div>
                )}
              </div>
              <div className="relative">
                <a
                  className="font-geist text-lg bg-black px-2 hover:text-neutral-300 transition-colors hover:cursor-crosshair"
                  href={portfolioData.social.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredLink("resume")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {portfolioData.social.resume.label}
                </a>
                {hoveredLink === "resume" && (
                  <div className="absolute left-0 bottom-full mb-2 bg-neutral-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none border border-neutral-700 animate-in fade-in slide-in-from-bottom-1 duration-200">
                    Open Resume
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
