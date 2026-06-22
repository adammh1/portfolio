export default function TerminalHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-28">
      <div className="mb-8 text-sm text-emerald-400">$ whoami</div>

      <div className="space-y-6">
        <h1 className="max-w-4xl text-6xl font-semibold tracking-tight leading-[1]">
          Infrastructure that
          <br />
          deploys fast,
          <span className="text-emerald-400"> recovers cleanly</span>
          <br />
          and stays observable.
        </h1>

        <p className="max-w-2xl text-zinc-400 text-xl">
          DevOps engineer building Kubernetes, CI/CD pipelines, cloud systems,
          monitoring and automation from real internship experience.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-4">
        <Metric label="focus" value="kubernetes" />

        <Metric label="cloud" value="aws" />

        <Metric label="deploy" value="-60%" />

        <Metric label="status" value="available" />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="
      rounded-xl
      border
      border-zinc-800
      bg-zinc-950/60
      p-5
      "
    >
      <div className="text-zinc-500">{label}</div>

      <div className="mt-2 text-lg">{value}</div>
    </div>
  );
}
