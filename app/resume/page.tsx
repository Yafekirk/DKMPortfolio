import { ResumePageContent } from "@/components/pages/ResumePageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Preview and download the resume of Dustin Kirk Manalastas, including education, skills, and project highlights.",
};

export default function ResumePage() {
  return <ResumePageContent />;
}
