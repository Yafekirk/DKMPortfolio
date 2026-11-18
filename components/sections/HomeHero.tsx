"use client";

import { buttonClassName } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { Code2, Database, Layout, Sparkles, Terminal } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const floatingIcons = [
  { icon: Code2, className: "left-[8%] top-[18%]", delay: 0 },
  { icon: Terminal, className: "right-[6%] top-[28%]", delay: 0.2 },
  { icon: Database, className: "left-[2%] bottom-[28%]", delay: 0.4 },
  { icon: Layout, className: "right-[10%] bottom-[18%]", delay: 0.55 },
  { icon: Sparkles, className: "left-[42%] top-[6%]", delay: 0.7 },
];

export function HomeHero() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full glow-orb blur-2xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full glow-orb blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            Aspiring Web Developer
          </motion.span>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Dustin Kirk Manalastas.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl text-foreground-secondary sm:text-2xl"
          >
            Aspiring Web Developer
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-foreground-secondary"
          >
            I&apos;m an Information Technology student passionate about building
            modern, responsive, and user-friendly web applications.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/projects"
              className={buttonClassName({
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              Explore My Projects
            </Link>
            <Link
              href="/about"
              className={buttonClassName({
                size: "lg",
                variant: "secondary",
                className: "w-full sm:w-auto",
              })}
            >
              About Me
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-6 rounded-full glow-orb blur-2xl" />
          <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_center,var(--glow),transparent_65%)]" />

          {floatingIcons.map(({ icon: Icon, className, delay }) => (
            <motion.div
              key={className}
              className={`absolute z-20 hidden rounded-xl border border-border bg-card/90 p-2.5 text-accent shadow-[var(--shadow-soft)] backdrop-blur sm:flex ${className}`}
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -8, 0], rotate: [0, 2, 0] }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </motion.div>
          ))}

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/60 p-3 shadow-[var(--shadow-soft)] backdrop-blur-sm dark:bg-card/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-card-elevated to-background-secondary">
              <div className="absolute inset-x-8 bottom-8 top-10 rounded-full bg-accent/20 blur-3xl dark:bg-accent/25" />
              <Image
                src="/images/dustin-casual.png"
                alt="Dustin Kirk Manalastas wearing sunglasses and a pink Maui shirt."
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
