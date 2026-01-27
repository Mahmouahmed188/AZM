"use client";

import { useState } from "react";
import Intro from "@/features/home/components/Intro";
import MainHero from "@/features/home/MainHero";
import StackedCards from "@/features/home/components/StackedCards";
import GroupCompanies from "@/features/home/components/GroupCompanies";
import Certifications from "@/features/home/components/Certifications";
import Careers from "@/features/home/components/Careers";
import NewsCarousel from "@/features/home/components/NewsCarousel";
import Footer from "@/shared/components/layout/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full bg-azm-dark relative">
      {showIntro && (
        <Intro onComplete={() => setShowIntro(false)} />
      )}

      <div
        className={`w-full transition-opacity duration-1000
          ${showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'}
           `
        }
        aria-hidden={showIntro}
      >
        {!showIntro && (
          <>
            <MainHero />
            <StackedCards />
            <GroupCompanies />
            <Certifications />
            <Careers />
            <NewsCarousel />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}