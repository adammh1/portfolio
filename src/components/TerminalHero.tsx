'use client';

import { useEffect, useRef } from 'react';

const logs = [
  {
    ts: '09:14:02.331',
    lv: 'OK',
    msg: (
      <>
        <span className="text-sky">kubectl</span> cluster-info —{' '}
        <span className="text-text">EKS us-east-1</span> reachable, 3 nodes
        Ready
      </>
    ),
  },
  {
    ts: '09:14:05.112',
    lv: 'INFO',
    msg: (
      <>
        <span className="text-sky">helm</span> upgrade{' '}
        <span className="text-mint">investHune</span> — revision 7, 4 pods
        Running
      </>
    ),
  },
  {
    ts: '09:14:11.888',
    lv: 'OK',
    msg: (
      <>
        <span className="text-sky">gitlab-runner</span> pipeline #2041 —{' '}
        <span className="text-mint">passed</span> in 3m 42s
      </>
    ),
  },
  {
    ts: '09:14:14.220',
    lv: 'INFO',
    msg: (
      <>
        <span className="text-sky">trivy</span> image scan — 0 CRITICAL, 2
        MEDIUM (patched)
      </>
    ),
  },
  {
    ts: '09:14:19.504',
    lv: 'OK',
    msg: (
      <>
        <span className="text-sky">prometheus</span> scrape —{' '}
        <span className="text-text">all targets</span> healthy, p99 48ms
      </>
    ),
  },
  {
    ts: '09:14:22.001',
    lv: 'WARN',
    msg: (
      <>
        <span className="text-sky">ansible</span> drift detected — remediation
        playbook queued
      </>
    ),
  },
  {
    ts: '09:14:22.750',
    lv: 'OK',
    msg: (
      <>
        system nominal — uptime <span className="text-mint">99.97%</span>
      </>
    ),
  },
] as const;

const lvColor: Record<string, string> = {
  OK: 'text-mint',
  INFO: 'text-sky',
  WARN: 'text-amber',
};

export default function TerminalHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // lines are rendered server-side; animate them in via JS
    const lines = el.querySelectorAll<HTMLElement>('.log-line');
    lines.forEach((line, i) => {
      line.style.opacity = '0';
      line.style.transform = 'translateX(-6px)';
      setTimeout(
        () => {
          line.style.transition = 'opacity .3s ease, transform .3s ease';
          line.style.opacity = '1';
          line.style.transform = 'translateX(0)';
        },
        200 + i * 200,
      );
    });
  }, []);

  return (
    <div className="overflow-hidden rounded-[10px] border border-border">
      {/* Titlebar */}
      <div className="flex items-center gap-2 border-b border-border bg-[#0c1220] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-[11px] tracking-wider text-text-faint">
          system.log — production
        </span>
      </div>

      {/* Log body */}
      <div
        ref={containerRef}
        className="bg-surface px-4 py-4 font-mono text-[12px] leading-[1.9]"
      >
        {logs.map(({ ts, lv, msg }, i) => (
          <div key={i} className="log-line flex items-baseline gap-3">
            <span className="min-w-[82px] text-[11px] text-text-faint">
              {ts}
            </span>
            <span className={`min-w-[36px] text-[11px] ${lvColor[lv]}`}>
              {lv}
            </span>
            <span className="text-text-muted">{msg}</span>
          </div>
        ))}
        {/* Cursor row */}
        <div className="flex items-baseline gap-3">
          <span className="min-w-[82px]" />
          <span className="min-w-[36px]" />
          <span className="inline-block h-[13px] w-[7px] animate-blink bg-mint align-text-bottom" />
        </div>
      </div>
    </div>
  );
}
