/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep verification builds separate from a concurrently running dev server.
  distDir: process.env.PORTFOLIO_BUILD_DIR || ".next",
};

export default nextConfig;
