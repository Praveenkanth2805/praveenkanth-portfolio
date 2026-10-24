"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderGit2, Mail } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useSidebar } from "./SidebarProvider";
import { site, navigation } from "@/data/site";
import { cn } from "@/lib/cn";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/about": User,
  "/projects": FolderGit2,
  "/contact": Mail,
};

export function Sidebar() {
  const { c } = useTheme();
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <aside
  className={cn(
    "fixed inset-y-0 left-0 z-40 flex flex-col overflow-hidden transition-all duration-300",
    "md:sticky md:top-0 md:h-screen md:self-start md:translate-x-0",
    open ? "w-64 translate-x-0" : "-translate-x-full md:w-20 md:translate-x-0",
    c.sidebar,
  )}
>
      <div className={cn("flex items-center gap-3 border-b px-4 py-5", c.divider)}>
        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold", c.avatarBg)}>
          PK
        </div>
        {open && (
          <div className="min-w-0">
            <p className={cn("truncate text-sm font-semibold", c.pageText)}>{site.name}</p>
            <p className={cn("truncate text-xs", c.muted)}>{site.role}</p>
          </div>
        )}
      </div>
      <nav className="flex-1 space-y-1 p-3" aria-label="Primary">
        {navigation.map((item) => {
          const Icon = ICONS[item.href];
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300",
                active ? c.accentBgSoft : cn(c.muted, "hover:opacity-90"),
                c.ring,
              )}
              title={item.label}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {open && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}