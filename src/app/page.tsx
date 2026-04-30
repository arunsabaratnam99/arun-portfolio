"use client";

import { portfolioData } from "@/config/portfolio-data";
import { settings } from "@/config/settings";
import { HeroSection } from "@/components/hero-section";
import { ExperienceCard } from "@/components/experience-card";
import { GithubCard } from "@/components/github-card";
import { LeetCodeCard } from "@/components/leetcode-card";
import { MoviesCard } from "@/components/movies-card";
import { ClockCard } from "@/components/clock-card";
import { AboutCard } from "@/components/about-card";
import { MapboxCard } from "@/components/mapbox-card";
import { ProjectsCard } from "@/components/projects-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black pt-5 px-5">
      <div className="flex justify-center">
        <div className="relative w-full max-w-[1920px]">
          <HeroSection />
        </div>
      </div>

      <div className="flex-1 min-h-0 flex h-full w-full py-5">
        <div className="grid h-full w-full gap-5 grid-cols-1 auto-rows-auto md:grid-cols-6 md:grid-rows-2 md:auto-rows-[12rem]">
          {/* Experience Card - 2 columns, row 1 */}
          <div className="md:col-start-1 md:col-span-2 md:row-start-1">
            <ExperienceCard />
          </div>

          {/* Movies Card - 1 column, row 1 */}
          <div className="md:col-start-3 md:col-span-1 md:row-start-1">
            <MoviesCard />
          </div>

          {/* Clock Card - 1 column, row 1 */}
          <div className="md:col-start-4 md:col-span-1 md:row-start-1">
            <ClockCard />
          </div>

          {/* Map Card - 2 columns, 2 rows */}
          <div className="md:col-start-5 md:col-span-2 md:row-span-2">
            <MapboxCard />
          </div>

          {/* GitHub Card - 1 column, row 2 - Conditionally shown */}
          {settings.showGithub && (
            <div className="md:col-start-1 md:col-span-1 md:row-start-2">
              <GithubCard />
            </div>
          )}

          {/* LeetCode Card - Expands to 2 columns when GitHub is hidden */}
          <div className={`md:row-start-2 ${settings.showGithub ? 'md:col-start-2 md:col-span-1' : 'md:col-start-1 md:col-span-2'}`}>
            <LeetCodeCard />
          </div>

          {/* About Card - 2 columns, row 2 */}
          <div className="md:col-start-3 md:col-span-2 md:row-start-2">
            <AboutCard />
          </div>
        </div>
      </div>

      {/* Projects Section - Full width below bento grid */}
      <div className="w-full pb-5">
        <ProjectsCard />
      </div>
    </div>
  );
}
