export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  projectType: "product" | "client" | "professional" | "academic"; // ADDED THIS
  image?: string;
  imageType?: "screenshot" | "illustration";
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  features?: string[];
  isConfidential?: boolean;
};