import React from "react";
import ProjectCard from "@/components/ProjectCard";
import PageBackground from "@/components/PageBackground";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageBackground />
      <section className="relative z-20 flex min-h-screen flex-col items-start justify-start bg-transparent px-4 py-20 md:px-16">
      <div className="mx-auto mb-10 w-full max-w-6xl">
        {/* Projects Section */}
        <div className="text-[#ebdbb2] space-y-8">
          <div className="mx-auto w-full max-w-2xl flex items-center justify-center space-x-2 text-[#fabd2f]">
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
    </main>
  );
}
