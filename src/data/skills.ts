// src/data/skills.ts
// Single source of truth for the About page: the graph AND the accessible list are both generated from this.

export type CategoryId = 'design' | 'photo' | 'video' | 'uiux' | 'afterhours';

export interface Category {
  id: CategoryId;
  label: string;
  /** Optional link to the matching folder / page */
  href?: string;
}

export interface Skill {
  id: string;
  label: string;
  /** A skill can connect to several categories (e.g. Photoshop, Figma) */
  categories: CategoryId[];
  /** minor = rendered smaller, and hidden in the compact mobile view */
  minor?: boolean;
}

export const categories: Category[] = [
  { id: 'design', label: 'Graphic design' },
  { id: 'photo', label: 'Photo' },
  { id: 'video', label: 'Video' },
  { id: 'uiux', label: 'UI/UX & Web' },
  { id: 'afterhours', label: 'After Hours', href: '/after-hours' },
];

export const skills: Skill[] = [
  // Graphic design
  { id: 'photoshop', label: 'Photoshop', categories: ['design', 'photo'] },
  { id: 'illustrator', label: 'Illustrator', categories: ['design'] },
  { id: 'indesign', label: 'InDesign', categories: ['design'] },
  { id: 'figma', label: 'Figma', categories: ['design', 'uiux'] },
  { id: 'impositor', label: 'Print imposition (Impositor)', categories: ['design'] },
  { id: 'typography', label: 'Typography', categories: ['design'] },
  { id: 'layout', label: 'Layout & editorial design', categories: ['design'] },
  { id: 'branding', label: 'Branding & identity', categories: ['design'] },
  { id: 'print', label: 'Print production', categories: ['design'] },
  { id: 'canva', label: 'Canva', categories: ['design'], minor: true },

  // Photo
  { id: 'photography', label: 'Photography', categories: ['photo'] },
  { id: 'portraits', label: 'Portraits', categories: ['photo'] },
  { id: 'product', label: 'Product photography', categories: ['photo'] },
  { id: 'lightroom', label: 'Lightroom', categories: ['photo'] },

  // Video
  { id: 'resolve', label: 'DaVinci Resolve', categories: ['video'] },
  { id: 'premiere', label: 'Premiere Pro', categories: ['video'] },
  { id: 'aftereffects', label: 'After Effects', categories: ['video', 'design'] },
  { id: 'gimbal', label: 'DJI gimbal', categories: ['video'] },
  { id: 'blackmagic', label: 'Blackmagic cameras', categories: ['video'] },
  { id: 'nikon', label: 'Nikon cameras', categories: ['photo', 'video'] },

  // UI/UX & Web
  { id: 'prototyping', label: 'Prototyping', categories: ['uiux'] },
  { id: 'research', label: 'User research & testing', categories: ['uiux'] },
  { id: 'html', label: 'HTML', categories: ['uiux'] },
  { id: 'css', label: 'CSS', categories: ['uiux'] },
  { id: 'typescript', label: 'TypeScript', categories: ['uiux'] },
  { id: 'astro', label: 'Astro', categories: ['uiux'] },
  { id: 'git', label: 'Git/GitHub', categories: ['uiux'], minor: true },
  { id: 'responsive', label: 'Responsive design', categories: ['uiux'], minor: true },
  { id: 'a11y', label: 'Accessibility', categories: ['uiux'], minor: true },

  // After Hours (3D & games)
  { id: 'unity', label: 'Unity', categories: ['afterhours'] },
  { id: 'csharp', label: 'C#', categories: ['afterhours'] },
  { id: 'blender', label: 'Blender', categories: ['afterhours'] },
  { id: 'gamedesign', label: 'Game design', categories: ['afterhours'] },
];

/** Edges for the graph: one link per (skill, category) pair */
export const links = skills.flatMap((s) =>
  s.categories.map((c) => ({ source: s.id, target: c }))
);

/** For the accessible list fallback: skills grouped by category */
export const skillsByCategory = categories.map((c) => ({
  category: c,
  skills: skills.filter((s) => s.categories.includes(c.id)),
}));