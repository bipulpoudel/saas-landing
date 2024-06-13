/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets-global.website-files.com",
        protocol: "https",
      },
      {
        hostname: "framerusercontent.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
