"use client";

import { ProjectActionButtons } from "@/components/projects/ProjectActionButtons";
import type { Project } from "@/data/projects";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  index?: number;
  onOpenDetails: (project: Project) => void;
};

const statusStyles: Record<Project["status"], string> = {
  Completed: "bg-black/55 text-white backdrop-blur-md dark:bg-black/60",
  "In Progress": "bg-black/55 text-amber-200 backdrop-blur-md dark:bg-black/60",
  Planned: "bg-black/55 text-zinc-200 backdrop-blur-md dark:bg-black/60",
};

export function ProjectCard({
  project,
  index = 0,
  onOpenDetails,
}: ProjectCardProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="relative isolate overflow-hidden bg-neutral-950">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={cn(
              "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
              project.imagePosition === "top" ? "object-top" : "object-center",
            )}
            priority={index < 2}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent opacity-70 dark:opacity-80" />
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
            statusStyles[project.status],
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
          {project.category}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-secondary">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-card-elevated px-2.5 py-1 font-mono text-[11px] text-foreground-secondary"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 ? (
            <span className="rounded-lg border border-border bg-card-elevated px-2.5 py-1 font-mono text-[11px] text-foreground-muted">
              +{project.techStack.length - 5}
            </span>
          ) : null}
        </div>

        <div className="mt-6">
          <ProjectActionButtons
            project={project}
            showDetails
            onOpenDetails={() => onOpenDetails(project)}
          />
        </div>
      </div>
    </motion.article>
  );
}
