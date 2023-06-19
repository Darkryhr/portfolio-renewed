/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
