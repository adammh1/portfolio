import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import matter from 'gray-matter';
import type { Project } from './types';

const projectsDir = path.join(process.cwd(), 'src/app/content/projects');

/**
 * Reads and parses all project Markdown files.
 * Wrapped in React's cache() so repeated calls within the same
 * server render (e.g. generateStaticParams + page render) hit
 * memory instead of re-reading the filesystem each time.
 */
export const getAllProjects = cache((): Project[] => {
  const files = fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith('.md'));

  const projects = files.map((filename): Project => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(projectsDir, filename), 'utf-8');
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      tagline: data.tagline,
      status: data.status,
      featured: data.featured,
      tags: data.tags ?? [],
      stack: data.stack ?? [],
      metrics: data.metrics ?? [],
      coverImage: data.coverImage,
      screenshots: data.screenshots ?? [], // ← ADD THIS
      repoUrl: data.repoUrl,
      demoUrl: data.demoUrl,
      content,
    };
  });

  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
});

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
