import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import AuthRequiredModal from "@/components/Auth/AuthRequiredModal";
import PagePreloader from "@/components/animations/PagePreloader";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import MobileBottomNav from "@/components/layout/MobileBottomNav/MobileBottomNav";
import Providers from "@/providers/Providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CoinHeritage",
    template: "%s | CoinHeritage",
  },
  description:
    "Discover, scan, collect and trade historical coins with CoinHeritage.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white">
        <Providers>
          <PagePreloader />

          <AuthRequiredModal />

          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 pb-24 lg:pb-0">
              {children}
            </main>

            <Footer />

            <MobileBottomNav />
          </div>

          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={3500}
            toastOptions={{
              className:
                "border border-[#d99a31]/20 bg-[#111111] text-white shadow-2xl",
            }}
          />
        </Providers>
      </body>
    </html>
  );
}