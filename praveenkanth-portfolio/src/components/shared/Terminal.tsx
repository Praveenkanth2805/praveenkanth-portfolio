"use client";
import { useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useTerminal } from "@/hooks/useTerminal";
import { TerminalLine } from "@/lib/terminalCommands";
import { cn } from "@/lib/cn";

export function Terminal({
  welcome,
  className,
  title = "praveenkanth@portfolio:~",
}: {
  welcome: TerminalLine[];
  className?: string;
  title?: string;
}) {
  const { c } = useTheme();
  const { lines, input, setInput, submit, runQuick, commands } = useTerminal(welcome);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        "flex h-[420px] flex-col overflow-hidden rounded-2xl font-mono text-[15px] shadow-2xl", 
        c.terminal, 
        className
      )}
      onClick={() => inputRef.current?.focus()}
    >
      <div className={cn("flex shrink-0 items-center gap-2 border-b px-4 py-3 text-xs", c.divider)}>
        <span className="h-3 w-3 rounded-full bg-rose-500" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-500" />
        <span className={cn("ml-2", c.muted)}>{title}</span>
      </div>
      
      {/* Terminal output area */}
      <div className={cn("flex-1 space-y-1.5 overflow-y-auto p-5", c.scrollbar)}>
        {lines.map((l, i) => (
          <p
            key={i}
            className={cn(
              "whitespace-pre-wrap break-words leading-relaxed",
              l.tone === "error"
                ? c.terminalError
                : l.tone === "prompt"
                  ? c.terminalPrompt
                  : c.terminalOutput,
            )}
          >
            {l.tone === "error" ? "✗ " : l.tone === "prompt" ? "→ " : ""}
            {l.text}
          </p>
        ))}
        <div className="flex items-center gap-2 pt-2">
          <span className={c.terminalPrompt}>$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submit();
              }
            }}
            placeholder="type 'help'"
            // FIXED: Removed c.pageText and hardcoded text-slate-100 for visibility on all dark terminals
            className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-400 placeholder:opacity-60"
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
      
      <div className={cn("flex shrink-0 flex-wrap gap-2 border-t px-4 py-3", c.divider)}>
        {commands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => runQuick(cmd)}
            className={cn("rounded-md px-2.5 py-1 text-xs transition-colors", c.chip, c.ring)}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}