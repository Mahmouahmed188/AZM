import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

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
          <main className="min-h-screen relative flex flex-col items-center justify-between">
            {children}
          </main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
