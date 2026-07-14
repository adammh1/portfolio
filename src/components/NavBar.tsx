// src/components/NavBar.tsx
'use client';

import CVDownload from '@/components/CVDownload';
import LanguageSwitch from '@/components/LanguageSwitch';
import { useLang } from '@/hooks/useLang';
import Link from 'next/link';
export default function NavBar() {
  const { t } = useLang();

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
                {t('nav_skills')}
              </Link>
            </li>
            <li>
              <Link
                className="font-mono text-[11px] tracking-[0.18em] text-text-muted hover:text-text"
                href="#projects"
              >
                {t('nav_projects')}
              </Link>
            </li>
            <li>
              <Link
                className="font-mono text-[11px] tracking-[0.18em] text-text-muted hover:text-text"
                href="#contact"
              >
                {t('nav_contact')}
              </Link>
            </li>
          </ul>

          <LanguageSwitch />
          <CVDownload />
        </div>
      </div>
    </nav>
  );
}
