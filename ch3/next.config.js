/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: 'akamai', // 외부 서비스를 사용하려면 loader를 설정해야 한다. 단, Vercel 은 지정할 필요가 없다.
    domains: ['images.unsplash.com'],
  }
}

module.exports = nextConfig
