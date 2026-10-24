"use client";
import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCollection } from "@/components/projects/ProjectCollection";

export function FeaturedProjects() {
  return (
    <section className="mt-16">
      <SectionHeading
        eyebrow="Selected work"
        title="Featured Projects"
        description="A snapshot of what I've been building — full-stack products, computer vision, and UI explorations."
      />
      <ProjectCollection projects={featuredProjects} layout="featured" />
    </section>
  );
}