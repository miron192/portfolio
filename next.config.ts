const nextConfig = {
  experimental: {
    turbopack: true, // Activează Turbopack
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/lrigu76hy/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: '/icons/**', 
      },
    ],
  },
};

export default nextConfig;
