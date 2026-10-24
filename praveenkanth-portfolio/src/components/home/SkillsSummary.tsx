"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { topSkills } from "@/data/skills";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export function SkillsSummary() {
  const { c } = useTheme();
  return (
    <section className="mt-16">
      <div className={cn("rounded-2xl p-6 md:p-8", c.surface)}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className={cn("text-2xl font-bold", c.pageText)}>Tech I work with</h2>
            <p className={cn("mt-1 text-sm", c.muted)}>Modern stack, AI-first workflow.</p>
          </div>
          <Link href="/about" className={cn("inline-flex items-center gap-1 text-sm font-medium", c.accent, c.ring)}>
            All skills <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {topSkills.map((skill) => (
            <span key={skill} className={cn("rounded-full px-3 py-1 text-xs font-medium", c.chip)}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}