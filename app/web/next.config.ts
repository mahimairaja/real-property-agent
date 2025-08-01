import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://api:8080/:path*', // proxy to FastAPI service name
      },
    ];
  },
};

export default nextConfig;
