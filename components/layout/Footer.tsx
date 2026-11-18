"use client";

import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="rounded-lg font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground focus-ring"
            >
              <span className="text-accent">DK</span>M
            </Link>
            <p className="mt-3 text-sm font-medium text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-foreground-secondary">
              {siteConfig.title}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-block text-sm text-foreground-secondary transition hover:text-accent focus-ring rounded"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded text-sm text-foreground-secondary transition hover:text-accent focus-ring"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <SocialLinks />
            <button
              type="button"
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground-secondary transition hover:border-accent hover:text-accent focus-ring"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-foreground-muted">
            © 2026 Dustin Kirk Manalastas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
