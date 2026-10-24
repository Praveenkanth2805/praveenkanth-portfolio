import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Flutter", "Dart", "Vite"],
  },
  {
    name: "Backend",
    skills: ["PHP", "Laravel", "Python", "Django", "FastAPI", "Node.js"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    name: "AI & Automation",
    skills: ["OpenAI", "Claude", "Gemini", "ChatGPT", "GitHub Copilot", "Cursor", "n8n"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Docker", "Linux"],
  },
];

export const topSkills = [
  "React", "Next.js", "Laravel", "Python", "Flutter", "Tailwind CSS",
  "FastAPI", "OpenAI", "PostgreSQL", "Docker",
];