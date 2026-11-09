import type { Media } from "./works";

export type HobbyCategoryId = "games" | "animation" | "music" | "sewing";

export interface HobbyCategory {
  id: HobbyCategoryId;
  label: string;
  color: string;
}

export interface ProjectLink {
  kind: "download" | "itch" | "github" | "other";
  label: string; // button text, e.g. "Play on itch.io"
  href: string;
}

export interface HobbyProject {
  slug: string; // only a-z, 0-9 and "-" (it becomes the URL hash)
  title: string;
  category: HobbyCategoryId;
  date: string;
  description: string;
  tools: string[];
  media: Media[];
  links?: ProjectLink[];
  icon?: string; // optional custom icon, e.g. "/afterhours/icons/my-game.png" (file in public/)
}

// What sits on the desktop: a project icon, or a folder that holds several projects
export type DesktopItem =
  | { type: "project"; slug: string }
  | {
      type: "folder";
      id: string; // a-z, 0-9 and "-"
      label: string;
      category: HobbyCategoryId; // colors the folder
      projects: string[]; // slugs of the projects inside
    };

export const hobbyCategories: HobbyCategory[] = [
  { id: "games", label: "Games", color: "var(--cat-games)" },
  { id: "animation", label: "3D Animation", color: "var(--cat-animation)" },
  { id: "music", label: "Music", color: "var(--cat-music)" },
  { id: "sewing", label: "Sewing", color: "var(--cat-sewing)" },
];

const blurb = "A short description goes here: what it is, what you built, what you learned.";

// Placeholder entries: replace with your real projects
export const hobbyProjects: HobbyProject[] = [
  { slug: "game-1", title: "Game project 1", category: "games", date: "2026", description: blurb, tools: ["Unity", "C#"], media: [], links: [{ kind: "itch", label: "Play on itch.io", href: "https://itch.io" }] },
  { slug: "game-2", title: "Game project 2", category: "games", date: "2025", description: blurb, tools: ["Unity", "C#", "Blender"], media: [], links: [{ kind: "download", label: "Download build", href: "#" }] },
  { slug: "anim-1", title: "Animation 1", category: "animation", date: "2026", description: blurb, tools: ["Blender"], media: [] },
  { slug: "anim-2", title: "Animation 2", category: "animation", date: "2025", description: blurb, tools: ["Blender"], media: [] },
  { slug: "music-1", title: "Music project 1", category: "music", date: "2025", description: blurb, tools: [], media: [] },
  { slug: "sewing-1", title: "Sewing project 1", category: "sewing", date: "2025", description: blurb, tools: [], media: [] },
];

export const desktopItems: DesktopItem[] = [
  { type: "project", slug: "game-1" },
  { type: "project", slug: "game-2" },
  { type: "folder", id: "animations", label: "Animations", category: "animation", projects: ["anim-1", "anim-2"] },
  { type: "folder", id: "music", label: "Music", category: "music", projects: ["music-1"] },
  { type: "folder", id: "sewing", label: "Sewing", category: "sewing", projects: ["sewing-1"] },
];

export const categoryById = Object.fromEntries(hobbyCategories.map((c) => [c.id, c])) as Record<HobbyCategoryId, HobbyCategory>;
export const projectBySlug = Object.fromEntries(hobbyProjects.map((p) => [p.slug, p])) as Record<string, HobbyProject>;

// Fails loudly at build time if the data has a typo, instead of a silently broken icon
const slugOk = /^[a-z0-9-]+$/;
const seen = new Set<string>();
for (const p of hobbyProjects) {
  if (!slugOk.test(p.slug)) throw new Error(`afterhours.ts: bad slug "${p.slug}" (use a-z, 0-9, -)`);
  if (seen.has(p.slug)) throw new Error(`afterhours.ts: duplicate slug "${p.slug}"`);
  seen.add(p.slug);
}
const folderIds = new Set<string>();
for (const item of desktopItems) {
  if (item.type === "folder") {
    if (!slugOk.test(item.id)) throw new Error(`afterhours.ts: bad folder id "${item.id}"`);
    if (seen.has(item.id) || folderIds.has(item.id)) {
      throw new Error(`afterhours.ts: folder id "${item.id}" clashes with another slug or folder`);
    }
    folderIds.add(item.id);
  }
  const slugs = item.type === "project" ? [item.slug] : item.projects;
  for (const s of slugs) {
    if (!projectBySlug[s]) throw new Error(`afterhours.ts: desktop references missing project "${s}"`);
  }
}
