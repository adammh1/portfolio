import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import NavBar from '@/components/NavBar';
import StatusPill from '@/components/StatusPill';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Adam Mheni`,
    description: project.tagline,
  };
}

// export function generateMetadata({ params }: ProjectPageProps) {
//   const project = getProjectBySlug(params.slug);
//   if (!project) return {};
//   return {
//     title: `${project.title} — Adam Mheni`,
//     description: project.tagline,
//   };
// }

// export default function ProjectPage({ params }: ProjectPageProps) {
//   const project = getProjectBySlug(params.slug);
//   if (!project) notFound();

//   const hasLinks = Boolean(project.repoUrl || project.demoUrl);
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasLinks = Boolean(project.repoUrl || project.demoUrl);
  return (
    <main className="relative min-h-screen">
      <NavBar />

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-4">
        <Link
          href="/#projects"
          className="font-mono text-xs text-text-muted transition-colors hover:text-mint"
        >
          ← back to projects
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
          <h1 className="max-w-xl text-balance font-display text-2xl font-semibold text-text sm:text-4xl">
            {project.title}
          </h1>
          <StatusPill status={project.status} />
        </div>

        <p className="mt-4 max-w-xl text-balance leading-relaxed text-text-muted">
          {project.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

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

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border">
          <Image
            src={project.coverImage || '/images/image.png'}
            alt={project.title || 'potato'}
            fill
            sizes="800px"
            className="object-cover"
          />
        </div>

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
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>

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
