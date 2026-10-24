"use client";
import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, MapPin, Check } from "lucide-react";
import { site } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

const cards = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, isEmail: true },
  { icon: Github, label: "GitHub", value: "@Praveenkanth2805", href: site.github },
  { icon: Linkedin, label: "LinkedIn", value: "in/praveenkanth2805", href: site.linkedin },
  { icon: Instagram, label: "Instagram", value: "@praveenkanth2805", href: site.instagram },
];

export function ContactCards() {
  const { c } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section>
      <SectionHeading eyebrow="Get in touch" title="Contact" description="Open to full-stack, frontend, backend and AI-assisted development opportunities." />
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map(({ icon: Icon, label, value, href, isEmail }) => {
          const innerContent = (
            <>
              <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", c.accentBgSoft)}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className={cn("text-xs uppercase tracking-wider", c.muted)}>{label}</p>
                <p className={cn("truncate text-sm font-medium", c.pageText)}>{value}</p>
              </div>
              {isEmail && copied && <Check className="h-4 w-4 shrink-0 text-emerald-500" />}
            </>
          );

          if (isEmail) {
            return (
              <button
                key={label}
                onClick={handleEmailClick}
                className={cn("flex w-full items-center gap-4 rounded-2xl p-5 text-left transition-all duration-300", c.surface, c.surfaceHover, c.ring)}
              >
                {innerContent}
              </button>
            );
          }

          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("flex w-full items-center gap-4 rounded-2xl p-5 transition-all duration-300", c.surface, c.surfaceHover, c.ring)}
            >
              {innerContent}
            </a>
          );
        })}
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

      {/* Toast Notification */}
      <div
        className={cn(
          "fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 shadow-xl transition-all duration-300",
          c.surface,
          copied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <Check className="h-4 w-4 text-emerald-500" />
        <span className={cn("text-sm font-medium", c.pageText)}>Email copied to clipboard!</span>
      </div>
    </section>
  );
}