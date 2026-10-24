import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

export type TerminalLine = { text: string; tone?: "prompt" | "output" | "error" };

// Only these standard commands show up in the quick buttons
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
    
    // --- EASTER EGGS ---
    case "sudo":
      return [
        { text: "Nice try! You don't have root access here. 😉", tone: "error" },
        { text: "Try 'coffee' instead.", tone: "output" },
      ];
    case "coffee":
      return [
        { text: "☕ Brewing coffee...", tone: "prompt" },
        { text: "Error 418: I'm a teapot. Cannot brew coffee.", tone: "error" },
        { text: "But here's a virtual high-five for finding this! ✋", tone: "output" },
      ];
    case "matrix":
      return [
        { text: "Wake up, Neo...", tone: "output" },
        { text: "The Matrix has you...", tone: "output" },
        { text: "Follow the white rabbit. 🐇", tone: "output" },
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