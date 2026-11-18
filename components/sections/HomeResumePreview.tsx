"use client";

import { buttonClassName } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FileText } from "lucide-react";
import Link from "next/link";

export function HomeResumePreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Resume"
          description="Review my education, skills, and project highlights in a dedicated resume page."
        />

        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-start gap-6 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card-elevated text-accent">
              <FileText className="h-7 w-7" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                Dustin Kirk Manalastas — Resume
              </h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                Education, skills, project highlights, and career objective in
                one place.
              </p>
              <Link
                href="/resume"
                className={buttonClassName({ className: "mt-5" })}
              >
                View Resume
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
