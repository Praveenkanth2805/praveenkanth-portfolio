export type GitHubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  htmlUrl: string;
  avatarUrl: string;
};

export const fallbackGitHub: GitHubProfile = {
  login: "Praveenkanth2805",
  name: "Praveenkanth",
  bio: "Full-Stack Developer · AI-Assisted Developer",
  publicRepos: 0,
  followers: 0,
  following: 0,
  htmlUrl: "https://github.com/Praveenkanth2805",
  avatarUrl: "",
};

export async function getGitHubProfile(): Promise<GitHubProfile> {
  try {
    const res = await fetch("https://api.github.com/users/Praveenkanth2805", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return fallbackGitHub;
    const d = await res.json();
    return {
      login: d.login,
      name: d.name ?? null,
      bio: d.bio ?? null,
      publicRepos: d.public_repos ?? 0,
      followers: d.followers ?? 0,
      following: d.following ?? 0,
      htmlUrl: d.html_url ?? fallbackGitHub.htmlUrl,
      avatarUrl: d.avatar_url ?? "",
    };
  } catch {
    return fallbackGitHub;
  }
}