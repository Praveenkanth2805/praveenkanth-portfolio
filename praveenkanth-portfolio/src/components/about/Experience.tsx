"use client";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/experience";
import { useTheme } from "@/hooks/useTheme";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

export function Experience() {
  const { c } = useTheme();

  if (experiences.length === 0) return null;

  return (
    <section>
      <SectionHeading
        eyebrow="Career"
        title="Professional Experience"
        description="My journey in the software industry."
      />
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={cn(
              "relative overflow-hidden rounded-2xl p-6 md:p-8",
              c.surface,
              c.surfaceHover,
              c.accentGlow
            )}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", c.accentBgSoft)}>
                  <Briefcase className={cn("h-6 w-6", c.accent)} />
                </div>
                <div>
                  <h3 className={cn("text-xl font-bold", c.pageText)}>{exp.role}</h3>
                  <p className={cn("text-base font-semibold", c.accent)}>{exp.company}</p>
                </div>
              </div>
              <div className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium w-fit", c.chip)}>
                <Calendar className="h-3.5 w-3.5" />
                {exp.period}
              </div>
            </div>

            <p className={cn("mt-6 text-sm leading-relaxed", c.muted)}>
              {exp.description}
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", c.accent)} />
                  <span className={c.muted}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}