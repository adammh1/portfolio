export default function TerminalHero() {
  return (
    <div className="relative w-full">
      {/* Subtle modern gradients behind the hero */}
      <div className="absolute -top-24 -left-20 -z-10 h-[300px] w-[300px] rounded-full bg-mint/5 blur-[120px]" />
      <div className="absolute top-10 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue/5 blur-[120px]" />

      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-mint/50"></span>
        <div className="text-sm font-mono text-mint">$ whoami</div>
      </div>

      <div className="space-y-8">
        <h1 className="max-w-3xl font-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-text">
          Infrastructure that
          <br />
          deploys fast,
          <span className="text-mint"> recovers cleanly</span>
          <br />
          and stays observable.
        </h1>

        <p className="max-w-2xl text-text-muted text-lg sm:text-xl leading-relaxed">
          DevOps engineer building Kubernetes, CI/CD pipelines, cloud systems,
          monitoring and automation from real internship experience.
        </p>
      </div>

      <div className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-4">
        <Metric label="focus" value="kubernetes" />
        <Metric label="cloud" value="aws" />
        <Metric label="deploy" value="-60%" />
        <Metric label="status" value="available" />
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-b from-card/50 to-card p-5 transition-all hover:border-mint/30 hover:shadow-[0_0_20px_rgba(110,231,183,0.05)]">
      {/* Subtle top highlight on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="font-mono text-xs text-text-faint">{label}</div>
      <div className="mt-2 font-display text-lg font-medium text-text">
        {value}
      </div>
    </div>
  );
}
