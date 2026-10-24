"use client";
import { Mail, Github, Linkedin, Instagram, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

const cards = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Github, label: "GitHub", value: "@Praveenkanth2805", href: site.github },
  { icon: Linkedin, label: "LinkedIn", value: "in/praveenkanth2805", href: site.linkedin },
  { icon: Instagram, label: "Instagram", value: "@praveenkanth2805", href: site.instagram },
];

export function ContactCards() {
  const { c } = useTheme();
  return (
    <section>
      <SectionHeading eyebrow="Get in touch" title="Contact" description="Open to full-stack, frontend, backend and AI-assisted development opportunities." />
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className={cn("flex items-center gap-4 rounded-2xl p-5 transition-all duration-300", c.surface, c.surfaceHover, c.ring)}
          >
            <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", c.accentBgSoft)}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className={cn("text-xs uppercase tracking-wider", c.muted)}>{label}</p>
              <p className={cn("truncate text-sm font-medium", c.pageText)}>{value}</p>
            </div>
          </a>
        ))}
        <div className={cn("flex items-center gap-4 rounded-2xl p-5 sm:col-span-2", c.surface)}>
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", c.accentBgSoft)}>
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className={cn("text-xs uppercase tracking-wider", c.muted)}>Location</p>
            <p className={cn("text-sm font-medium", c.pageText)}>{site.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}