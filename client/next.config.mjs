/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // Leave blank unless needed
        pathname: "/**", // Match all paths
      },
      {
        protocol: "http",
        hostname: "revision.codesupply.co",
        port: "", // Leave blank unless needed
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "revision.codesupply.co",
        port: "", // Leave blank unless needed
        pathname: "/**", // Match all paths
      },
    ],
  },
};

export default nextConfig;
