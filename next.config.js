/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/satorulp',
  assetPrefix: '/satorulp',
  images: {
    unoptimized: true,
    domains: [],
  },
}

module.exports = nextConfig