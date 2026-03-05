import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/api/c15t/:path*',
        destination: `${process.env.NEXT_PUBLIC_C15T_URL}/:path*`,
      },
    ];
  },
}

const withMDX = createMDX({});

export default withMDX(nextConfig)
