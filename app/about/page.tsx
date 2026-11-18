import { AboutPageContent } from "@/components/pages/AboutPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Dustin Kirk Manalastas — background, career goals, interests, and developer philosophy.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
