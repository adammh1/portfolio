import NavBar from '@/components/NavBar';
import ProjectCard from '@/components/ProjectCard';
import TerminalHero from '@/components/TerminalHero';
import { getAllProjects } from '@/lib/projects';

export default function Home() {
  const projects = getAllProjects();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => p.slug !== featured?.slug);

  return (
    <main className="relative min-h-screen">
      {/* Seamless background grid */}
      <div className="absolute inset-0 -z-50 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <NavBar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-24">
        <TerminalHero />
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border/50 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-lg font-semibold text-text">
            Projects
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {featured && <ProjectCard project={featured} featured />}
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
