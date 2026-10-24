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
        // h-full மூலம் grid cell-ஐ முழுசா நிரப்பும்
        "group flex h-full w-full flex-col gap-4 rounded-2xl p-5 text-left transition-all duration-300",
        c.surface,
        c.surfaceHover,
        c.ring,
      )}
    >
      {/* Image Preview */}
      <div
        className={cn(
          "flex aspect-[16/9] shrink-0 items-center justify-center overflow-hidden rounded-xl",
          c.cardPreview,
        )}
      >
        <FolderGit2 className={cn("h-10 w-10 opacity-60", c.accent)} aria-hidden />
      </div>

      {/* Content (Title & Desc) - flex-1 கொடுத்து இடத்தை நிரப்ப வைக்கிறோம் */}
      <div className="flex flex-1 flex-col gap-2">
        <h3 className={cn("line-clamp-2 text-lg font-semibold leading-snug", c.pageText)}>
          {project.title}
        </h3>
        <p className={cn("line-clamp-3 text-sm", c.muted)}>
          {project.description}
        </p>
      </div>

      {/* Footer (Tags & Button) - mt-auto கொடுத்து எப்பவும் கீழே இருக்க வைக்கிறோம் */}
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