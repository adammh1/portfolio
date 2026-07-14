import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import matter from 'gray-matter';
import type { Lang } from './i18n';
import type { Project } from './types';

const projectsDir = path.join(process.cwd(), 'src/app/content/projects');

type ProjectFrontmatter = {
  title?: string;
  tagline?: string;
  status?: Project['status'];
  featured?: boolean;
  tags?: string[];
  stack?: string[];
  metrics?: Project['metrics'];
  coverImage?: string;
  screenshots?: Project['screenshots'];
  repoUrl?: string;
  demoUrl?: string;
  description?: string;
  date?: string;
};

type ProjectFile = {
  lang: Lang;
  slug: string;
  data: ProjectFrontmatter;
  content: string;
};

function parseProjectFilename(filename: string): { slug: string; lang: Lang } {
  if (filename.endsWith('.fr.md')) {
    return { slug: filename.replace(/\.fr\.md$/, ''), lang: 'fr' };
  }

  return { slug: filename.replace(/\.md$/, ''), lang: 'en' };
}

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

  const projectsBySlug = new Map<string, Partial<Record<Lang, ProjectFile>>>();

  for (const filename of files) {
    const { slug, lang } = parseProjectFilename(filename);
    const raw = fs.readFileSync(path.join(projectsDir, filename), 'utf-8');
    const { data, content } = matter(raw);
    const current = projectsBySlug.get(slug) ?? {};

    current[lang] = {
      slug,
      lang,
      data: data as ProjectFrontmatter,
      content,
    };

    projectsBySlug.set(slug, current);
  }

  const projects = [...projectsBySlug.entries()].map(
    ([slug, localizedFiles]) => {
      const english = localizedFiles.en ?? localizedFiles.fr;
      const fallback = english ?? localizedFiles.fr ?? localizedFiles.en;

      if (!fallback) {
        throw new Error(`Missing content for project ${slug}`);
      }

      const { data } = fallback;

      if (
        !data.title ||
        !data.tagline ||
        !data.status ||
        typeof data.featured !== 'boolean' ||
        !data.date
      ) {
        throw new Error(`Incomplete frontmatter for project ${slug}`);
      }

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
        screenshots: data.screenshots ?? [],
        repoUrl: data.repoUrl,
        demoUrl: data.demoUrl,
        description: data.description ?? data.tagline,
        date: data.date,
        content: english?.content ?? fallback.content,
        contentByLang: {
          en: localizedFiles.en?.content,
          fr: localizedFiles.fr?.content,
        },
      };
    },
  );

  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
});

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
