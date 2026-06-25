'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Shot = {
  src: string;
  caption: string;
};

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: Shot[];
}) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === 'Escape') setActive(null);

      if (e.key === 'ArrowRight') {
        setActive((v) => (v === null ? null : (v + 1) % screenshots.length));
      }

      if (e.key === 'ArrowLeft') {
        setActive((v) =>
          v === null ? null : (v - 1 + screenshots.length) % screenshots.length,
        );
      }
    }

    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [screenshots.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {screenshots.map((shot, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="
              group overflow-hidden rounded-xl
              border border-border
              text-left
            "
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-surface">
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                sizes="(min-width:640px) 340px,100vw"
                className="
                  object-cover
                  transition duration-500
                  group-hover:scale-[1.03]
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-black/0
                  transition
                  group-hover:bg-black/20
                "
              />

              <div
                className="
                  absolute bottom-3 right-3
                  rounded-md
                  bg-black/50
                  px-2 py-1
                  font-mono text-[11px]
                  opacity-0
                  transition
                  group-hover:opacity-100
                "
              >
                Click to expand
              </div>
            </div>

            <figcaption className="border-t border-border bg-card px-3 py-2 font-mono text-[11px] text-text-faint">
              {shot.caption}
            </figcaption>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/85
            backdrop-blur-md
            p-6
          "
        >
          <button
            className="
              absolute right-6 top-6
              rounded-lg border border-white/10
              px-3 py-2
              text-sm
            "
          >
            ✕
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              h-[85vh]
              w-full
              max-w-7xl
            "
          >
            <Image
              src={screenshots[active].src}
              alt={screenshots[active].caption}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            <div
              className="
                absolute bottom-0 left-0 right-0
                bg-gradient-to-t
                from-black/80
                to-transparent
                p-6
              "
            >
              <p className="font-mono text-sm text-white">
                {screenshots[active].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
