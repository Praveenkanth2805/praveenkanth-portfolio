"use client";
import { FolderGit2, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import { useTheme } from "@/hooks/useTheme";
import { TechChip } from "@/components/shared/TechChip";
import { cn } from "@/lib/cn";

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick?: (trigger: HTMLButtonElement) => void;
}) {
  const { c } = useTheme();
  return (
    <button
      onClick={(e) => onClick?.(e.currentTarget)}
      className={cn(
        "group flex w-full flex-col gap-4 rounded-2xl p-5 text-left transition-all duration-300",
        c.surface,
        c.surfaceHover,
        c.ring,
      )}
    >
      <div
        className={cn(
          "flex aspect-[16/9] items-center justify-center rounded-xl border",
          c.divider,
          c.accentBgSoft,
        )}
      >
        <FolderGit2 className="h-10 w-10 opacity-60" aria-hidden />
      </div>
      <div>
        <h3 className={cn("text-lg font-semibold", c.pageText)}>{project.title}</h3>
        <p className={cn("mt-1 line-clamp-2 text-sm", c.muted)}>{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((t) => (
          <TechChip key={t}>{t}</TechChip>
        ))}
        {project.technologies.length > 4 && (
          <span className={cn("self-center text-xs", c.subtle)}>
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
      <div className={cn("flex items-center gap-1 text-xs font-medium", c.accent)}>
        <ExternalLink className="h-3.5 w-3.5" /> View details
      </div>
    </button>
  );
}