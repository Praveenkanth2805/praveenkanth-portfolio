export const site = {
  name: "Praveenkanth G",
  role: "Software Developer & AI-Assisted Developer",
  tagline: "Full-Stack Web & Mobile Applications",
  email: "praveenkanth2805@gmail.com",
  location: "Villupuram, India",
  github: "https://github.com/Praveenkanth2805",
  githubUsername: "Praveenkanth2805",
  linkedin: "https://www.linkedin.com/in/praveenkanth2805",
  instagram: "https://www.instagram.com/praveenkanth2805/",
  url: "https://praveenkanth-g.vercel.app",
} as const;

export const navigation = [
  { href: "/", label: "Home", title: "Home" },
  { href: "/about", label: "About", title: "About" },
  { href: "/projects", label: "Projects", title: "Projects" },
  { href: "/contact", label: "Contact", title: "Contact" },
] as const;

export const pageTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/contact": "Contact",
};
