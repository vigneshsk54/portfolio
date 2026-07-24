"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// PROJECTS"
          title="Selected work."
          description="Four builds spanning applied AI, published security research, and full-stack systems — each with a full case study."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
