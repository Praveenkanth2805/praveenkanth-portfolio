"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Terminal } from "@/components/shared/Terminal";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const TAGLINES = [
  "Full-Stack Web & Mobile Applications",
  "AI-Assisted Development Workflow",
  "React · Laravel · Python · Flutter",
];

export function Hero() {
  const { c } = useTheme();
  const reduced = useReducedMotion();
  const [tagline, setTagline] = useState(TAGLINES[0]);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      let i = 0;
      while (!cancelled) {
        const text = TAGLINES[i];
        for (let ch = 0; ch <= text.length; ch++) {
          if (cancelled) return;
          setTagline(text.slice(0, ch));
          await sleep(55);
        }
        await sleep(1800);
        for (let ch = text.length; ch >= 0; ch--) {
          if (cancelled) return;
          setTagline(text.slice(0, ch));
          await sleep(22);
        }
        i = (i + 1) % TAGLINES.length;
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  return (
    <section className={cn("relative overflow-hidden rounded-3xl px-6 py-12 md:px-10 md:py-16", c.heroGradient)}>
      <div className="grid items-center gap-10 md:grid-cols-2">
        
        {/* Text Content */}
        <div>
          <div className={cn("mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium", c.accentBgSoft)}>
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI-Assisted Developer</span>
          </div>
          
          <h1 className={cn("text-4xl font-bold leading-tight tracking-tight sm:text-5xl", c.pageText)}>
            {site.name}
            <span className={c.accent}> — </span>
            Software Developer
            <br />& AI-Assisted Developer
          </h1>
          
          <p className={cn("mt-4 min-h-[1.75rem] text-lg font-medium", c.muted)}>
            {tagline}
            {!reduced && (
              <span className={cn("ml-0.5 inline-block h-5 w-0.5 align-middle", c.accentBg, "animate-pulse")} />
            )}
          </p>
          
          <p className={cn("mt-4 max-w-xl text-sm leading-relaxed", c.muted)}>
            Software Developer at Microbotware Technologies, building practical, user-focused web and mobile applications — with AI embedded in the development workflow.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className={cn("inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-300", c.accentBg, c.ring)}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={cn("inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-300", c.surface, c.surfaceHover, c.ring)}
            >
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
          </div>
        </div>

        {/* Terminal with 3D Tilt */}
        <div className="md:perspective-[1000px]">
          <div className="transition-transform duration-500 ease-out md:[transform:rotateY(-6deg)_rotateX(2deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)]">
            <Terminal
              welcome={[
                { text: "whoami", tone: "prompt" },
                { text: "Praveenkanth — Software Developer & AI-Assisted Developer", tone: "output" },
                { text: "stack", tone: "prompt" },
                { text: "React · Laravel · Python · Flutter · REST APIs", tone: "output" },
                { text: "hint", tone: "prompt" },
                { text: "Type 'help' or click a command below", tone: "output" },
              ]}
            />
          </div>
        </div>

      </div>
    </section>
  );
}