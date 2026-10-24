import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Praveenkanth | Software Developer & AI-Assisted Developer",
    template: "%s | Praveenkanth",
  },
  description:
    "Explore Praveenkanth's software projects, full-stack development skills, and AI-assisted development workflow.",
  keywords: [
    "Praveenkanth", "Full-Stack Developer", "AI-Assisted Developer",
    "React", "Next.js", "Laravel", "Python", "Flutter", "Portfolio",
  ],
  authors: [{ name: "Praveenkanth" }],
  openGraph: {
    title: "Praveenkanth | Software Developer & AI-Assisted Developer",
    description:
      "Explore Praveenkanth's software projects, full-stack development skills, and AI-assisted development workflow.",
    url: site.url,
    siteName: "Praveenkanth Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveenkanth | Software Developer & AI-Assisted Developer",
    description: "Full-stack projects, skills, and AI-assisted development workflow.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}