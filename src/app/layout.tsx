import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/shared/components/common/SmoothScrolling";

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

import { Rubik } from "next/font/google";
const rubik = Rubik({
  subsets: ["arabic", "latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "AZM Saudi Company",
  description: "Digital Trust & Authentication Services",
};

import Header from "@/shared/components/layout/Header";
import GlobalFooter from "@/shared/components/layout/GlobalFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tajawal.variable} ${rubik.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body className="antialiased bg-azm-dark text-white overflow-x-hidden" suppressHydrationWarning>
        <SmoothScrolling>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow w-full relative">
              {children}
            </main>
            <GlobalFooter />
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
