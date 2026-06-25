import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next.js 16 uses top-level "turbopack" if you need custom bundler config.
  // The old "eslint" key in next.config is no longer used.
  allowedDevOrigins: ['10.222.209.234'],
};

export default nextConfig;
