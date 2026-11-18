"use client";

import type { Skill } from "@/data/skills";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  Bot,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Layout,
  MousePointer2,
  Palette,
  Server,
  Sparkles,
  Terminal,
  Wind,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  HTML5: FileCode2,
  CSS3: Layout,
  JavaScript: Braces,
  TypeScript: Code2,
  "React.js": Code2,
  "Next.js": Sparkles,
  "Tailwind CSS": Wind,
  "Node.js": Server,
  "Express.js": Server,
  "REST API Development": Terminal,
  MySQL: Database,
  PostgreSQL: Database,
  Supabase: Database,
  Git: GitBranch,
  GitHub: GitBranch,
  "VS Code": Code2,
  Canva: Palette,
  Vercel: Sparkles,
  Cursor: MousePointer2,
  "AI Coding Assistants": Bot,
  "Prompt Engineering": Sparkles,
  "AI-Assisted Debugging": Bot,
  "Agentic Development Workflows": Bot,
};

type SkillCardProps = {
  skill: Skill;
  index?: number;
  showDescription?: boolean;
};

export function SkillCard({
  skill,
  index = 0,
  showDescription = true,
}: SkillCardProps) {
  const reduceMotion = usePrefersReducedMotion();
  const Icon = iconMap[skill.name] ?? Code2;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className={cn(
        "group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-250",
        "hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-soft)]",
      )}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card-elevated text-accent transition-colors group-hover:border-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-foreground">
        {skill.name}
      </h3>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
        {skill.category}
      </p>
      {showDescription ? (
        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
          {skill.description}
        </p>
      ) : null}
    </motion.article>
  );
}
