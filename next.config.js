/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
    // ignoreBuildErrors: false,
  },
  experimental: {
    esmExternals: true,
  },
};

export default config;
