/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Add this to handle trailing slashes
  trailingSlash: true,
  // Add this if you're using static exports
  output: 'standalone',
}

module.exports = nextConfig 