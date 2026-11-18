"use client";

import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { PageIntro } from "@/components/ui/PageIntro";
import { projects, type ProjectStatus } from "@/data/projects";
import { useMemo, useState } from "react";

export function ProjectsPageContent() {
  const [filter, setFilter] = useState<"All" | ProjectStatus>("All");

  const filters = useMemo(() => {
    const statuses = Array.from(
      new Set(projects.map((project) => project.status)),
    );
    return ["All", ...statuses] as Array<"All" | ProjectStatus>;
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.status === filter);
  }, [filter]);

  return (
    <div className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Projects"
          title="Development Showcase"
          description="Explore featured projects, technology stacks, status, and links to repositories or demos when available."
          className="mb-10"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-xl border px-4 py-2 text-sm transition focus-ring ${
                filter === item
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-card text-foreground-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <ProjectsGrid projects={filtered} />

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-foreground-secondary">
            No projects match this category yet.
          </p>
        ) : null}
      </div>
    </div>
  );
}
