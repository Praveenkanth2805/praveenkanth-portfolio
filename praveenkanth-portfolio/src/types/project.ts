export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  image?: string;
  imageType?: "screenshot" | "illustration";
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  features?: string[];
};