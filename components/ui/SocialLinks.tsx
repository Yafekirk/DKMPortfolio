import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/socialLinks";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const iconMap: Record<
  (typeof socialLinks)[number]["id"],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
};

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map(({ href, label, id, external }) => {
        const Icon = iconMap[id];
        return (
          <a
            key={id}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground-secondary transition-all duration-250 hover:border-accent hover:text-accent focus-ring",
              iconClassName,
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
