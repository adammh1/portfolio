'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { Lang, translations, TranslationKey } from '@/lib/i18n';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const savedLang = window.localStorage.getItem('portfolio-lang');
    const preferredLang: Lang =
      savedLang === 'fr' || savedLang === 'en'
        ? savedLang
        : window.navigator.language.toLowerCase().startsWith('fr')
          ? 'fr'
          : 'en';

    queueMicrotask(() => {
      setLang(preferredLang);
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  const t = (key: TranslationKey) => translations[lang][key];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
