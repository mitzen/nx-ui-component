/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['weetbix.com.au'],
      },
    experimental: {
        //outputStandalone: true,
        serverActions: true,
    },
    output: 'standalone'
}

module.exports = nextConfig
