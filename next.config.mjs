/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  output: "server",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization
    remotePatterns: [
      {
        protocol: "http",
        hostname: "31.128.44.221",
        port: "8000",
        pathname: "/media/product/**",
      },
    ],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
