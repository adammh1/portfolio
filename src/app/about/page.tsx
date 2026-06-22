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
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-4 sm:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-mint">
            about
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-2xl font-semibold leading-tight text-text sm:text-4xl">
            Motivated DevOps engineer, built on real production systems.
          </h1>
          <p className="mt-5 max-w-xl text-balance leading-relaxed text-text-muted">
            I work across CI/CD, cloud infrastructure, and containerization —
            and I care about the full path from a commit to something running
            reliably in production. Based in Tunisia, finishing my Master&apos;s
            in Information Systems Engineering.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-text-muted">
            <a href="mailto:adammheni5@gmail.com" className="hover:text-mint">
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
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-mint px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            Download résumé
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-xl font-semibold text-text sm:text-2xl">
          Experience
        </h2>
        <div className="mt-8 space-y-10">
          {experience.map((job) => (
            <div
              key={job.role + job.org}
              className="border-l border-border pl-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-base font-semibold text-text">
                  {job.role}{' '}
                  <span className="text-text-muted">— {job.org}</span>
                </h3>
                <span className="font-mono text-xs text-text-faint">
                  {job.period}
                </span>
              </div>
              <ul className="mt-3 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-xl font-semibold text-text sm:text-2xl">
            Technical skills
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-text-faint">
                  {group.label}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-text-muted"
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
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              Education
            </h2>
            <div className="mt-6 space-y-6">
              {education.map((ed) => (
                <div key={ed.degree}>
                  <h3 className="text-sm font-medium text-text">{ed.degree}</h3>
                  <p className="mt-1 text-sm text-text-muted">{ed.school}</p>
                  <p className="mt-1 font-mono text-xs text-text-faint">
                    {ed.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              Certifications
            </h2>
            <div className="mt-6 space-y-5">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <h3 className="text-sm font-medium text-text">{cert.name}</h3>
                  <p className="mt-1 font-mono text-xs text-text-faint">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-display text-xl font-semibold text-text">
              Languages
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-text-muted">
              <span>Arabic — native</span>
              <span className="text-border">/</span>
              <span>English — advanced</span>
              <span className="text-border">/</span>
              <span>French — intermediate</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
