"use client";

import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { buttonClassName } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import Link from "next/link";

export function HomeProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="Selected projects that highlight the problems I'm solving and the technologies I'm learning."
        />

        <ProjectsGrid projects={featured} />

        <Reveal className="mt-10 flex justify-center">
          <Link href="/projects" className={buttonClassName({ size: "lg" })}>
            View All Projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
