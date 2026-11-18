import { SkillsPageContent } from "@/components/pages/SkillsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Technologies",
  description:
    "Explore the frontend, backend, database, tools, and AI-assisted development skills of Dustin Kirk Manalastas.",
};

export default function SkillsPage() {
  return <SkillsPageContent />;
}
