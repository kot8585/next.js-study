/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // 원격 이미지를 사용하기 위해 설정
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects()  {
    return [{
      source: '/products/deleted_forever',
      destination: '/products',
      permanent: true, /** 이 페이지는 영원히 이동했으니 이 페이지를 캐시해도 돼라고 알려줌 */
    }, {
      source: '/products/deleted_temp',
      destination: '/products',
      permanent: false,
    }
  ]
  },
  async rewrites() {
    return [{
      source: '/ellie',
      destination: '/about/me/ellie',
    }]
  }
};

module.exports = nextConfig;
