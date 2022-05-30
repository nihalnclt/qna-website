/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'gansons.com',
            'www.theportlandclinic.com',
            'media.istockphoto.com',
            'dergreif-online.de',
            'res.cloudinary.com',
        ],
    },
};

module.exports = nextConfig;
