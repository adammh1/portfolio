import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display font-semibold text-text tracking-tight hover:text-mint transition-colors"
        >
          Adam Mheni
        </Link>
        <div className="flex items-center gap-5 sm:gap-6 font-mono text-[13px] text-text-muted">
          <Link href="/#projects" className="transition-colors hover:text-mint">
            projects
          </Link>
          <Link href="/about" className="transition-colors hover:text-mint">
            about
          </Link>
          <a
            href="https://linkedin.com/in/adam-mheni"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-mint hidden sm:inline-block"
          >
            linkedin
          </a>
          <a
            href="/adam-mheni-resume.pdf"
            download
            className="group relative inline-flex items-center justify-center overflow-hidden rounded border border-border bg-card/30 px-3 py-1.5 text-text transition-colors hover:border-mint/50"
          >
            <span className="relative z-10 transition-colors group-hover:text-mint flex items-center gap-1.5">
              r{'\u00E9'}sum{'\u00E9'}
              <svg
                className="w-3 h-3 transition-transform group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
      </nav>
    </header>
  );
}
