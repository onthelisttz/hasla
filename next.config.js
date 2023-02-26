/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: false,
//   images:{
//     domains:["firebasestorage.googleapis.com"]
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'https://firebasestorage.googleapis.com/:path*',
//       },
//     ]
//   }
// }
