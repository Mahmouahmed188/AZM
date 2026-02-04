import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

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
import NextTopLoader from "nextjs-toploader";
import { LoadingProvider } from "@/shared/components/providers/LoadingProvider";
import I18nProvider from "@/shared/components/providers/I18nProvider";
import TransitionLayout from "@/shared/components/transitions/TransitionLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${rubik.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/headicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/headicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/headicon.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body className="antialiased bg-azm-dark text-white overflow-x-hidden" suppressHydrationWarning>
        <NextTopLoader
          color="#C5A059"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #C5A059,0 0 5px #C5A059"
        />
        <I18nProvider>
          <LoadingProvider>
            <TransitionLayout>
              {/* <SmoothScrolling> */}
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow w-full relative">
                  {children}
                </main>
                <GlobalFooter />
              </div>
              {/* </SmoothScrolling> */}
            </TransitionLayout>
          </LoadingProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
