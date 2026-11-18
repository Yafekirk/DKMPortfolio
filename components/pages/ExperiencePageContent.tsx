"use client";

import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperiencePageContent() {
  const education = timeline.filter((item) => item.type === "education");
  const projects = timeline.filter((item) => item.type === "project");
  const experience = timeline.filter((item) => item.type === "experience");

  return (
    <div className="bg-background-secondary pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Experience & Education"
          title="Academic Path & Career Development"
          description="A professional timeline of education, academic projects, and experience — with placeholders where details are still being added."
          className="mb-14"
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <SummaryCard
            label="Education"
            value={`${education.length} entry`}
            note="Academic background"
          />
          <SummaryCard
            label="Academic Projects"
            value={`${projects.length} entries`}
            note="Hands-on development work"
          />
          <SummaryCard
            label="Experience"
            value={`${experience.length} entries`}
            note="Includes upcoming placeholders"
          />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-2 left-4 top-2 w-px bg-border sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <article
                  className={cn(
                    "relative pl-12 sm:pl-0",
                    index % 2 === 0
                      ? "sm:pr-[calc(50%+1.5rem)]"
                      : "sm:pl-[calc(50%+1.5rem)]",
                  )}
                >
                  <span className="absolute left-[0.7rem] top-5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:left-1/2 sm:-translate-x-1/2" />

                  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-accent/50">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                        {item.type}
                      </span>
                      {item.status ? (
                        <span className="rounded-full bg-card-elevated px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
                          {item.status}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-foreground-secondary">
                      {item.organization}
                    </p>
                    <p className="mt-1 font-mono text-xs text-foreground-muted">
                      {item.duration}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl rounded-2xl border border-dashed border-border bg-card p-6 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
            Work Experience & Internship Details
          </h2>
          <p className="mt-2 text-sm text-foreground-secondary">
            Professional roles and internship credentials will be listed here
            once available. No fabricated experience is shown.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
        {label}
      </p>
      <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
        {value}
      </p>
      <p className="mt-1 text-sm text-foreground-muted">{note}</p>
    </div>
  );
}
