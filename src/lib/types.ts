import type { Status } from '@/components/StatusPill';

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: Status;
  featured: boolean;
  stack: string[];
  metrics?: ProjectMetric[];
  coverImage: string;
  repoUrl?: string;
  demoUrl?: string;
  date: string;
  content: string;
};
