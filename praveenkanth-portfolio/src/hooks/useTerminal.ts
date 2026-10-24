"use client";
import { useCallback, useState } from "react";
import { runTerminalCommand, TerminalLine, terminalCommands } from "@/lib/terminalCommands";

export function useTerminal(initialLines: TerminalLine[] = []) {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const execute = useCallback((raw: string) => {
    const cmd = raw.trim();
    setInput("");
    if (!cmd) return;
    setHistory((h) => [...h, cmd]);
    setLines(runTerminalCommand(cmd)); // latest result only (spec §7)
  }, []);

  const submit = useCallback(() => execute(input), [execute, input]);

  const runQuick = useCallback((cmd: string) => execute(cmd), [execute]);

  return {
    lines,
    input,
    setInput,
    submit,
    runQuick,
    history,
    commands: terminalCommands,
  };
}