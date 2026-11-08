"use client";
import { useCallback, useRef, useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export function ProjectCollection({
  projects,
  layout = "grid",
}: {
  projects: Project[];
  layout?: "grid" | "featured";
}) {
  const { c } = useTheme();
  const [active, setActive] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  // Handle clicking outside to close if empty
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        if (!searchQuery) setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen, searchQuery]);

  const open = useCallback((project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(project);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const handleClear = () => {
    if (searchQuery) {
      setSearchQuery("");
      inputRef.current?.focus();
    } else {
      setIsSearchOpen(false);
    }
  };

  const filteredProjects = projects.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.technologies.some((t) => t.toLowerCase().includes(query)) ||
      p.categories.some((c) => c.toLowerCase().includes(query))
    );
  });

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

  const products = filteredProjects.filter((p) => p.projectType === "product");
  const clientWork = filteredProjects.filter((p) => p.projectType === "client");
  const professional = filteredProjects.filter((p) => p.projectType === "professional");
  const academic = filteredProjects.filter((p) => p.projectType === "academic");

  const sections = [
    { title: "Products", data: products, desc: "Software and extensions built from scratch." },
    { title: "Client Work", data: clientWork, desc: "Freelance projects delivered to clients." },
    { title: "Professional Work", data: professional, desc: "Enterprise applications (Under NDA)." },
    { title: "Academic & Personal", data: academic, desc: "Technical experiments and college projects." },
  ];

  // The Search Bar UI
  const searchAction = (
    <div 
      ref={searchContainerRef}
      className={cn(
        "relative flex h-10 items-center overflow-hidden rounded-xl border transition-all duration-300 ease-in-out shadow-sm",
        isSearchOpen ? "w-full sm:w-72" : "w-10 cursor-pointer",
        c.surface,
        c.surfaceHover
      )}
      onClick={() => !isSearchOpen && setIsSearchOpen(true)}
    >
      {/* Icon (Only visible when closed) */}
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
          isSearchOpen ? "pointer-events-none opacity-0" : "opacity-100",
          c.muted
        )}
      >
        <Search className="h-4 w-4" />
      </div>

      {/* Input Area (Only visible when open) */}
      <div className={cn("flex w-full items-center transition-opacity duration-300", !isSearchOpen && "pointer-events-none opacity-0")}>
        <Search className={cn("ml-3 h-4 w-4 shrink-0", c.muted)} />
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects..."
          className={cn(
            "h-full w-full bg-transparent px-3 text-sm outline-none placeholder:opacity-50",
            c.pageText
          )}
        />
        <button
          onClick={handleClear}
          className={cn(
            "mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10",
            c.muted
          )}
          aria-label={searchQuery ? "Clear search" : "Close search"}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Heading with the Search action on the right */}
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="A collection of things I've built — click any card for details."
        action={searchAction}
      />

      {/* Projects List */}
      {filteredProjects.length === 0 ? (
        <div className={cn("mt-10 rounded-2xl p-10 text-center", c.surface)}>
          <p className={cn("text-lg font-semibold", c.pageText)}>No projects found</p>
          <p className={cn("mt-1 text-sm", c.muted)}>
            No results for "{searchQuery}". Try a different keyword.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className={cn("mt-4 rounded-lg px-4 py-2 text-sm font-medium", c.accentBg, c.ring)}
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="mt-10 space-y-16">
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
      )}
      
      <ProjectModal project={active} onClose={close} />
    </>
  );
}