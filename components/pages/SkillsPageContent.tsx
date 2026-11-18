"use client";

import { PageIntro } from "@/components/ui/PageIntro";
import { SkillCard } from "@/components/ui/SkillCard";
import { skillCategories, skills } from "@/data/skills";

export function SkillsPageContent() {
  return (
    <div className="bg-background-secondary pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Skills & Technologies"
          title="Technical Toolkit"
          description="Technologies and tools I'm learning and using to build modern, responsive web applications — organized by category."
          className="mb-14"
        />

        <div className="space-y-12">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );

            return (
              <section key={category}>
                <div className="mb-5 flex items-end justify-between gap-4 border-b border-border pb-3">
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground sm:text-2xl">
                    {category}
                  </h2>
                  <p className="font-mono text-xs text-foreground-muted">
                    {categorySkills.length} skills
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
