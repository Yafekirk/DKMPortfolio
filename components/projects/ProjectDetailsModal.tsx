"use client";

import { ProjectActionButtons } from "@/components/projects/ProjectActionButtons";
import { ProjectScreenshotGallery } from "@/components/projects/ProjectScreenshotGallery";
import { projects, type Project } from "@/data/projects";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Target,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef } from "react";
import { Button } from "@/components/ui/Button";

type ProjectDetailsModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
};

const statusStyles: Record<Project["status"], string> = {
  Completed: "bg-accent/15 text-accent",
  "In Progress": "bg-amber-500/15 text-amber-500",
  Planned: "bg-foreground-muted/15 text-foreground-secondary",
};

export function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
  onSelectProject,
}: ProjectDetailsModalProps) {
  const reduceMotion = usePrefersReducedMotion();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const currentIndex = project
    ? projects.findIndex((item) => item.id === project.id)
    : -1;

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 10);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  function goToRelative(offset: number) {
    if (!onSelectProject || currentIndex < 0) return;
    const nextIndex = (currentIndex + offset + projects.length) % projects.length;
    onSelectProject(projects[nextIndex]);
  }

  return (
    <AnimatePresence>
      {isOpen && project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-10 flex max-h-[90vh] w-[95vw] max-w-[1100px] flex-col overflow-hidden rounded-t-3xl border border-accent/30 bg-background-secondary shadow-[var(--shadow-soft)] sm:max-h-[85vh] sm:w-[90vw] sm:rounded-3xl lg:w-[min(1100px,92vw)]"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-background-secondary/95 px-5 py-4 backdrop-blur sm:px-7">
              <div className="min-w-0 pr-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {project.category}
                </p>
                <h2
                  id={titleId}
                  className="mt-1 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground sm:text-2xl"
                >
                  {project.name}
                </h2>
                <span
                  className={cn(
                    "mt-2 inline-flex rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
                    statusStyles[project.status],
                  )}
                >
                  {project.status}
                </span>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-foreground-secondary transition hover:border-accent hover:text-accent focus-ring"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 sm:px-7 sm:py-8">
              <ProjectScreenshotGallery
                key={project.id}
                screenshots={project.screenshots}
              />

              <div className="mt-8 space-y-8">
                <section>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    Project Overview
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary sm:text-base">
                    {project.shortDescription}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary sm:text-base">
                    {project.overview}
                  </p>
                </section>

                <section>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    Problem Statement
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary sm:text-base">
                    {project.problemStatement}
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    Key Features
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-foreground-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-3 flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    <Target className="h-4 w-4 text-accent" />
                    Objectives
                  </h3>
                  <ul className="space-y-2">
                    {project.objectives.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground-secondary"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    Development Approach
                  </h3>
                  <ul className="space-y-2">
                    {project.developmentProcess.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground-secondary"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="mb-3 flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    <Lightbulb className="h-4 w-4 text-accent" />
                    Challenges and Solutions
                  </h3>
                  <div className="space-y-3">
                    {project.challenges.map((item) => (
                      <div
                        key={item.challenge}
                        className="rounded-2xl border border-border bg-card p-4"
                      >
                        <p className="text-sm font-medium text-foreground">
                          {item.challenge}
                        </p>
                        <p className="mt-2 text-sm text-foreground-secondary">
                          {item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    <User className="h-4 w-4 text-accent" />
                    My Role
                  </h3>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    {project.role}
                  </p>
                </section>

                <div className="border-t border-border pt-6">
                  <ProjectActionButtons project={project} size="md" />
                </div>

                {onSelectProject ? (
                  <div className="flex items-center justify-between gap-3 border-t border-border pt-6">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => goToRelative(-1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous Project
                    </Button>
                    <p className="font-mono text-xs text-foreground-muted">
                      {currentIndex + 1} / {projects.length}
                    </p>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => goToRelative(1)}
                    >
                      Next Project
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
