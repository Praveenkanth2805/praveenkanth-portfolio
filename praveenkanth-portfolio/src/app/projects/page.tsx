import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCollection } from "@/components/projects/ProjectCollection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack, computer vision, and AI-assisted projects by Praveenkanth — including Attendance Management with Face Recognition, Online Food Ordering, Uzhavar Neradi, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <ProjectCollection projects={projects} />
    </div>
  );
}