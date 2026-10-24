"use client";
import { createContext, useCallback, useEffect, useState, ReactNode } from "react";
import { ThemeName, THEME_NAMES } from "@/types/theme";

type Ctx = { theme: ThemeName; setTheme: (t: ThemeName) => void };
export const ThemeContext = createContext<Ctx>({
  theme: "midnight-indigo",
  setTheme: () => {},
});

const STORAGE_KEY = "pk-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("midnight-indigo");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
      if (saved && THEME_NAMES.includes(saved)) setThemeState(saved);
    } catch {}
  }, []);

  const setTheme = useCallback((t: ThemeName) => {
    setThemeState(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {}
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}