import { ContactPageContent } from "@/components/pages/ContactPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dustin Kirk Manalastas for internships, collaborations, and web development opportunities.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
