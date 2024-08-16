/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_PAGES ? "/web" : "/", // Github Pages
};

export default nextConfig;
