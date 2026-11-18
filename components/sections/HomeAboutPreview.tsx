"use client";

import { buttonClassName } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export function HomeAboutPreview() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--glow),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profile"
          title="About Me"
          description="A short introduction to who I am and where I'm headed as an aspiring web developer."
        />

        <Reveal>
          <div className="mx-auto grid max-w-4xl items-center gap-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="relative mx-auto w-full max-w-[220px]">
              <div className="absolute -inset-2 rounded-[1.5rem] bg-accent/15 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-accent/40 bg-card-elevated p-1.5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem]">
                  <Image
                    src="/images/dustin-formal.png"
                    alt="Dustin Kirk Manalastas wearing a black formal suit."
                    fill
                    className="object-cover object-top"
                    sizes="220px"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-base leading-relaxed text-foreground-secondary">
                {siteConfig.about.shortIntro}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                {siteConfig.about.introduction[0]}
              </p>
              <Link
                href="/about"
                className={buttonClassName({ className: "mt-6" })}
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
