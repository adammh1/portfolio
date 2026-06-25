'use client';

type Status =
  | 'deployed'
  | 'in-progress'
  | 'demo-pending'
  | 'archived'
  | 'live'
  | 'completed'
  | 'paused'
  | 'cancelled';

const statusConfig: Record<
  Status,
  { label: string; dot: string; text: string }
> = {
  deployed: {
    label: 'deployed',
    dot: 'bg-mint',
    text: 'text-mint',
  },
  'in-progress': {
    label: 'in progress',
    dot: 'bg-sky-400',
    text: 'text-sky-400',
  },
  'demo-pending': {
    label: 'demo pending',
    dot: 'bg-text-faint',
    text: 'text-text-muted',
  },
  archived: {
    label: 'archived',
    dot: 'bg-text-faint',
    text: 'text-text-faint',
  },
  live: {
    label: 'live',
    dot: 'bg-green-400',
    text: 'text-green-400',
  },
  completed: {
    label: 'completed',
    dot: 'bg-blue-400',
    text: 'text-blue-400',
  },
  paused: {
    label: 'paused',
    dot: 'bg-yellow-400',
    text: 'text-yellow-400',
  },
  cancelled: {
    label: 'cancelled',
    dot: 'bg-red-400',
    text: 'text-red-400',
  },
};

function isStatus(value: unknown): value is Status {
  return typeof value === 'string' && value in statusConfig;
}

export default function StatusPill({ status }: { status?: string | null }) {
  const cfg = isStatus(status)
    ? statusConfig[status]
    : statusConfig['in-progress'];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-surface/60 px-2.5 py-1 font-mono text-[11px]">
      <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
      <span className={cfg.text}>{cfg.label}</span>
    </span>
  );
}
