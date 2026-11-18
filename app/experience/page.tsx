import { ExperiencePageContent } from "@/components/pages/ExperiencePageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Education",
  description:
    "View the education, academic projects, and career development timeline of Dustin Kirk Manalastas.",
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
