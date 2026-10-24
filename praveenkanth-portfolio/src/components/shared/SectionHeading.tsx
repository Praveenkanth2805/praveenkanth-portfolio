"use client";
import { ReactNode } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export function SectionHeading({ eyebrow, title, description }: {
  eyebrow?: string; title: string; description?: ReactNode;
}) {
  const { c } = useTheme();
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className={cn("mb-2 text-xs font-semibold uppercase tracking-widest", c.accent)}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl", c.pageText)}>{title}</h2>
      {description && <p className={cn("mt-3 text-base", c.muted)}>{description}</p>}
    </div>
  );
}