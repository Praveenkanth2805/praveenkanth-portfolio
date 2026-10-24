"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Ctx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
  isDesktop: boolean;
};
const SidebarContext = createContext<Ctx>({
  open: false,
  setOpen: () => {},
  toggle: () => {},
  isDesktop: false,
});

export function SidebarProvider({ children }: { children: ReactNode }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isDesktop) setOpen(true);
    else setOpen(false);
  }, [isDesktop]);

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggle: () => setOpen((v) => !v), isDesktop }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);