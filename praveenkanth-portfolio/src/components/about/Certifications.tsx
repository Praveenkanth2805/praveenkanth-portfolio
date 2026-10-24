"use client";
import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { useTheme } from "@/hooks/useTheme";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

export function Certifications() {
  const { c } = useTheme();
  if (certifications.length === 0) {
    return (
      <section>
        <SectionHeading eyebrow="Learning" title="Certifications" />
        <div className={cn("rounded-2xl p-6 text-sm", c.surface, c.muted)}>
          Certifications will appear here once added. Edit{" "}
          <code className={cn("rounded px-1.5 py-0.5 text-xs", c.chip)}>src/data/certifications.ts</code>{" "}
          to include verified certifications only.
        </div>
      </section>
    );
  }
  return (
    <section>
      <SectionHeading eyebrow="Learning" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div key={cert.id} className={cn("rounded-2xl p-5", c.surface)}>
            <Award className={cn("mb-3 h-6 w-6", c.accent)} />
            <h3 className={cn("text-sm font-semibold", c.pageText)}>{cert.name}</h3>
            <p className={cn("mt-1 text-xs", c.muted)}>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}