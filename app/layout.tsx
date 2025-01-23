import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Providers } from './providers'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelwadoud Jalloul - Portfolio",
  description: "Personal portfolio showcasing my projects and experience",
  keywords: "Portfolio, Abdelwadoud Jalloul, Abdelwadoud, Jalloul, Developer, Software developer, Frontend Developer, Backend Developer, Frontend, Backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Providers>
          <nav className="fixed w-full top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <Navbar />
          </nav>
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
