/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // eslint: {
    // ignoreDuringBuilds: true,
    // ignoreBuildErrors: true,
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
