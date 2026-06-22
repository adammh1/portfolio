import Image from 'next/image';
import Link from 'next/link';
import StatusPill from './StatusPill';
import type { Project } from '@/lib/types';

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
      className={`group block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-mint/40 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-surface/60 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-text-faint/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-faint/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-faint/30" />
        <span className="ml-2 font-mono text-[11px] text-text-faint">
          ~/{project.slug}
        </span>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
        <Image
          src={project.coverImage?.trim() || '/images/image.png'}
          alt={project.title || 'potato'}
          fill
          sizes={
            featured
              ? '(min-width: 768px) 800px, 100vw'
              : '(min-width: 768px) 400px, 100vw'
          }
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-display font-semibold text-text ${
              featured ? 'text-xl' : 'text-base'
            }`}
          >
            {project.title}
          </h3>
          <StatusPill status={project.status} />
        </div>

        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, featured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        {featured && project.metrics && project.metrics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="font-mono text-sm font-medium text-mint">
                  {m.value}
                </span>
                <span className="ml-2 text-xs text-text-faint">{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
