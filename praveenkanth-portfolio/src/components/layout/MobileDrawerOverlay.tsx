"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarProvider";

export function MobileDrawerOverlay() {
  const { open, setOpen, isDesktop } = useSidebar();
  const pathname = usePathname();

  // Close on route change (mobile only)
  useEffect(() => {
    if (!isDesktop) setOpen(false);
  }, [pathname, isDesktop, setOpen]);

  // Close on Escape (mobile only)
  useEffect(() => {
    if (!open || isDesktop) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, isDesktop, setOpen]);

  if (isDesktop || !open) return null;

  return (
    <div
      className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
      onClick={() => setOpen(false)}
      aria-hidden
    />
  );
}