/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Apurba\'s Registry!',
    description: 'A curated list of my Kasm Workspaces',
    icon: 'https://styles.redditmedia.com/t5_pzxlx/styles/profileIcon_snooe518dd85-f77f-4725-ac4a-464846a19b97-headshot.png',
    listUrl: 'https://itsApurba.github.io/kasm-registry/',
    contactUrl: 'https://github.com/itsApurba/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
