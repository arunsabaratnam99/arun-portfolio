"use client";

import { portfolioData } from "@/config/portfolio-data";
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  liveUrl?: string;
  image?: string;
  gradient?: string;
}

export function ProjectsCard() {
  const projects = portfolioData.projects || [];

  if (projects.length === 0) {
    return (
      <div className="bg-neutral-900 p-6 rounded-lg flex flex-col text-white">
        <div className="font-bold font-geist-mono uppercase">Projects</div>
        <div className="font-geist text-xl mb-4">What I've Built.</div>
        <div className="flex items-center justify-center text-neutral-500 text-sm py-8">
          Add projects to portfolio-data.ts
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 p-6 rounded-lg flex flex-col text-white">
      <div className="font-bold font-geist-mono uppercase">Projects</div>
      <div className="font-geist text-xl mb-6">What I've Built.</div>
      
      {/* Horizontal grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project: Project, idx: number) => (
          <div
            key={idx}
            className="group relative rounded-lg border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-300 transform hover:scale-[1.02] bg-neutral-900/50 no-underline [&_*]:no-underline"
          >
            {/* Project Image - Larger */}
            <div 
              className={`h-44 relative overflow-hidden ${
                project.image ? '' : project.gradient || 'bg-gradient-to-br from-blue-600/20 to-purple-600/20'
              }`}
            >
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-12 h-12 text-neutral-600 group-hover:text-neutral-500 transition-colors" />
                </div>
              )}
              
                            
              {/* Links overlay - top right */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Project Content - More spacious */}
            <div className="p-4 bg-neutral-900">
              <h3 className="font-geist-mono text-base font-semibold mb-2 text-white">
                {project.title}
              </h3>
              
              <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack - Show all */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech: string, techIdx: number) => (
                  <span
                    key={techIdx}
                    className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400 font-geist-mono hover:bg-neutral-700 hover:text-neutral-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
