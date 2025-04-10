import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
