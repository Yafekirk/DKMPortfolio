import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-[var(--shadow-soft)]",
  secondary:
    "bg-card-elevated text-foreground border border-border hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-foreground-secondary hover:text-accent hover:bg-card",
  outline:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const baseButtonClassName =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-250 focus-ring disabled:cursor-not-allowed disabled:opacity-60";

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(baseButtonClassName, variants[variant], sizes[size], className);
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClassName({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
