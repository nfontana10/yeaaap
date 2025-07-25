/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure API routes work properly
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
