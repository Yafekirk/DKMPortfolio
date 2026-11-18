import { buttonClassName } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          404
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-foreground-secondary sm:text-base">
          That route doesn&apos;t exist in this portfolio. Head back home or
          browse another section.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className={buttonClassName({ size: "lg" })}>
            Back to Home
          </Link>
          <Link
            href="/projects"
            className={buttonClassName({ size: "lg", variant: "secondary" })}
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
