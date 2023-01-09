// @ts-check

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@kitakita/codegen", "@kitakita/constants", "@kitakita/design"],
};

module.exports = config;
