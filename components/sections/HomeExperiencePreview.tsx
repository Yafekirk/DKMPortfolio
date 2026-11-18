"use client";

import { buttonClassName } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/data/experience";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export function HomeExperiencePreview() {
  const education = timeline.find((item) => item.type === "education");

  return (
    <section className="bg-background-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Education & Experience"
          description="A brief look at my academic path and the experience I'm building along the way."
        />

        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
              Education
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
              {education?.title ?? siteConfig.degree}
            </h3>
            <p className="mt-2 text-sm font-medium text-foreground-secondary">
              {education?.organization ?? "Adamson University"}
            </p>
            <p className="mt-1 font-mono text-xs text-foreground-muted">
              {education?.duration ?? "Ongoing"}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
              {education?.description ??
                "Currently pursuing Information Technology and building practical development skills through coursework and projects."}
            </p>
            <Link
              href="/experience"
              className={buttonClassName({ className: "mt-6" })}
            >
              View Full Experience
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
