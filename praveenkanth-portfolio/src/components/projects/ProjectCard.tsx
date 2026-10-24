"use client";
import Image from "next/image";
import { FolderGit2, ExternalLink, Lock } from "lucide-react";
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
        "group flex h-full w-full flex-col gap-4 rounded-2xl p-5 text-left transition-all duration-300",
        c.surface,
        c.surfaceHover,
        c.ring,
      )}
    >
      {/* Image Preview */}
      <div
        className={cn(
          "relative flex aspect-[16/9] shrink-0 items-center justify-center overflow-hidden rounded-xl",
          c.cardPreview,
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <FolderGit2 className={cn("h-10 w-10 opacity-60", c.accent)} aria-hidden />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className={cn("line-clamp-2 text-lg font-semibold leading-snug", c.pageText)}>
            {project.title}
          </h3>
          {project.isConfidential && (
            <span className={cn("flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider", c.chip)}>
              <Lock className="h-3 w-3" /> NDA
            </span>
          )}
        </div>
        <p className={cn("line-clamp-3 text-sm", c.muted)}>
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto flex flex-col gap-3 pt-2">
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
      </div>
    </button>
  );
}