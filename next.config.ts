import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // GitHub Pages用の設定
  basePath: process.env.NODE_ENV === 'production' ? '/hootalk' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hootalk/' : '',
  
  // 静的エクスポートを有効化（プロダクション時のみ）
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  }),
};

export default nextConfig;
