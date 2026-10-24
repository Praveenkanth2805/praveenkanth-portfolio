"use client";
import { Monitor, Server, Database, Brain, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { useTheme } from "@/hooks/useTheme";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: Monitor,
  Backend: Server,
  Databases: Database,
  "AI & Automation": Brain,
  "Tools & Platforms": Wrench,
};

export function SkillsGrid() {
  const { c } = useTheme();
  return (
    <section>
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills"
        description="Technologies I actively build with."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.name] ?? Wrench;
          return (
            <div
              key={cat.name}
              className={cn(
                "rounded-2xl p-5 transition-all duration-300",
                c.surface,
                c.surfaceHover,
                c.accentGlow,
              )}
            >
              <div className="mb-3 flex items-center gap-2">
                <Icon className={cn("h-4 w-4", c.accent)} aria-hidden />
                <h3
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wider",
                    c.accent,
                  )}
                >
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                      c.chip,
                    )}
                  >
                    <Icon className="h-3 w-3 opacity-70" aria-hidden />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}