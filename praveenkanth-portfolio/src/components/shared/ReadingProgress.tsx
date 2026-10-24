"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export function ReadingProgress() {
  const { c } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = document.getElementById("main-scroll-container");
    if (!el) return;

    const handleScroll = () => {
      const totalHeight = el.scrollHeight - el.clientHeight;
      const scrollPosition = el.scrollTop;
      const percentage = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
      setProgress(percentage);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className={cn("h-full origin-left transition-transform duration-100 ease-out", c.accentBg)}
        // Note: Using inline style here because Tailwind cannot generate dynamic runtime widths for a progress bar.
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}