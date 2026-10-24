"use client";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export default function NotFound() {
  const { c } = useTheme();
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center py-24">
      <div
        className={cn(
          "w-full overflow-hidden rounded-2xl font-mono text-sm",
          c.terminal,
        )}
      >
        <div className={cn("flex items-center gap-2 border-b px-4 py-2", c.divider)}>
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className={cn("ml-2", c.muted)}>not-found</span>
        </div>
        <div className="space-y-1 p-6">
          <p className={c.terminalError}>✗ 404 — Page not found</p>
          <p className={c.terminalPrompt}>$ Try navigating back home:</p>
          <p className={c.terminalOutput}>→ Use the sidebar or the button below.</p>
        </div>
      </div>
      <Link
        href="/"
        className={cn(
          "mt-6 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-300",
          c.accentBg,
          c.ring,
        )}
      >
        Return Home
      </Link>
    </div>
  );
}