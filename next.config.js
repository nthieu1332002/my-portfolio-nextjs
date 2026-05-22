/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "res.cloudinary.com",
            },
            {
              protocol: "https",
              hostname: "cdn.jsdelivr.net",
            },
          ],
      qualities: [50, 60, 100],
    },

}

module.exports = nextConfig
