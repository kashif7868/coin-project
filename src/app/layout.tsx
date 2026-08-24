import type {
  Metadata,
  Viewport,
} from "next";
import type { ReactNode } from "react";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";
import { Toaster } from "sonner";

import AuthRequiredModal from "@/components/Auth/AuthRequiredModal";
import PagePreloader from "@/components/animations/PagePreloader";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import MobileBottomNav from "@/components/layout/MobileBottomNav/MobileBottomNav";
import Providers from "@/providers/Providers";

import styles from "@/components/animations/css/layout/RootLayout.module.css";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#080808",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={styles.rootBody}>
        <Providers>
          <PagePreloader />

          <AuthRequiredModal />

          <div className={styles.appShell}>
            <Header />

            <main className={styles.mainContent}>
              {children}
            </main>

            <Footer />
          </div>

          <MobileBottomNav />

          <Toaster
            position="top-center"
            richColors
            closeButton
            duration={3500}
            visibleToasts={3}
            gap={8}
            offset={16}
            mobileOffset={12}
            toastOptions={{
              className: styles.toast,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}