import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // GitHub Pages用のベースパスを動的に設定
    const basePath = process.env.NODE_ENV === 'production' ? '/hootalk' : '';
    const bgImagePath = `${basePath}/bg.png`;
    
    // CSS変数を動的に設定
    document.documentElement.style.setProperty('--bg-image', `url('${bgImagePath}')`);
  }, []);

  return (
    <>
      <Head>
        <title>HooTalk - 音声翻訳アプリ</title>
        <meta name="description" content="OpenAI技術を活用した音声翻訳アプリ" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
