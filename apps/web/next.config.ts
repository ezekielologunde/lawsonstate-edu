import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'www.lawsonstate.edu' },
      { hostname: 'live.staticflickr.com' },
    ],
  },
};

export default nextConfig;
