import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsSummary } from "@/components/home/SkillsSummary";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <Hero />
      <FeaturedProjects />
      <SkillsSummary />
    </div>
  );
}