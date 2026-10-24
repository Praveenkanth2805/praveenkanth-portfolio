"use client";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

const STAGES = [
  { id: "understand", title: "Understand Requirements", output: ["$ analyze requirements", "→ Break feature into user stories", "→ Identify data model + edge cases"] },
  { id: "design", title: "Design UI & Architecture", output: ["$ plan architecture", "→ Wireframe components with AI", "→ Choose stack + data flow"] },
  { id: "scaffold", title: "AI-Assisted Scaffolding", output: ["$ scaffold --ai", "→ Chatgpt / Deepseek generate boilerplate", "→ Prune, refine, review"] },
  { id: "develop", title: "Development", output: ["$ dev", "→ Build UI + business logic", "→ Pair-program with AI on tricky parts"] },
  { id: "api", title: "API Integration", output: ["$ integrate api", "→ Wire REST endpoints", "→ Validate contracts + error states"] },
  { id: "db", title: "Database Integration", output: ["$ db migrate", "→ Model schema + migrations", "→ Enforce constraints + indexes"] },
  { id: "test", title: "Testing & Debugging", output: ["$ test --ai", "→ AI-assisted root-cause analysis", "→ Reproduce → fix → verify"] },
  { id: "deploy", title: "Deployment & Improvement", output: ["$ deploy --prod", "→ Ship to Vercel / VPS / Render", "→ Monitor + iterate"] },
];

export function AIWorkflow() {
  const { c } = useTheme();
  const [active, setActive] = useState(0);

  return (
    <section>
      <SectionHeading
        eyebrow="AI-Assisted Workflow"
        title="From idea to ship"
        description="Select a stage to see how AI fits into each phase."
      />
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <ol className="space-y-2">
          {STAGES.map((s, i) => (
            <li key={s.id}>
              <button
                onClick={() => setActive(i)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors duration-300",
                  i === active ? c.accentBgSoft : cn(c.surface, c.surfaceHover),
                  c.ring,
                )}
              >
                <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold", i === active ? c.accentBg : cn(c.chip))}>
                  {i + 1}
                </span>
                <span className={c.pageText}>{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className={cn("flex flex-col overflow-hidden rounded-2xl font-mono text-xs", c.terminal)}>
          <div className={cn("flex items-center gap-2 border-b px-4 py-2", c.divider)}>
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className={cn("ml-2", c.muted)}>workflow --stage {STAGES[active].id}</span>
          </div>
          <div className="space-y-1 p-4">
            {STAGES[active].output.map((line, i) => (
              <p key={i} className={cn(line.startsWith("$") ? c.terminalPrompt : c.terminalOutput)}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}