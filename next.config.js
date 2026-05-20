/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "res.cloudinary.com",
            },
          ],
      qualities: [50, 60, 100],
    },

}

module.exports = nextConfig
