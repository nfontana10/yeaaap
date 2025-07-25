/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable static export to enable API routes
  trailingSlash: false,
  exportPathMap: undefined,
}

module.exports = nextConfig
