import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCollection } from "@/components/projects/ProjectCollection";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack, computer vision, and AI-assisted projects by Praveenkanth — including Attendance Management with Face Recognition, Online Food Ordering, Uzhavar Neradi, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="A collection of things I've built — click any card for details."
      />
      <ProjectCollection projects={projects} />
    </div>
  );
}