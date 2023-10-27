/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'thumbor.forbes.com',
          },
          {
            protocol: 'https',
            hostname: 'housing.com',
          },
          {
            protocol: 'https',
            hostname: 'www.bhg.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol:'https',
            hostname:'modernhouse-projekty.pl'
          },
          {
            protocol:'https',
            hostname:'wallpapers.com'
          } 
        ],
      },
}

module.exports = nextConfig
