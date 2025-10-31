/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Disable webpack cache to avoid issues with spaces in path
    config.cache = false;
    return config;
  },
};

export default nextConfig;
