/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/satoruLP',
  assetPrefix: '/satoruLP',
  images: {
    unoptimized: true,
    domains: [],
  },
}

module.exports = nextConfig