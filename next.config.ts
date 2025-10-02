import type { NextConfig } from 'next'; // Importă tipul NextConfig
import type { WebpackConfig } from 'next/dist/server/config-shared'; // Importă tipul pentru Webpack

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/lrigu76hy/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        pathname: '/**',
      },
    ],
  },
  webpack(config: WebpackConfig) { // Specifică tipul corect pentru config
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Utilizează SVGR pentru a transforma SVG-uri în componente React
    });
    return config;
  },
};

export default nextConfig;
