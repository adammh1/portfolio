import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import StatusPill from '@/components/StatusPill';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import ScreenshotGallery from '@/components/ScreenshotGallery';

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Adam Mheni`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const hasLinks = Boolean(project.repoUrl || project.demoUrl);
  const screenshots: { src: string; caption: string }[] =
    project.screenshots ?? [];

  return (
    <main className="relative min-h-screen">
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-6">
        {/* Back link */}
        <Link
          href="/#projects"
          className="font-mono text-s text-text-muted transition-colors hover:text-mint"
        >
          ← back to knowing more about me
        </Link>

        {/* Title + status */}
        <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
          <h1 className="max-w-xl text-balance font-display text-2xl font-semibold text-text sm:text-4xl">
            {project.title}
          </h1>
          <StatusPill status={project.status} />
        </div>

        <p className="mt-4 max-w-xl text-balance leading-relaxed text-text-muted">
          {project.tagline}
        </p>

        {/* Stack tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics bar */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 rounded-lg border border-border bg-card px-5 py-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-mono text-base font-medium text-mint">
                  {metric.value}
                </div>
                <div className="mt-0.5 text-xs text-text-faint">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cover image */}
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-surface">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="768px"
              className="object-cover"
              priority
            />
          ) : (
            <ScreenshotPlaceholder label="cover" index={0} />
          )}
        </div>

        {/* Markdown body */}
        <div className="mt-10">
          <ReactMarkdown
            components={{
              h2: (props) => (
                <h2
                  className="mt-10 font-display text-lg font-semibold text-text first:mt-0"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="mt-3 leading-relaxed text-text-muted"
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  className="mt-3 list-disc space-y-2 pl-5 text-text-muted"
                  {...props}
                />
              ),
              li: (props) => <li className="leading-relaxed" {...props} />,
              strong: (props) => <strong className="text-text" {...props} />,
              code: (props) => (
                <code
                  className="rounded bg-card px-1.5 py-0.5 font-mono text-[13px] text-mint"
                  {...props}
                />
              ),
              a: (props) => (
                <a
                  className="text-sky underline underline-offset-2 transition-opacity hover:opacity-80"
                  {...props}
                />
              ),
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>

        {/* Screenshot gallery */}

        <ScreenshotGallery screenshots={screenshots} />
        {/* Links */}
        {hasLinks && (
          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-mint/50"
              >
                View repository
              </a>
            ) : (
              <span className="rounded-lg border border-border px-5 py-2.5 font-mono text-xs text-text-faint">
                repo: private
              </span>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="rounded-lg bg-mint px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                Live demo
              </a>
            )}
          </div>
        )}
      </article>
    </main>
  );
}

/* ── Placeholder component ─────────────────────────────────── */
function ScreenshotPlaceholder({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface">
      {/* Grid lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${index}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="#6b7fa3"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
      </svg>

      {/* Icon */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
        <svg
          className="h-5 w-5 text-text-faint"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 18h16.5M3.75 6h16.5"
          />
        </svg>
      </div>

      {/* Label */}
      <span className="relative font-mono text-[11px] uppercase tracking-widest text-text-faint">
        {label} · placeholder
      </span>
    </div>
  );
}
