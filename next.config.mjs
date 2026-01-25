/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization to handle special characters in filenames
  },
  async redirects() {
    return [
      {
        source: '/solutions',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/web-development',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/mobile-app-development',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/ui-ux-design',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/project-management',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/seo',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/saas',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/aiaas',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/agentic-ai',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/automation',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/game-development',
        destination: '/case-studies',
        permanent: false,
      },
      {
        source: '/solutions/desktop-app-development',
        destination: '/case-studies',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
