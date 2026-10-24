"use client";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useSidebar } from "./SidebarProvider";
import { ThemeSelector } from "@/components/themes/ThemeSelector";
import { pageTitles } from "@/data/site";
import { cn } from "@/lib/cn";

export function Toolbar() {
  const { c } = useTheme();
  const { open, toggle } = useSidebar();
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? "Not Found";

  return (
    <header className={cn("sticky top-0 z-20 flex items-center justify-between gap-3 px-4 py-3 md:px-6", c.toolbar)}>
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          className={cn("rounded-lg p-2 transition-colors", c.surface, c.surfaceHover, c.ring)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
        <h1 className={cn("text-lg font-semibold", c.pageText)}>{title}</h1>
      </div>
      <ThemeSelector />
    </header>
  );
}