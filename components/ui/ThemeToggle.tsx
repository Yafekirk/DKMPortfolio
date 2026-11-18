"use client";

import { useIsClient } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  const isDark = !isClient || resolvedTheme !== "light";
  const nextTheme = isDark ? "light" : "dark";
  const label = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground-secondary transition-all duration-250 hover:border-accent hover:text-accent focus-ring",
        className,
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
