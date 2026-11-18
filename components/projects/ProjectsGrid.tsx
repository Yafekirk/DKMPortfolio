"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDetailsModal } from "@/components/projects/ProjectDetailsModal";
import type { Project } from "@/data/projects";
import { useCallback, useState } from "react";

type ProjectsGridProps = {
  projects: Project[];
  className?: string;
};

export function ProjectsGrid({ projects, className }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDetails = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <div
        className={
          className ?? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        }
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenDetails={openDetails}
          />
        ))}
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        onSelectProject={setSelectedProject}
      />
    </>
  );
}
