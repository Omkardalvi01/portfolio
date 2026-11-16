import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen flex flex-col items-start justify-start py-20 bg-[#282828] px-4 md:px-16">
      <div className="w-full max-w-6xl mx-auto mb-10">
        {/* Projects Section */}
        <div className="text-[#ebdbb2] space-y-8">
          <div className="mx-auto w-full max-w-2xl flex items-center justify-center space-x-2 text-[#fabd2f]">
            <span className="text-4xl font-bold font-mono">&gt;</span>
            <h2 className="text-4xl font-medium tracking-wide text-[#ebdbb2]">
              my projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-2 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
