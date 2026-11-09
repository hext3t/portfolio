export type CategoryId = "graphic-design" | "video-editing" | "photo-editing" | "ui-ux";

export interface Category {
  id: CategoryId;
  label: string;
  color: string;
}

export type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "youtube"; id: string; title: string }
  | { type: "vimeo"; id: string; title: string };

export interface Work {
  slug: string;
  title: string;
  category: CategoryId;
  date: string;
  description: string;
  tools: string[];
  media: Media[];
  thumb?: string; // e.g. "/works/poster-01.jpg" (file in public/works)
}

export const categories: Category[] = [
  { id: "graphic-design", label: "Graphic Design", color: "var(--cat-graphic)" },
  { id: "video-editing", label: "Video & Editing", color: "var(--cat-video)" },
  { id: "photo-editing", label: "Photo & Editing", color: "var(--cat-photo)" },
  { id: "ui-ux", label: "UI/UX", color: "var(--cat-uiux)" },
];

const blurb = "A short description of the project goes here: what it was, what you did, what you're proud of.";

// Placeholder entries: replace with your real work
export const works: Work[] = [
  { slug: "graphic-1", title: "Graphic project 1", category: "graphic-design", date: "2026", description: blurb, tools: ["Photoshop", "Illustrator"], media: [] },
  { slug: "graphic-2", title: "Graphic project 2", category: "graphic-design", date: "2026", description: blurb, tools: ["InDesign"], media: [] },
  { slug: "graphic-3", title: "Graphic project 3", category: "graphic-design", date: "2025", description: blurb, tools: ["Illustrator"], media: [] },
  { slug: "video-1", title: "Video project 1", category: "video-editing", date: "2026", description: blurb, tools: ["DaVinci Resolve"], media: [] },
  { slug: "video-2", title: "Video project 2", category: "video-editing", date: "2025", description: blurb, tools: ["Premiere Pro", "After Effects"], media: [] },
  { slug: "photo-1", title: "Photo project 1", category: "photo-editing", date: "2026", description: blurb, tools: ["Lightroom", "Photoshop"], media: [] },
  { slug: "photo-2", title: "Photo project 2", category: "photo-editing", date: "2025", description: blurb, tools: ["Lightroom"], media: [] },
  { slug: "photo-3", title: "Photo project 3", category: "photo-editing", date: "2025", description: blurb, tools: ["Photoshop"], media: [] },
  { slug: "uiux-1", title: "UI/UX project 1", category: "ui-ux", date: "2026", description: blurb, tools: ["Figma"], media: [] },
  { slug: "uiux-2", title: "UI/UX project 2", category: "ui-ux", date: "2025", description: blurb, tools: ["Figma", "HTML/CSS"], media: [] },
];