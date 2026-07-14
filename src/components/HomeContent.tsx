'use client';

import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import StackCloud from '@/components/StackCloud';
import { useLang } from '@/hooks/useLang';
import type { Project } from '@/lib/types';

export default function HomeContent({ projects }: { projects: Project[] }) {
  const { t } = useLang();
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-text">
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.08),_transparent_35%),linear-gradient(to_right,#1e2a4210_1px,transparent_1px),linear-gradient(to_bottom,#1e2a4210_1px,transparent_1px)] bg-[size:100%_100%,24px_24px,24px_24px]" />

      <NavBar />

      <section id="home" className="mx-auto max-w-6xl px-6 pb-14 pt-14 lg:px-8">
        <HeroSection />
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
        <StackCloud />
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mint">
              {t('proj_featured')}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              {t('proj_heading')}
            </h2>
          </div>
          <span className="font-mono text-[11px] text-text-faint">
            {projects.length.toString().padStart(2, '0')}{' '}
            {t('proj_total_suffix')}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-4 rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mint">
              {t('contact_label')}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              {t('contact_heading')}
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-text-muted">
              {t('contact_body')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href="mailto:you@example.com"
              className="rounded-lg bg-mint px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t('contact_email')}
            </a>
            <a
              href="https://github.com/your-github"
              className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-mint/40"
            >
              {t('contact_github')}
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-mint/40"
            >
              {t('contact_linkedin')}
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl items-center justify-between border-t border-border/60 px-6 py-6 text-[11px] text-text-faint lg:px-8">
        <span>{t('footer_copy')}</span>
      </footer>
    </main>
  );
}
