// src/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mint">
          DevOps Engineer | Cloud Automation | Kubernetes
        </p>

        <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          I build infrastructure that ships cleanly.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
          I design cloud-native systems, automate delivery pipelines, and
          improve reliability across AWS, Kubernetes, and CI/CD platforms.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-mint px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-mint/40"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            'Kubernetes',
            'AWS',
            'Ansible',
            'GitHub Actions',
            'Docker',
            'Prometheus',
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/70 bg-card/50 px-3 py-1 font-mono text-[11px] text-text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* <div className="rounded-2xl border border-border/70 bg-card/40 p-5 shadow-[0_20px_80px_-40px_rgba(0,0,0,.7)] backdrop-blur-sm">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src="/image.png"
            alt="Portrait"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border/70 bg-surface p-4">
            <div className="font-mono text-[11px] text-text-faint">Current Focus</div>
            <div className="mt-1 text-sm text-text">Scalable cloud platforms</div>
          </div>
          <div className="rounded-xl border border-border/70 bg-surface p-4">
            <div className="font-mono text-[11px] text-text-faint">Stack</div>
            <div className="mt-1 text-sm text-text">DevOps + Infra</div>
          </div>
        </div> */}
    </div>
  );
}
