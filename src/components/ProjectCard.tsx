// src/components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import StatusPill from './StatusPill';

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group overflow-hidden rounded-2xl border border-border/70 bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border/60 bg-surface">
        <Image
          src={project.coverImage?.trim() || '/images/image.png'}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={
            featured
              ? '(min-width: 768px) 800px, 100vw'
              : '(min-width: 768px) 400px, 100vw'
          }
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mint/80">
              {project.featured ? 'Featured Project' : 'Project'}
            </p>
            <h3
              className={`mt-2 font-display font-semibold text-text ${featured ? 'text-2xl' : 'text-xl'}`}
            >
              {project.title}
            </h3>
          </div>
          <StatusPill status={project.status} />
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, featured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/70 bg-surface px-3 py-1 font-mono text-[11px] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
