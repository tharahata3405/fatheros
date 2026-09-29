import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fatheros",
  assetPrefix: "/fatheros/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
