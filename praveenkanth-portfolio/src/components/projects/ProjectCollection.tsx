"use client";
import { useCallback, useRef, useState } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { cn } from "@/lib/cn";
import { useTheme } from "@/hooks/useTheme";

export function ProjectCollection({
  projects,
  layout = "grid",
}: {
  projects: Project[];
  layout?: "grid" | "featured";
}) {
  const { c } = useTheme();
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

  // If layout is "featured" (Home Page), just render a flat grid without headings
  if (layout === "featured") {
    return (
      <>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={(btn) => open(p, btn)} />
          ))}
        </div>
        <ProjectModal project={active} onClose={close} />
      </>
    );
  }

  // Group projects by type for the main Projects page
  const products = projects.filter((p) => p.projectType === "product");
  const clientWork = projects.filter((p) => p.projectType === "client");
  const professional = projects.filter((p) => p.projectType === "professional");
  const academic = projects.filter((p) => p.projectType === "academic");

  const sections = [
    { title: "Products", data: products, desc: "Software and extensions built from scratch." },
    { title: "Client Work", data: clientWork, desc: "Freelance projects delivered to clients." },
    { title: "Professional Work", data: professional, desc: "Enterprise applications (Under NDA)." },
    { title: "Academic & Personal", data: academic, desc: "Technical experiments and college projects." },
  ];

  return (
    <>
      <div className="space-y-16">
        {sections.map((section) => {
          if (section.data.length === 0) return null;
          return (
            <div key={section.title}>
              <div className="mb-6">
                <h2 className={cn("text-2xl font-bold tracking-tight", c.pageText)}>{section.title}</h2>
                <p className={cn("mt-1 text-sm", c.muted)}>{section.desc}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.data.map((p) => (
                  <ProjectCard key={p.id} project={p} onClick={(btn) => open(p, btn)} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <ProjectModal project={active} onClose={close} />
    </>
  );
}