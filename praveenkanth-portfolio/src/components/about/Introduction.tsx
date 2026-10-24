"use client";
import { useTheme } from "@/hooks/useTheme";
import { site } from "@/data/site";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { cn } from "@/lib/cn";

export function Introduction() {
  const { c } = useTheme();
  return (
    <section>
      <div className={cn("rounded-2xl p-6 md:p-8", c.surface)}>
        <div className="flex flex-wrap items-center gap-4">
          <div className={cn("flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold", c.avatarBg)}>
            PK
          </div>
          <div>
            <h2 className={cn("text-2xl font-bold", c.pageText)}>Hi, I'm {site.name}</h2>
            <p className={cn("text-sm", c.accent)}>Software Developer · AI-Assisted Developer</p>
          </div>
        </div>
        <div className="mt-6 space-y-3 text-sm leading-relaxed">
          <p className={c.muted}>
            I am a B.Sc. Computer Science graduate currently working as a Software Developer at Microbotware Technologies. 
            I combine strong engineering fundamentals with modern AI tooling to ship faster, cleaner, 
            better-tested code.
          </p>
          <p className={c.muted}>
            I work across the stack — from designing responsive interfaces and building REST APIs to 
            handling authentication, databases, and application architecture. I believe in learning by 
            building, solving real-world problems, and continuously improving the quality of my code.
          </p>
          <p className={c.muted}>
            AI is embedded in how I design, build, and ship software — as a force multiplier, not a 
            shortcut. From prompt engineering to agentic workflows with tools like Cursor, Claude, and 
            GitHub Copilot, AI is a core part of my day-to-day development.
          </p>
        </div>
        
        {/* Added Briefcase icon for the company */}
        <div className={cn("mt-6 flex flex-wrap gap-4 text-sm", c.muted)}>
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" /> Microbotware Technologies
          </span>
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap className="h-4 w-4" /> B.Sc. Computer Science
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {site.location}
          </span>
        </div>
      </div>
    </section>
  );
}