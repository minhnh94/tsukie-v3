/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tsukie.com", "i.imgur.com"],
  },
};

module.exports = withPlausibleProxy()(nextConfig);
