export type ThemeName =
  | "midnight-indigo"
  | "glassmorphism"
  | "claymorphism"
  | "retrofuturism"
  | "y2k";

export const THEME_NAMES: ThemeName[] = [
  "midnight-indigo",
  "glassmorphism",
  "claymorphism",
  "retrofuturism",
  "y2k",
];

export const THEME_LABELS: Record<ThemeName, string> = {
  "midnight-indigo": "Midnight Indigo",
  glassmorphism: "Glassmorphism",
  claymorphism: "Claymorphism",
  retrofuturism: "Retrofuturism",
  y2k: "Y2K",
};