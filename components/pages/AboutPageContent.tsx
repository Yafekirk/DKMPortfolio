"use client";

import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export function AboutPageContent() {
  return (
    <div className="relative pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--glow),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="About Me"
          title="Personal Background & Professional Identity"
          description="A closer look at who I am, what drives me, and the kind of developer I'm becoming."
          className="mb-14"
        />

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="absolute -inset-3 rounded-[1.75rem] bg-accent/15 blur-2xl dark:bg-accent/20" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-accent/40 bg-card p-2 shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-card-elevated">
                  <Image
                    src="/images/dustin-formal.png"
                    alt="Dustin Kirk Manalastas wearing a black formal suit."
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 80vw, 360px"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-foreground-muted lg:text-left">
                Formal portrait used for professional presentation.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.05}>
              <section>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                  Full Introduction
                </h2>
                <div className="mt-4 space-y-4">
                  {siteConfig.about.introduction.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-foreground-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.08}>
              <section>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                  Personal Background
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground-secondary">
                  {siteConfig.about.background}
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                  Career Goals
                </h2>
                <ul className="mt-4 space-y-3">
                  {siteConfig.about.careerGoals.map((goal) => (
                    <li
                      key={goal}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <section className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                Interests
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {siteConfig.about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-xl border border-border bg-card-elevated px-3 py-2 text-sm text-foreground-secondary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <section className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                Developer Philosophy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground-secondary">
                {siteConfig.about.philosophy}
              </p>
            </section>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <section>
            <h2 className="mb-5 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
              Personal Information
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.personalInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-card p-4 transition hover:border-accent/50"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-border bg-card p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                Find Me Online
              </h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                Connect through GitHub, LinkedIn, or email.
              </p>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
