/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        //outputStandalone: true,
        serverActions: true,
    },
    output: 'standalone',
    //profiler: true,
}

module.exports = nextConfig
