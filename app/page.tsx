import { HomeAboutPreview } from "@/components/sections/HomeAboutPreview";
import { HomeContactCTA } from "@/components/sections/HomeContactCTA";
import { HomeExperiencePreview } from "@/components/sections/HomeExperiencePreview";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeProjectsPreview } from "@/components/sections/HomeProjectsPreview";
import { HomeResumePreview } from "@/components/sections/HomeResumePreview";
import { HomeSkillsPreview } from "@/components/sections/HomeSkillsPreview";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAboutPreview />
      <HomeSkillsPreview />
      <HomeProjectsPreview />
      <HomeExperiencePreview />
      <HomeResumePreview />
      <HomeContactCTA />
    </>
  );
}
