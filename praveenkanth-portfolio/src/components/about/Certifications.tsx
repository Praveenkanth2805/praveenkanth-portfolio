"use client";
import { Award, GraduationCap, Calendar } from "lucide-react";
import { certifications } from "@/data/certifications";
import { useTheme } from "@/hooks/useTheme";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

export function Certifications() {
  const { c } = useTheme();
  
  if (certifications.length === 0) {
    return null; // Hide section if no certifications exist
  }

  return (
    <section>
      <SectionHeading 
        eyebrow="Achievements" 
        title="Certifications & Awards" 
        description="Recognitions and courses that mark my continuous learning journey."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => {
          const isAward = cert.type === "award";
          const Icon = isAward ? Award : GraduationCap;
          
          return (
            <div 
              key={cert.id} 
              className={cn(
                "group flex flex-col rounded-2xl p-5 transition-all duration-300", 
                c.surface,
                c.surfaceHover,
                c.accentGlow
              )}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                  c.accentBgSoft
                )}>
                  <Icon className={cn("h-5 w-5", c.accent)} aria-hidden />
                </div>
                {cert.date && (
                  <span className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
                    c.chip
                  )}>
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </span>
                )}
              </div>
              
              <div className="mt-auto">
                <h3 className={cn("text-base font-bold leading-snug", c.pageText)}>
                  {cert.name}
                </h3>
                <p className={cn("mt-1 text-xs font-medium", c.muted)}>
                  {cert.issuer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}