"use client";

import { useState } from "react";
import Intro from "@/components/Intro";
import Header from "@/components/layout/Header";
import MainHero from "@/components/sections/MainHero";
import StackedCards from "@/components/sections/StackedCards";
import GroupCompanies from "../components/sections/GroupCompanies";
import Certifications from "../components/sections/Certifications";
import Careers from "@/components/sections/Careers";
import Footer from "@/components/sections/Footer";
// import Clients from "@/components/sections/Clients";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-azm-dark relative">
      {showIntro && (
        <Intro onComplete={() => setShowIntro(false)} />
      )}

      {/* Main Content - conditionally visible or always visible underneath */}

      <div
        className={`w-full transition-opacity duration-1000
          ${showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'}
           `
        }
        aria-hidden={showIntro}
      >
        {!showIntro && (
          <>
            <Header />
            <MainHero />
            <StackedCards />
            <GroupCompanies />
            <Certifications />
            <Careers />
            <Footer />
          </>

        )}
      </div>
    </main>
  );
  {/* <Clients /> */ }
}