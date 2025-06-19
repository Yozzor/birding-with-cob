/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export configuration for proper development
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
