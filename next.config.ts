import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // GitHub Pages用の設定
  basePath: process.env.NODE_ENV === 'production' ? '/hootalk' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hootalk/' : '',
  
  // 静的エクスポートを有効化
  output: 'export',
  
  // 画像最適化を無効化（静的エクスポートでは使用不可）
  images: {
    unoptimized: true,
  },
  
  // trailingSlashを有効化
  trailingSlash: true,
};

export default nextConfig;
