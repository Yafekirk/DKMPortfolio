import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: PageIntroProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-foreground-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
