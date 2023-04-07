/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  base: process.env.GITHUB_REPO_NAME ?? "./",
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
