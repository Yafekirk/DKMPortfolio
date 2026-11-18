"use client";

import type { ProjectScreenshot } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ProjectScreenshotGalleryProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectScreenshotGallery({
  screenshots,
}: ProjectScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex =
    screenshots.length === 0
      ? 0
      : Math.min(activeIndex, screenshots.length - 1);

  if (screenshots.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-foreground-muted">
        Screenshots will be added as the project evolves.
      </div>
    );
  }

  const active = screenshots[safeIndex];

  function goTo(index: number) {
    const next = (index + screenshots.length) % screenshots.length;
    setActiveIndex(next);
  }

  return (
    <div>
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
        <div className="relative aspect-[16/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.alt}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>

        {screenshots.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(safeIndex - 1)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-background/85 text-foreground backdrop-blur transition hover:border-accent hover:text-accent focus-ring"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(safeIndex + 1)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-background/85 text-foreground backdrop-blur transition hover:border-accent hover:text-accent focus-ring"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : null}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-foreground">{active.label}</p>
        <div className="flex items-center gap-1.5">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition focus-ring",
                index === safeIndex
                  ? "bg-accent"
                  : "bg-border hover:bg-foreground-muted",
              )}
              aria-label={`Show ${shot.label}`}
              aria-current={index === safeIndex}
            />
          ))}
        </div>
      </div>

      {screenshots.length > 1 ? (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "overflow-hidden rounded-xl border transition focus-ring",
                index === safeIndex
                  ? "border-accent shadow-[var(--shadow-soft)]"
                  : "border-border hover:border-accent/60",
              )}
              aria-label={`Select ${shot.label}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={shot.alt}
                className="aspect-[16/10] h-full w-full object-cover object-top"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
