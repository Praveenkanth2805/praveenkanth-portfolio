"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export function BackToTop() {
  const { c } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("main-scroll-container");
    if (!el) return;

    const handleScroll = () => {
      // Show button after scrolling down 300px
      setVisible(el.scrollTop > 300);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const el = document.getElementById("main-scroll-container");
    if (el) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 md:bottom-8 md:right-8",
        c.surface,
        c.surfaceHover,
        c.ring,
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}