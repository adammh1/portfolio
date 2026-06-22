import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-mint">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-text">
        That project doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-mint px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
