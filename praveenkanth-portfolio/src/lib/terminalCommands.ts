import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

export type TerminalLine = { text: string; tone?: "prompt" | "output" | "error" };

export const terminalCommands = ["help", "about", "skills", "projects", "contact"] as const;
export type TerminalCommand = (typeof terminalCommands)[number];

export function runTerminalCommand(raw: string): TerminalLine[] {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "help":
      return [
        { text: `Available commands: ${terminalCommands.join(" · ")}`, tone: "output" },
        { text: "Type a command and press Enter.", tone: "output" },
      ];
    case "about":
      return [
        { text: "Praveenkanth G — Full-Stack Developer & AI-Assisted Developer.", tone: "output" },
        { text: "B.Sc. Computer Science graduate based in Villupuram, India.", tone: "output" },
        { text: "Builds practical web and mobile apps with AI as a force multiplier.", tone: "output" },
      ];
    case "skills":
      return skillCategories.map((cat) => ({
        text: `${cat.name}: ${cat.skills.join(", ")}`,
        tone: "output",
      }));
    case "projects":
      return projects.map((p) => ({ text: `· ${p.title}`, tone: "output" }));
    case "contact":
      return [
        { text: `Email:    ${site.email}`, tone: "output" },
        { text: `GitHub:   ${site.github}`, tone: "output" },
        { text: `LinkedIn: ${site.linkedin}`, tone: "output" },
      ];
    case "":
      return [];
    default:
      return [
        { text: `command not found: ${cmd}`, tone: "error" },
        { text: "Type 'help' to see available commands.", tone: "output" },
      ];
  }
}