"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  // Reset mobile menu when the route changes without an effect-driven setState.
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-250",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="rounded-lg font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight text-foreground focus-ring"
        >
          <span className="text-accent">DK</span>M
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm transition-colors focus-ring",
                  active
                    ? "text-accent"
                    : "text-foreground-secondary hover:text-accent",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                {active ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover focus-ring sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground focus-ring lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-background lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {siteConfig.navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm transition-colors focus-ring",
                  active
                    ? "bg-card text-accent"
                    : "text-foreground-secondary hover:bg-card hover:text-accent",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-accent-hover focus-ring"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
