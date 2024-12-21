/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com"]
    },
    experimental: {
        allowMiddlewareResponseBody: true
    }
};

export default nextConfig;
