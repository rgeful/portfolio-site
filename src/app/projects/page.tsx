"use client";

import { PROJECTS, WIP_PROJECTS, ProjectCategory } from "@/constants/projects";
import Image from "next/image";
import { useState } from "react";

const categories: ProjectCategory[] = ["Programming", "Art", "Video Editing", "Extra"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Programming");

  const filteredProjects = PROJECTS.filter(project => project.category === activeCategory);
  const filteredWIPProjects = WIP_PROJECTS.filter(project => project.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">

      {/* Filter tabs */}
      <div className="flex gap-3 md:gap-6 mb-8 border-b border-zinc-800 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`pb-2 transition-colors whitespace-nowrap text-sm md:text-base ${
              activeCategory === category
                ? "text-white border-b-2 border-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {filteredProjects.map((project, index) => {
            const projectLink = project.liveUrl || project.githubUrl;
            return (
              <a
                key={index}
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-all duration-200 hover:scale-[1.02] rounded-lg border border-transparent hover:border-zinc-700"
              >
                <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-3">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <h3 className="text-white px-3 font-semibold mb-1">{project.title}</h3>
                  <p className="text-zinc-400 px-3 text-sm leading-relaxed">{project.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-zinc-400">No projects in this category yet.</p>
        </div>
      )}

      {/* Work in Progress Section */}
      {filteredWIPProjects.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-white mb-6">Work in Progress</h2>
          <div className="space-y-6">
            {filteredWIPProjects.map((project, index) => {
              const projectLink = project.liveUrl || project.githubUrl;
              return (
                <a
                  key={index}
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-zinc-800 rounded-lg p-6 transition-all duration-200 hover:scale-[1.01]"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
