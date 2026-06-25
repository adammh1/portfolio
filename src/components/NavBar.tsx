// src/components/NavBar.tsx
'use client';

import CVDownload from '@/components/CVDownload';
import Link from 'next/link';
export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-text"
        >
          Adam Mheni
        </Link>

        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-6 sm:flex">
            <li>
              <Link
                className="font-mono text-[11px] tracking-[0.18em] text-text-muted hover:text-text"
                href="#skills"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                className="font-mono text-[11px] tracking-[0.18em] text-text-muted hover:text-text"
                href="#projects"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                className="font-mono text-[11px] tracking-[0.18em] text-text-muted hover:text-text"
                href="#contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>

          <CVDownload />
        </div>
      </div>
    </nav>
  );
}
