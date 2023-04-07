/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  base: process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "./",
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};
console.log("*****");
console.log(process.env);
console.log(nextConfig);
console.log("*****");

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
