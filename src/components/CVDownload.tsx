'use client';

import { useEffect, useRef, useState } from 'react';

export default function CVDownload() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutside);

    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  function download(file: string) {
    const a = document.createElement('a');

    a.href = file;
    a.download = file.split('/').pop() || 'resume.pdf';

    document.body.appendChild(a);
    a.click();
    a.remove();

    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          flex items-center gap-2
          rounded-md border border-mint
          px-3 py-1.5
          font-mono text-[11px]
          tracking-wider
          text-mint
          transition-all
          hover:bg-mint
          hover:text-bg
        "
      >
        <svg
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15V3m0 12-4-4m4 4 4-4M2 17l.6 2.4A2 2 0 004.5 21h15a2 2 0 002-1.5L22 17"
          />
        </svg>
        Resume
      </button>

      {open && (
        <div
          ref={panelRef}
          className="
            absolute right-0 top-12
            w-[280px]
            overflow-hidden
            rounded-xl
            border border-border
            bg-card/95
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(0,0,0,.35)]
          "
        >
          <div className="border-b border-border px-5 py-4">
            <p className="font-mono text-[11px] tracking-[0.2em] text-mint">
              DOWNLOAD
            </p>

            <p className="mt-2 text-sm text-text-muted">Select your language</p>
          </div>

          <div className="p-2">
            <button
              onClick={() => download('/Adam_Mheni_CV_EN.pdf')}
              className="
                group flex w-full items-center
                justify-between rounded-lg
                px-4 py-3
                transition
                hover:bg-surface
              "
            >
              <span>🇬🇧 English</span>

              <span className="opacity-50 group-hover:translate-x-1 transition">
                →
              </span>
            </button>

            <button
              onClick={() => download('/Adam_Mheni_CV_FR.pdf')}
              className="
                group flex w-full items-center
                justify-between rounded-lg
                px-4 py-3
                transition
                hover:bg-surface
              "
            >
              <span>🇫🇷 Français</span>

              <span className="opacity-50 group-hover:translate-x-1 transition">
                →
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
