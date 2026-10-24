import type { Metadata } from "next";
import { Introduction } from "@/components/about/Introduction";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { Experience } from "@/components/about/Experience";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { AIWorkflow } from "@/components/about/AIWorkflow";
import { GitHubProfileSummary } from "@/components/about/GitHubProfile";
import { Certifications } from "@/components/about/Certifications";
import { getGitHubProfile } from "@/lib/github";

export const metadata: Metadata = {
  title: "About",
  description:
    "Praveenkanth G — B.Sc. Computer Science graduate, Software Developer, and AI-assisted developer. Skills, journey, AI workflow, and GitHub profile.",
};

export default async function AboutPage() {
  const profile = await getGitHubProfile();
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <Introduction />
      <SkillsGrid />
      <Experience />
      <JourneyTimeline />
      <AIWorkflow />
      <GitHubProfileSummary profile={profile} />
      <Certifications />
    </div>
  );
}