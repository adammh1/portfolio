'use client';

import { useLang } from '@/hooks/useLang';

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="inline-flex items-center rounded-full border border-border/70 bg-surface/70 p-1"
    >
      {(['en', 'fr'] as const).map((option) => {
        const active = option === lang;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            className={`rounded-full px-2.5 py-1 font-mono text-[11px] tracking-[0.18em] transition-colors ${
              active ? 'bg-mint text-bg' : 'text-text-muted hover:text-text'
            }`}
            aria-pressed={active}
          >
            {t(option === 'en' ? 'lang_en' : 'lang_fr')}
          </button>
        );
      })}
    </div>
  );
}
