"use client";
import { useEffect, useRef } from "react";
import { X, Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Project } from "@/types/project";
import { useTheme } from "@/hooks/useTheme";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { TechChip } from "@/components/shared/TechChip";
import { cn } from "@/lib/cn";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { c } = useTheme();
  const open = !!project;
  const ref = useRef<HTMLDivElement | null>(null);
  useLockBodyScroll(open);
  useFocusTrap(ref, open);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className={cn("relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl", c.surface)}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className={cn("absolute right-4 top-4 z-10 rounded-lg p-2", c.surface, c.surfaceHover, c.ring)}
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
        <div className="grid gap-0 md:grid-cols-2">
          <div className={cn("flex aspect-[16/10] items-center justify-center border-b md:border-b-0 md:border-r", c.divider, c.accentBgSoft)}>
            <FolderGit2 className="h-16 w-16 opacity-60" aria-hidden />
          </div>
          <div className="p-6 md:p-8">
            <h3 id="project-modal-title" className={cn("text-2xl font-bold", c.pageText)}>
              {project.title}
            </h3>
            <p className={cn("mt-3 text-sm leading-relaxed", c.muted)}>{project.description}</p>
            {project.features && project.features.length > 0 && (
              <div className="mt-5">
                <h4 className={cn("mb-2 text-sm font-semibold", c.pageText)}>Key features</h4>
                <ul className={cn("space-y-1.5 text-sm", c.muted)}>
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={c.accent}>•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-5">
              <h4 className={cn("mb-2 text-sm font-semibold", c.pageText)}>Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <TechChip key={t}>{t}</TechChip>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <h4 className={cn("mb-2 text-sm font-semibold", c.pageText)}>Categories</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.categories.map((cat) => (
                  <span key={cat} className={cn("rounded-full px-3 py-1 text-xs font-medium", c.accentBgSoft)}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium", c.surface, c.surfaceHover, c.ring)}
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium", c.accentBg, c.ring)}
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}