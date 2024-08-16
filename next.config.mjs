/** @type {import('next').NextConfig} */
const nextConfig = {
  // Github Pages
  basePath: process.env.GITHUB_PAGES ? "/web" : undefined,
  assetPrefix: process.env.GITHUB_PAGES ? "/web/" : undefined,
};

export default nextConfig;
