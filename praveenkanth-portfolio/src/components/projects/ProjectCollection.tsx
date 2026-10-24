"use client";
import { useCallback, useRef, useState } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectCollection({
  projects,
  layout = "masonry",
}: {
  projects: Project[];
  layout?: "masonry" | "featured";
}) {
  const [active, setActive] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const open = useCallback((project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(project);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  return (
    <>
      <div
        className={
          layout === "masonry"
            ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "grid gap-6 sm:grid-cols-2"
        }
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={(btn) => open(p, btn)} />
        ))}
      </div>
      <ProjectModal project={active} onClose={close} />
    </>
  );
}