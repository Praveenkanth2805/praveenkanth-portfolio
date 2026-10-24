"use client";
import { useEffect, useRef, useState } from "react";
import { journey } from "@/data/journey";
import { useTheme } from "@/hooks/useTheme";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

const WIDTH_STEPS = ["w-0", "w-1/4", "w-1/2", "w-3/4", "w-full"] as const;

export function JourneyTimeline() {
  const { c } = useTheme();
  const reduced = useReducedMotion();
  const [inView, setInView] = useState(false);
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || playedRef.current) return;
    playedRef.current = true;
    if (reduced) {
      setStep(4);
      return;
    }
    let current = 0;
    const id = setInterval(() => {
      current += 1;
      setStep(current);
      if (current >= 4) clearInterval(id);
    }, 700);
    return () => clearInterval(id);
  }, [inView, reduced]);

  return (
    <section ref={ref}>
      <SectionHeading
        eyebrow="Journey"
        title="Development Timeline"
        description="Milestones from learning to shipping."
      />
      <div className={cn("relative rounded-2xl p-6 md:p-8", c.surface)}>
        <div className={cn("mb-8 h-1 w-full overflow-hidden rounded-full border", c.divider)}>
          <div
            className={cn(
              "h-full transition-all duration-700 ease-out",
              WIDTH_STEPS[step],
              c.accentBg,
            )}
          />
        </div>
        <ol className="space-y-6">
          {journey.map((m, i) => {
            const active = step >= i;
            return (
              <li key={m.id} className="flex gap-4">
                <div
                  className={cn(
                    "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-500",
                    active ? c.accentBgSoft : cn(c.surface, c.divider),
                  )}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className={cn("text-base font-semibold", c.pageText)}>{m.title}</h3>
                    {m.period && (
                      <span className={cn("font-mono text-xs", c.subtle)}>{m.period}</span>
                    )}
                  </div>
                  <p className={cn("mt-1 text-sm", c.muted)}>{m.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}