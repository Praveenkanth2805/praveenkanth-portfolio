"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { site, navigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function Footer() {
  const { c } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={cn("mt-16 px-4 py-8 md:px-6", c.footer)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className={cn("font-mono text-xs", c.muted)}>
          <span className={c.terminalPrompt}>$</span> echo "© {year} {site.name}"
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm" aria-label="Footer">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={cn(c.muted, "hover:opacity-90", c.ring)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={site.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className={cn("rounded-lg p-1.5", c.muted, "hover:opacity-90", c.ring)}>
            <Github className="h-4 w-4" />
          </a>
          <a href={site.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={cn("rounded-lg p-1.5", c.muted, "hover:opacity-90", c.ring)}>
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={site.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={cn("rounded-lg p-1.5", c.muted, "hover:opacity-90", c.ring)}>
            <Instagram className="h-4 w-4" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className={cn("rounded-lg p-1.5", c.muted, "hover:opacity-90", c.ring)}>
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}