"use client";
import { useEffect } from "react";

export function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.add("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [active]);
}