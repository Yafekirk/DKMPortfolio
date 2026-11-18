"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/ui/PageTransition";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const ChatbotWidget = dynamic(
  () =>
    import("@/components/chatbot/ChatbotWidget").then(
      (mod) => mod.ChatbotWidget,
    ),
  { ssr: false },
);

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-[70vh]">{children}</main>
      </PageTransition>
      <Footer />
      <ChatbotWidget />
    </>
  );
}
