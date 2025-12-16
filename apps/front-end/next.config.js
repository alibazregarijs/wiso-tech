/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'purple-monkey.mypinata.cloud', // literal string required
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
};

export default nextConfig;
