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
      className={cn("overflow-hidden rounded-2xl font-mono text-sm", c.terminal, className)}
      onClick={() => inputRef.current?.focus()}
    >
      <div className={cn("flex items-center gap-2 border-b px-4 py-2 text-xs", c.divider)}>
        <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        <span className={cn("ml-2", c.muted)}>{title}</span>
      </div>
      <div className="max-h-72 space-y-1 overflow-y-auto p-4">
        {lines.map((l, i) => (
          <p
            key={i}
            className={cn(
              "whitespace-pre-wrap break-words",
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
            className={cn("flex-1 bg-transparent outline-none placeholder:opacity-40", c.pageText)}
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
      <div className={cn("flex flex-wrap gap-2 border-t px-4 py-2", c.divider)}>
        {commands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => runQuick(cmd)}
            className={cn("rounded-md px-2 py-0.5 text-xs transition-colors", c.chip, c.ring)}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}