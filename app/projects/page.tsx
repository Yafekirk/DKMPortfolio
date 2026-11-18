import { ProjectsPageContent } from "@/components/pages/ProjectsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse featured development projects by Dustin Kirk Manalastas, including Tindalytics and the DKM portfolio.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
