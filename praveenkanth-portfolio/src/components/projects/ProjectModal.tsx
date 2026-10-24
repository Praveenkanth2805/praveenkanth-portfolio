"use client";
import { useEffect, useRef, useState } from "react";
import { X, Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Project } from "@/types/project";
import { useTheme } from "@/hooks/useTheme";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { TechChip } from "@/components/shared/TechChip";
import { cn } from "@/lib/cn";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { c } = useTheme();
  const open = !!project;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [atBottom, setAtBottom] = useState(false);

  useLockBodyScroll(open);
  useFocusTrap(wrapperRef, open);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;
    const check = () => {
      setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 8);
    };
    check();
    el.addEventListener("scroll", check, { passive: true });
    return () => el.removeEventListener("scroll", check);
  }, [open]);

  if (!project) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        c.modalOverlay,
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div ref={wrapperRef} className="relative w-full max-w-4xl">
        {/* Close button — outside the scroll container so it never scrolls away */}
        <button
          onClick={onClose}
          aria-label="Close"
          className={cn(
            "absolute right-3 top-3 z-30 rounded-xl p-2 shadow-lg transition-transform hover:scale-105",
            c.surface,
            c.surfaceHover,
            c.ring,
          )}
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "max-h-[90vh] overflow-y-auto overscroll-contain scroll-smooth rounded-2xl",
            c.surface,
            c.scrollbar,
          )}
        >
          <div className="grid gap-0 md:grid-cols-2">
            {/* Preview */}
            <div
              className={cn(
                "flex aspect-[16/10] items-center justify-center border-b md:border-b-0 md:border-r",
                c.divider,
                c.cardPreview,
              )}
            >
              <FolderGit2 className={cn("h-16 w-16 opacity-60", c.accent)} aria-hidden />
            </div>

            {/* Details */}
            <div className="p-6 md:pt-14 md:pr-16 md:pb-8 md:pl-8">
              <h3
                id="project-modal-title"
                className={cn("text-2xl font-bold leading-tight", c.pageText)}
              >
                {project.title}
              </h3>
              <p className={cn("mt-3 text-sm leading-relaxed", c.muted)}>
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mt-5">
                  <h4 className={cn("mb-2 text-sm font-semibold", c.pageText)}>
                    Key features
                  </h4>
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
                <h4 className={cn("mb-2 text-sm font-semibold", c.pageText)}>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <TechChip key={t}>{t}</TechChip>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h4 className={cn("mb-2 text-sm font-semibold", c.pageText)}>
                  Categories
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-medium",
                        c.accentBgSoft,
                      )}
                    >
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
                    className={cn(
                      "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium",
                      c.surface,
                      c.surfaceHover,
                      c.ring,
                    )}
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium",
                      c.accentBg,
                      c.ring,
                    )}
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade indicator */}
        {!atBottom && (
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-2xl bg-gradient-to-t to-transparent",
              c.scrollFade,
            )}
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}