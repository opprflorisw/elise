import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.js",
  },
};
export default nextConfig;
