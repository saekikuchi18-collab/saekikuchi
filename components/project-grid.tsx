"use client";

import { AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/content/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
}
