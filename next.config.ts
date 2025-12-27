import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com", "127.0.0.1", "::1", "res.cloudinary.com"],
  },
};

export default nextConfig;
