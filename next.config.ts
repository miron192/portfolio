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
<<<<<<< HEAD
=======
        pathname: '/icons/**', 
>>>>>>> 414a9881adf908234fbd82d78dbfa856340970a4
      },
    ],
  },
};

export default nextConfig;
