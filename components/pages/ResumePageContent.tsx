"use client";

import { buttonClassName } from "@/components/ui/Button";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/data/experience";
import { projects } from "@/data/projects";
import { featuredSkills } from "@/data/skills";
import { siteConfig } from "@/data/site";
import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const RESUME_PDF_PATH = "/resume.pdf";

export function ResumePageContent() {
  const [available, setAvailable] = useState<boolean | null>(null);
  const education = timeline.find((item) => item.type === "education");

  useEffect(() => {
    let active = true;

    fetch(RESUME_PDF_PATH, { method: "HEAD" })
      .then((response) => {
        if (active) setAvailable(response.ok);
      })
      .catch(() => {
        if (active) setAvailable(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Resume"
          title="Professional Resume"
          description="Review a structured overview of my career objective, education, skills, and project highlights — and download the PDF when available."
          className="mb-12"
        />

        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card-elevated text-accent">
                <FileText className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                  Resume Preview
                </h2>
                <p className="mt-2 text-sm text-foreground-secondary">
                  PDF resume with education, skills, projects, and contact
                  details.
                </p>
              </div>
            </div>

            <div className="mt-8">
              {available === null ? (
                <p className="text-sm text-foreground-muted">
                  Checking resume availability...
                </p>
              ) : available ? (
                <a
                  href={RESUME_PDF_PATH}
                  download
                  className={buttonClassName({ size: "lg" })}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              ) : (
                <div className="rounded-2xl border border-dashed border-border bg-card-elevated p-5">
                  <p className="text-sm font-medium text-foreground">
                    Resume file not found yet.
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Add your PDF at{" "}
                    <code className="rounded bg-background px-1.5 py-0.5 font-mono text-xs text-accent">
                      public/resume.pdf
                    </code>{" "}
                    to enable downloads.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <section className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                Career Objective
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                {siteConfig.careerObjective}
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                Education
              </h2>
              <p className="mt-4 text-sm font-medium text-foreground">
                {education?.title ?? siteConfig.degree}
              </p>
              <p className="mt-1 text-sm text-foreground-secondary">
                {education?.organization ?? "Adamson University"}
              </p>
              <p className="mt-1 font-mono text-xs text-foreground-muted">
                {education?.duration ?? "Ongoing"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                {education?.description}
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <section className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                Skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-card-elevated px-3 py-1.5 text-sm text-foreground-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                Project Highlights
              </h2>
              <ul className="mt-4 space-y-3">
                {projects.map((project) => (
                  <li key={project.id}>
                    <p className="text-sm font-medium text-foreground">
                      {project.name}
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      {project.shortDescription}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
