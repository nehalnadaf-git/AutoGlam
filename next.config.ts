// @ts-check
import type { NextConfig } from "next";
// next-pwa does not ship its own type declarations; use require to avoid
// TypeScript's inability to resolve the module's default export type.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  compress: true,
  poweredByHeader: false,
};

export default withPWA(nextConfig);
