/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "./";
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};
// console.log("*****");
// console.log(process.env);
// console.log(nextConfig);
// console.log("*****");

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
