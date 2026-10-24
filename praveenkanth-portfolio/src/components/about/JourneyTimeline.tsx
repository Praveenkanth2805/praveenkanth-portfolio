
"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { journey } from "@/data/journey";
import { useTheme } from "@/hooks/useTheme";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

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
      { threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || playedRef.current) return;

    playedRef.current = true;

    if (reduced) {
      setStep(journey.length);
      return;
    }

    let current = 0;

    const id = setInterval(() => {
      current += 1;
      setStep(current);

      if (current >= journey.length) clearInterval(id);
    }, 450);

    return () => clearInterval(id);
  }, [inView, reduced]);

  return (
    <section ref={ref} className="relative">
      <SectionHeading
        eyebrow="My Journey"
        title="Development Timeline"
        description="Every milestone is a step toward building something meaningful."
      />

      <div className="relative mx-auto mt-10 max-w-3xl">
        <div className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-indigo-500/30 via-slate-400/20 to-transparent sm:left-[23px]" />

        <div
          className={cn(
            "absolute left-[19px] top-6 w-px origin-top bg-gradient-to-b from-indigo-500 via-violet-500 to-indigo-400 transition-transform duration-1000 ease-out sm:left-[23px]",
            inView ? "scale-y-100" : "scale-y-0",
          )}
          style={{ height: "calc(100% - 3rem)" }}
        />

        <ol className="space-y-6 sm:space-y-8">
          {journey.map((m, i) => {
            const active = step > i;

            return (
              <li key={m.id} className="group relative pl-12 sm:pl-16">
                <div
                  className={cn(
                    "absolute left-[7px] top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-500 sm:left-[11px] sm:h-7 sm:w-7",
                    active
                      ? "scale-100 border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                      : cn(c.surface, "scale-90 border-slate-300/60 opacity-60"),
                  )}
                >
                  {active ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-slate-400/60" />
                  )}
                </div>

                <article
                  className={cn(
                    "relative overflow-hidden rounded-2xl border p-5 transition-all duration-700 sm:p-6",
                    c.surface,
                    active
                      ? "translate-x-0 border-indigo-500/20 opacity-100 shadow-sm shadow-indigo-500/5"
                      : "translate-x-4 border-transparent opacity-0",
                    "group-hover:border-indigo-500/30 group-hover:shadow-lg group-hover:shadow-indigo-500/5",
                  )}
                >
                  <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-gradient-to-b from-indigo-500 to-violet-500 transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3
                        className={cn(
                          "text-base font-bold tracking-tight sm:text-lg",
                          c.pageText,
                        )}
                      >
                        {m.title}
                      </h3>

                      {m.period && (
                        <span
                          className={cn(
                            "mt-2 inline-flex rounded-full border px-3 py-1 font-mono text-xs",
                            c.chip,
                          )}
                        >
                          {m.period}
                        </span>
                      )}
                    </div>

                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500",
                        c.muted,
                      )}
                    />
                  </div>

                  <p
                    className={cn(
                      "mt-3 text-sm leading-7",
                      c.muted,
                    )}
                  >
                    {m.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
