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
      className={`group relative block overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-card/40 to-surface/40 transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 hover:shadow-[0_8px_30px_-12px_rgba(110,231,183,0.1)] ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/0 to-transparent transition-all duration-300 group-hover:via-mint/30" />
      <div className="flex items-center gap-2 border-b border-border/40 bg-surface/30 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-text-faint/20 transition-colors group-hover:bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-faint/20 transition-colors group-hover:bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-faint/20 transition-colors group-hover:bg-[#27c93f]" />
        </div>
        <span className="ml-2 font-mono text-[11px] font-medium text-text-faint/70 transition-colors group-hover:text-text-muted">
          ~/{project.slug}
        </span>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/40 bg-bg">
        <Image
          src={project.coverImage?.trim() || '/images/image.png'}
          alt={project.title || 'potato'}
          fill
          sizes={
            featured
              ? '(min-width: 768px) 800px, 100vw'
              : '(min-width: 768px) 400px, 100vw'
          }
          className="object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        {/* Subtle overlay gradient to blend image into the card */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-display font-semibold tracking-tight text-text transition-colors group-hover:text-mint ${
              featured ? 'text-2xl' : 'text-lg'
            }`}
          >
            {project.title}
          </h3>
          <StatusPill status={project.status} />
        </div>

        <p className="mt-2 text-sm leading-relaxed text-text-muted/90">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, featured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/50 bg-surface/50 px-2 py-0.5 font-mono text-[11px] font-medium text-text-faint transition-colors group-hover:border-border group-hover:text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {featured && project.metrics && project.metrics.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/40 pt-5">
            {project.metrics.map((m) => (
              <div key={m.label} className="min-w-0 flex-1">
                <span className="font-mono text-sm font-semibold text-mint drop-shadow-[0_0_8px_rgba(110,231,183,0.3)]">
                  {m.value}
                </span>
                <span className="ml-2 text-xs font-medium text-text-faint uppercase tracking-wider">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
