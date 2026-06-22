import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-8">
      <Link href="/" className="font-display text-sm font-semibold text-text">
        Adam Mheni
      </Link>
      <div className="flex items-center gap-6 font-mono text-xs text-text-muted">
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
          className="transition-colors hover:text-mint"
        >
          linkedin
        </a>
        <a
          href="/adam-mheni-resume.pdf"
          download
          className="rounded-md border border-border px-3 py-1.5 text-text transition-colors hover:border-mint/50 hover:text-mint"
        >
          r{'\u00E9'}sum{'\u00E9'} {'\u2193'}
        </a>
      </div>
    </nav>
  );
}
