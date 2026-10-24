"use client";
import { ReactNode } from "react";
import { useTheme } from "@/hooks/useTheme";
import { SidebarProvider } from "./SidebarProvider";
import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";
import { Footer } from "./Footer";
import { MobileDrawerOverlay } from "./MobileDrawerOverlay";
import { ReadingProgress } from "@/components/shared/ReadingProgress";
import { BackToTop } from "@/components/shared/BackToTop";
import { cn } from "@/lib/cn";

function Shell({ children }: { children: ReactNode }) {
  const { c } = useTheme();
  return (
    <div className={cn("flex h-screen overflow-hidden", c.pageBg, c.pageText)}>
      <Sidebar />
      <MobileDrawerOverlay />
      <div
        id="main-scroll-container"
        className={cn("flex min-w-0 flex-1 flex-col overflow-y-auto", c.scrollbar)}
      >
        <Toolbar />
        <ReadingProgress />
        <main className="flex-1 px-4 py-8 md:px-8">{children}</main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Shell>{children}</Shell>
    </SidebarProvider>
  );
}