/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Remove trailingSlash and standalone output
  output: 'export',
  // Add basePath if you're not using a custom domain
  // basePath: '/handenaz',
  distDir: 'dist',
}

module.exports = nextConfig 