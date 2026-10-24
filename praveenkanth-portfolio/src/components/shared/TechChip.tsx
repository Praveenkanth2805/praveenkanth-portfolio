"use client";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export function TechChip({ children }: { children: React.ReactNode }) {
  const { c } = useTheme();
  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-medium", c.chip)}>{children}</span>
  );
}