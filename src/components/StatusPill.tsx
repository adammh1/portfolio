type Status = 'deployed' | 'archived' | 'demo-pending' | 'in-progress';

const statusConfig = {
  deployed: {
    label: 'deployed',
    dot: 'bg-mint',
    text: 'text-mint',
  },
  'in-progress': {
    label: 'in progress',
    dot: 'bg-blue',
    text: 'text-blue',
  },
  'demo-pending': {
    label: 'demo: pending',
    dot: 'bg-text-faint',
    text: 'text-text-muted',
  },
  archived: {
    label: 'archived',
    dot: 'bg-text-faint',
    text: 'text-text-faint',
  },
} satisfies Record<Status, { label: string; dot: string; text: string }>;

const fallback = statusConfig['in-progress'];

export default function StatusPill({ status }: { status?: Status | null }) {
  const cfg = status ? (statusConfig[status] ?? fallback) : fallback;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-surface/50 px-2.5 py-1 font-mono text-[11px] leading-none shadow-sm backdrop-blur-sm">
      <span
        className={`h-1.5 w-1.5 rounded-full ${cfg.dot} ${status === 'deployed' ? 'animate-pulse shadow-[0_0_8px_rgba(110,231,183,0.8)]' : ''}`}
      />
      <span className={cfg.text}>{cfg.label}</span>
    </span>
  );
}

export type { Status };
