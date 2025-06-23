import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"]});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col`} style={{ height: "100vh" }}>
      <Header />
      <main className="flex-1 overflow-y-auto p-12 flex flex-col gap-[32px] items-center sm:items-start justify-center" style={{ minHeight: 0 }}>
        <Main />
      </main>
      <Footer />
    </div>
  );
}
