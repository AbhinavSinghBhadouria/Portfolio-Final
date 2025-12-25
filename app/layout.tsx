"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import "./globals.css";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import ChatBot from "@/components/sections/ChatBot"; // 1. IMPORT CHATBOT
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.className} antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden ${
          isLoading ? "overflow-hidden" : ""
        }`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatePresence mode="wait">
            {isLoading && <Preloader />}
          </AnimatePresence>

          <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
            <div className="bg-grid absolute inset-0 opacity-[0.15] dark:opacity-[0.2]" />
            <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[10%] -right-[10%] h-[30%] w-[30%] rounded-full bg-accent/10 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)]" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
          </div>

          {!isLoading && (
            <div className="relative z-10 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow pt-20">
                {children}
              </main>
              <ChatBot /> {/* 2. ADD CHATBOT HERE */}
              <Footer />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}