"use client";

import { buttonClassName } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";
import { featuredSkills, skills } from "@/data/skills";
import Link from "next/link";

export function HomeSkillsPreview() {
  const previewSkills = featuredSkills
    .map((name) => skills.find((skill) => skill.name === name))
    .filter((skill): skill is (typeof skills)[number] => Boolean(skill));

  return (
    <section className="bg-background-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills Overview"
          description="A quick look at the technologies I use most when building modern web applications."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              showDescription={false}
            />
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link href="/skills" className={buttonClassName({ size: "lg" })}>
            Explore All Skills
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
