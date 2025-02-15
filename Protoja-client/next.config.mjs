/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
      devIndicators: {
        appIsrStatus: false,
      },
};

export default nextConfig;
