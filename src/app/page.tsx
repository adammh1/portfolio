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
      <NavBar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-8 sm:pb-28 sm:pt-12">
        <TerminalHero />
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border">
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
