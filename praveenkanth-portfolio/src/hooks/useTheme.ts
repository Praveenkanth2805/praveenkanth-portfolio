"use client";
import { useContext } from "react";
import { ThemeContext } from "@/components/themes/ThemeProvider";
import { themeClasses } from "@/lib/themeClasses";

export function useTheme() {
  const ctx = useContext(ThemeContext);
  return { ...ctx, c: themeClasses[ctx.theme] };
}