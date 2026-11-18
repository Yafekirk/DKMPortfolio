import { SiteShell } from "@/components/layout/SiteShell";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dustin Kirk Manalastas | Aspiring Web Developer",
    template: "%s | DKM Portfolio",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: "Dustin Kirk Manalastas | Aspiring Web Developer",
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: "/images/dustin-formal.png",
        width: 800,
        height: 1000,
        alt: "Dustin Kirk Manalastas wearing a black formal suit.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dustin Kirk Manalastas | Aspiring Web Developer",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
