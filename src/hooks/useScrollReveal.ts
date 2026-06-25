'use client';

import { useEffect, useRef } from 'react';

/**
 * Returns a ref. Attach it to any element — it gets the `visible` class
 * added when it enters the viewport. Pair with:
 *
 *   className="opacity-0 translate-y-5 transition-[opacity,transform] duration-500 ease-out
 *              data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
 *
 * OR use the simpler CSS approach: add `.reveal` + `.reveal.visible` in globals.css
 */
export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.12,
  delay = 0,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
}
