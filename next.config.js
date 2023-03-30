/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
