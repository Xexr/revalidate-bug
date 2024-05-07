/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    webpackBuildWorker: true,
  },
};

export default nextConfig;
