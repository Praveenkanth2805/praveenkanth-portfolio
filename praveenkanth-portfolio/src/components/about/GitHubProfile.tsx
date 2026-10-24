"use client";
import { Github, Users, BookMarked, UserPlus } from "lucide-react";
import { GitHubProfile as GH } from "@/lib/github";
import { useTheme } from "@/hooks/useTheme";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

export function GitHubProfileSummary({ profile }: { profile: GH }) {
  const { c } = useTheme();
  return (
    <section>
      <SectionHeading eyebrow="GitHub" title="GitHub Profile" />
      <div className={cn("rounded-2xl p-6 md:p-8", c.surface)}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={cn("flex h-14 w-14 items-center justify-center rounded-2xl", c.accentBgSoft)}>
              <Github className="h-7 w-7" />
            </div>
            <div>
              <p className={cn("text-lg font-semibold", c.pageText)}>@{profile.login}</p>
              {profile.bio && <p className={cn("text-sm", c.muted)}>{profile.bio}</p>}
            </div>
          </div>
          <a
            href={profile.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("rounded-lg px-4 py-2 text-sm font-medium", c.accentBg, c.ring)}
          >
            View GitHub
          </a>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: BookMarked, label: "Repos", value: profile.publicRepos },
            { icon: Users, label: "Followers", value: profile.followers },
            { icon: UserPlus, label: "Following", value: profile.following },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className={cn("rounded-xl p-4 text-center", c.chip)}>
              <Icon className="mx-auto mb-1 h-4 w-4 opacity-70" />
              <p className={cn("text-xl font-bold", c.pageText)}>{value}</p>
              <p className={cn("text-xs", c.muted)}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}