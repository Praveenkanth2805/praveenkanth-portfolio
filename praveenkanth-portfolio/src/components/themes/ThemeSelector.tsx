"use client";
import { useEffect, useRef, useState } from "react";
import { Check, Palette, ChevronDown } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { THEME_LABELS, THEME_NAMES } from "@/types/theme";
import { cn } from "@/lib/cn";

export function ThemeSelector() {
  const { theme, setTheme, c } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-300",
          c.surface,
          c.surfaceHover,
          c.ring,
        )}
      >
        <Palette className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">{THEME_LABELS[theme]}</span>
        <ChevronDown className="h-3 w-3 opacity-60" aria-hidden />
      </button>
      {open && (
        <ul
          role="listbox"
          className={cn(
            "absolute right-0 top-full z-50 mt-2 w-56 overflow-y-auto rounded-xl p-1 shadow-2xl max-h-64",
            c.surface,
            c.pageText,
            c.scrollbar,
          )}
        >
          {THEME_NAMES.map((t) => (
            <li key={t}>
              <button
                role="option"
                aria-selected={t === theme}
                onClick={() => {
                  setTheme(t);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                  c.surfaceHover,
                  c.pageText,
                  c.ring,
                )}
              >
                <span>{THEME_LABELS[t]}</span>
                {t === theme && <Check className="h-4 w-4" aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}