export type CategoryId = "graphic-design" | "video-editing" | "photo-editing" | "ui-ux";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Work {
  title: string;
  category: CategoryId;
  thumb?: string; // e.g. "/works/poster-01.jpg" (file in public/works)
}

export const categories: Category[] = [
  { id: "graphic-design", label: "Graphic Design" },
  { id: "video-editing", label: "Video & Editing" },
  { id: "photo-editing", label: "Photo & Editing" },
  { id: "ui-ux", label: "UI/UX" },
];

// Placeholder entries: replace with your real work
export const works: Work[] = [
  { title: "Graphic project 1", category: "graphic-design" },
  { title: "Graphic project 2", category: "graphic-design" },
  { title: "Graphic project 3", category: "graphic-design" },
  { title: "Video project 1", category: "video-editing" },
  { title: "Video project 2", category: "video-editing" },
  { title: "Photo project 1", category: "photo-editing" },
  { title: "Photo project 2", category: "photo-editing" },
  { title: "Photo project 3", category: "photo-editing" },
  { title: "UI/UX project 1", category: "ui-ux" },
  { title: "UI/UX project 2", category: "ui-ux" },
];