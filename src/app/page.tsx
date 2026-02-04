"use client";

import { useEffect, useState } from "react";
import Intro from "@/features/home/components/Intro";
import MainHero from "@/features/home/MainHero";
import StackedCards from "@/features/home/components/StackedCards";
import GroupCompanies from "@/features/home/components/GroupCompanies";
import Certifications from "@/features/home/components/Certifications";
import Careers from "@/features/home/components/Careers";
import NewsCarousel from "@/features/home/components/NewsCarousel";
import Footer from "@/shared/components/layout/Footer";

export default function Home() {
  const [introState, setIntroState] = useState<"unknown" | "show" | "hide">(
    "unknown",
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const shouldShowIntro =
      sessionStorage.getItem("azm:showIntroOnHome") === "1";
    const nextState: "show" | "hide" = shouldShowIntro ? "show" : "hide";

    const timeoutId = window.setTimeout(() => {
      setIntroState(nextState);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  const showIntro = introState === "show";
  const isResolved = introState !== "unknown";

  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full bg-azm-dark relative">
      {!showIntro && (
        <Intro
          onComplete={() => {
            setIntroState("hide");
            sessionStorage.removeItem("azm:showIntroOnHome");
          }}
        />
      )}

      <div
        className={`w-full transition-opacity duration-1000
          ${showIntro || !isResolved ? "opacity-0 pointer-events-none" : "opacity-100"}
           `}
        aria-hidden={showIntro || !isResolved}
      >
        {!showIntro && isResolved && (
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
