// src/lib/types.ts
export type ProjectStatus =
  | 'deployed'
  | 'in-progress'
  | 'demo-pending'
  | 'archived'
  | 'live'
  | 'completed'
  | 'paused'
  | 'cancelled';
export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string; // short — used on project cards
  status: ProjectStatus;
  featured: boolean;
  tags: string[]; // short list shown on cards
  stack: string[]; // full list shown on detail page
  metrics?: ProjectMetric[];
  screenshots?: ProjectScreenshot[];
  coverImage?: string;
  repoUrl?: string;
  demoUrl?: string;
  content: string; // parsed markdown body
  date: string; // ISO date string
}
