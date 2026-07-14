// src/components/StackCloud.tsx
'use client';

import { useLang } from '@/hooks/useLang';

const groups = [
  {
    title: 'Infrastructure',
    items: ['Kubernetes', 'AWS', 'Linux', 'CI/CD', 'VMs'],
  },
  {
    title: 'Delivery',
    items: [
      'GitHub Actions',
      'GitLab CI/CD',
      'Docker',
      'Trivy',
      'Ansible',
      ' Sonatype Nexus',
    ],
  },
  {
    title: 'Observability',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'SonarQube'],
  },
  {
    title: 'Languages',
    items: [
      'TypeScript',
      'Python',
      'Bash',
      'SQL',
      'yaml',
      'JSON',
      'HTML',
      'CSS',
      'NextJS',
      'Angular',
      'Spring Boot',
    ],
  },
];

export default function StackCloud() {
  const { t } = useLang();

  return (
    <section className="relative">
      {/* ambient glow background */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-mint/10 blur-[120px]" />

      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mint">
        {t('stack_title')}
      </p>

      <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
        {t('stack_description')}
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {groups.map((group, gi) => (
          <div
            key={group.title}
            className={`
              group relative overflow-hidden
              rounded-2xl border border-border/70
              bg-card/40 p-5
              transition-all duration-500 ease-out
              hover:-translate-y-1
              hover:border-mint/30
              hover:shadow-[0_20px_60px_-30px_rgba(74,222,128,0.15)]
              animate-[fadeIn_0.6s_ease-out_forwards]
            `}
            style={{
              animationDelay: `${gi * 120}ms`,
            }}
          >
            {/* subtle moving shine */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            {/* header */}
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-text">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
              {group.title}
            </h3>

            {/* items */}
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={item}
                  className="
                    relative overflow-hidden
                    rounded-full border border-border/70
                    bg-surface px-3 py-1
                    font-mono text-[11px] text-text-muted
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:scale-[1.05]
                    hover:border-mint/40
                    hover:text-text
                    hover:shadow-[0_0_15px_rgba(74,222,128,0.12)]
                  "
                  style={{
                    animationDelay: `${i * 40}ms`,
                  }}
                >
                  {/* shine sweep */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 hover:translate-x-full" />

                  <span className="relative">{item}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
