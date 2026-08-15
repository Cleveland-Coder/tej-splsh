import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next 16 writes an AGENTS.md (plus a CLAUDE.md pointing at it) into the
  // repo root on every `next dev`. Opt out: this repo does not track agent
  // guidance in git, and leaving it on means `pnpm dev` silently drops two
  // untracked files into a working tree that is otherwise kept clean.
  agentRules: false,
  // Allow localhost origins in development
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  // Configure static file handling
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
