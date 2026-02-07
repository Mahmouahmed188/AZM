"use client";

import React, { useRef } from "react";
import Image from "next/image";
import HeroTitle from "./components/HeroTitle";
import HeroStats from "./components/HeroStats";
import { useHeroAnimations } from "./hooks/useHeroAnimations";

const MainHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const swirlRef = useRef<SVGSVGElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const descTextRef = useRef<HTMLDivElement>(null);
  const descLogosRef = useRef<HTMLDivElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);

  // Decoupled GSAP logic
  useHeroAnimations({
    sectionRef,
    titleRef,
    swirlRef,
    descTextRef,
    descLogosRef,
    loadingBarRef,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#000814] overflow-hidden flex flex-col font-tajawal"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Background.png"
          alt="Background"
          fill
          className="hero-bg-image object-cover opacity-60 pointer-events-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/80 via-transparent to-[#000814]" />
      </div>

      {/* Hero Title Composition */}
      <div className="relative z-10 flex-grow flex flex-col items-center pb-10 pt-25 md:pt-48 px-6">
        <HeroTitle ref={titleRef} swirlRef={swirlRef} />
      </div>

      {/* Hero Stats Composition */}
      <HeroStats
        ref={statsRef}
        descTextRef={descTextRef}
        descLogosRef={descLogosRef}
        loadingBarRef={loadingBarRef}
      />
    </section>
  );
};

export default MainHero;
