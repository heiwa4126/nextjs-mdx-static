/** @type {import('next').NextConfig} */
let basePath = process.env.GITHUB_REPOSITORY?.split("/")[1];
basePath = basePath ? `/${basePath}` : "";
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: {
    basePath,
  },
  //trailingSlash: true,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};
// console.log("*****");
// console.log(nextConfig);
// console.log("*****");

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
