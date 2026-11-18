"use client";

import { Button, buttonClassName } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/Icons";
import type { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

type ProjectActionButtonsProps = {
  project: Project;
  size?: "sm" | "md" | "lg";
  showDetails?: boolean;
  onOpenDetails?: () => void;
};

export function ProjectActionButtons({
  project,
  size = "sm",
  showDetails = false,
  onOpenDetails,
}: ProjectActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {showDetails && onOpenDetails ? (
        <Button type="button" size={size} onClick={onOpenDetails}>
          View Details
        </Button>
      ) : null}

      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName({ variant: "outline", size })}
        >
          <GitHubIcon className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
      ) : (
        <Button
          type="button"
          size={size}
          variant="outline"
          disabled
          title="Source code coming soon"
        >
          <GitHubIcon className="h-4 w-4" aria-hidden="true" />
          Source Coming Soon
        </Button>
      )}

      {project.liveDemoUrl ? (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName({ variant: "ghost", size })}
          aria-label={`Open live demo for ${project.name}`}
          title="Open live homepage"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live Demo
        </a>
      ) : (
        <Button
          type="button"
          size={size}
          variant="ghost"
          disabled
          title="Live demo coming soon"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live Demo
        </Button>
      )}
    </div>
  );
}
