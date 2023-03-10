/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
      return [
        {
          source: 'https://drive.google.com/file/d/:path*',
          destination: 'http://127.0.0.1:3000/:path*',
        },
      ]
    },
};

module.exports = nextConfig
