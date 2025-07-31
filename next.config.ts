import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.spotparking.app',
            },
        ],
        // OR you can use "domains" if you just want to whitelist the host
        // domains: ['cdn.spotparking.app'],
    },
};

export default nextConfig;
