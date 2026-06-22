import NavBar from '@/components/NavBar';

const experience = [
  {
    role: 'DevOps Intern',
    org: 'DEVOPRO',
    period: 'Feb 2025 – Oct 2025',
    points: [
      'Architected dual Kubernetes setups (EKS production, EC2 staging), automated with Ansible for scaling and recovery',
      'Built multi-branch GitLab CI/CD pipelines, cutting deployment time by 60%',
      "Set up monitoring (Prometheus/Grafana), logging (ELK), ingress (NGINX/MetalLB/Let's Encrypt), and security scanning (SonarQube/Trivy)",
      'Managed secrets across GitLab, AWS Secrets Manager, and Kubernetes',
    ],
  },
  {
    role: 'Developer',
    org: 'Innotech Consulting',
    period: 'Jul 2024 – Aug 2024',
    points: [
      'Developed JD Edwards workflows and custom modules for process automation',
      'Led Talend ETL work for data management',
    ],
  },
  {
    role: 'DevOps Intern',
    org: 'Mobelite',
    period: 'Feb 2023 – Jun 2023',
    points: [
      'Implemented hybrid AWS/on-premises architecture, automating tasks with Ansible (70% effort reduction)',
      'Managed Kubernetes, GitHub Actions CI/CD, and Prometheus/Grafana monitoring',
    ],
  },
  {
    role: 'Data Integration Intern',
    org: 'Innotech Consulting',
    period: 'Jul 2022 – Sep 2022',
    points: [
      'Worked on Talend ETL and JD Edwards, assisted with data profiling and cleaning',
    ],
  },
];

const skillGroups = [
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'GitLab CI/CD', 'GitHub Actions', 'Ansible'],
  },
  { label: 'Containers', items: ['Docker', 'Kubernetes', 'Docker Compose'] },
  { label: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack'] },
  { label: 'Security', items: ['SonarQube', 'Trivy'] },
  {
    label: 'Programming',
    items: ['Python', 'Java', 'TypeScript', 'Bash', 'YAML'],
  },
  {
    label: 'Backend',
    items: ['Spring Boot', 'JHipster', 'REST APIs', 'Microservices'],
  },
  { label: 'Frontend', items: ['Angular', 'TypeScript', 'HTML/CSS'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
];

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', date: 'May 2024 – May 2027' },
  { name: 'Foundation of Generative AI', date: 'Jan 2025' },
  { name: 'Introducing Generative AI with AWS', date: 'Apr 2024' },
];

const education = [
  {
    degree: "Master's in Information Systems Engineering",
    school: 'Faculty of Sciences of Monastir (FSM)',
    period: 'Oct 2023 – Oct 2025',
  },
  {
    degree: "Bachelor's in Computer Science",
    school:
      'Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)',
    period: 'Oct 2020 – Jul 2023',
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen">
      <NavBar />

      {/* Intro */}
      <section className="relative border-b border-border/40">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-8 sm:pb-24 sm:pt-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-mint/50"></span>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-mint drop-shadow-[0_0_8px_rgba(110,231,183,0.4)]">
              about
            </p>
          </div>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight leading-[1.1] text-text sm:text-5xl">
            Motivated DevOps engineer, built on real production systems.
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-text-muted">
            I work across CI/CD, cloud infrastructure, and containerization —
            and I care about the full path from a commit to something running
            reliably in production. Based in Tunisia, finishing my Master&apos;s
            in Information Systems Engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-[13px] text-text-muted">
            <a
              href="mailto:adammheni5@gmail.com"
              className="hover:text-mint transition-colors"
            >
              adammheni5@gmail.com
            </a>
            <span className="text-border">/</span>
            <span>+216 54 118 582</span>
            <span className="text-border">/</span>
            <span>Tunisia</span>
          </div>
          <a
            href="/adam-mheni-resume.pdf"
            download
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-mint px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-mint-dim hover:shadow-[0_0_20px_rgba(110,231,183,0.4)]"
          >
            Download r{'\u00E9'}sum{'\u00E9'}
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          Experience
        </h2>
        <div className="mt-10 space-y-12">
          {experience.map((job) => (
            <div
              key={job.role + job.org}
              className="group relative border-l-2 border-border/40 pl-6 transition-colors hover:border-mint/30"
            >
              {/* Glowing dot indicator */}
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full border border-surface bg-surface transition-colors group-hover:bg-mint group-hover:shadow-[0_0_8px_rgba(110,231,183,0.8)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h3 className="font-display text-lg font-semibold text-text">
                  {job.role}{' '}
                  <span className="text-text-muted font-normal">
                    — {job.org}
                  </span>
                </h3>
                <span className="font-mono text-xs font-medium text-text-faint/80 uppercase tracking-widest">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[15px] leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint/40" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="relative border-t border-border/40 bg-surface/20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            Technical skills
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="group">
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-text-faint transition-colors group-hover:text-mint">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border/50 bg-card/60 px-3 py-1.5 font-mono text-[11px] text-text-muted transition-colors hover:border-mint/40 hover:text-text backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education + Certs */}
      <section className="mx-auto max-w-4xl px-6 py-16 pb-24 sm:py-24 sm:pb-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
              Education
            </h2>
            <div className="mt-10 space-y-10">
              {education.map((ed) => (
                <div
                  key={ed.degree}
                  className="group border-l-2 border-border/40 pl-5 transition-colors hover:border-blue/40"
                >
                  <h3 className="font-display text-base font-semibold text-text group-hover:text-blue transition-colors">
                    {ed.degree}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {ed.school}
                  </p>
                  <p className="mt-3 font-mono text-[11px] font-medium text-text-faint/80 uppercase tracking-widest">
                    {ed.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
              Certifications
            </h2>
            <div className="mt-10 space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-border/40 pb-6 transition-colors hover:border-mint/30"
                >
                  <h3 className="text-[15px] font-medium text-text group-hover:text-mint transition-colors">
                    {cert.name}
                  </h3>
                  <p className="shrink-0 font-mono text-[11px] font-medium text-text-faint/80 uppercase tracking-widest">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-16 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
              Languages
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-text-muted">
              <span className="rounded-full border border-border/50 bg-surface/50 px-3 py-1 text-text">
                Arabic <span className="text-text-faint ml-1">native</span>
              </span>
              <span className="rounded-full border border-border/50 bg-surface/50 px-3 py-1 text-text">
                English <span className="text-text-faint ml-1">advanced</span>
              </span>
              <span className="rounded-full border border-border/50 bg-surface/50 px-3 py-1 text-text">
                French{' '}
                <span className="text-text-faint ml-1">intermediate</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
