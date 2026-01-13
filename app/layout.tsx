import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const rubik = Rubik({
  subsets: ["latin", "arabic"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={rubik.variable} suppressHydrationWarning>
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
