"use client";

import { buttonClassName } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { socialProfile } from "@/data/socialLinks";
import Link from "next/link";

export function HomeContactCTA() {
  return (
    <section className="bg-background-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center shadow-[var(--shadow-soft)] sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow),transparent_55%)]" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s Build Something Great Together.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-foreground-secondary">
                Open to internships, collaborations, and meaningful web
                development opportunities.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className={buttonClassName({ size: "lg" })}>
                  Contact Me
                </Link>
                <a
                  href={socialProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName({ size: "lg", variant: "secondary" })}
                >
                  <GitHubIcon className="h-4 w-4" />
                  View My GitHub
                </a>
                <a
                  href={socialProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName({ size: "lg", variant: "outline" })}
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>

              <div className="mt-8 flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
