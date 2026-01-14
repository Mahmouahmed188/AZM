"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { animateIntro } from "@/animations/introAnimation";

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    animateIntro(containerRef, arcRef, textRef, onComplete);
  }, [onComplete]);

  return (
    <section
      ref={containerRef}
      className="fixed inset-0 z-50 w-screen h-screen bg-[#000814] overflow-hidden m-0 p-0 flex flex-col items-center justify-center"
    >
      {/*
            BACKGROUND: 
            Matches Image 1 (Figma): Deep dark void, very subtle atmospheric depth.
        */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #000814 0%, #05020a 100%)',
        }}
      />

      {/* 
         TEXT LOGO IMAGE 
         Positioned visually: Centered, above the horizon.
         Size: Large, prominent.
         Blend Mode: Screen (to drop any black background from the asset).
      */}
      <div
        ref={textRef}
        className="relative z-20 mb-8 opacity-0 mix-blend-screen"
        style={{
          width: 'min(600px, 90vw)',
          transform: 'translateY(20px)', // Initial position for animation
        }}
      >
        <Image
          src="/azm-text-logo.png"
          alt="AZM Saudi"
          width={800}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 
         HORIZON / HILL SHAPE
         Matches Image 1 (Figma):
         - Gentle curve (not a steep hill).
         - Glowing purple top edge.
         - Darkness below (masking content).
         Position: Bottom of screen, extending wide.
      */}
      <div
        ref={arcRef}
        className="absolute bottom-[5vh] left-1/2 -translate-x-1/2 z-10 w-[140vw] h-[50vh] pointer-events-none opacity-0"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          <defs>
            {/* Atmospheric soft glow filter */}
            <filter id="intro-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="60" result="blur" />
            </filter>
            {/* Rim light gradient fading upward */}
            <linearGradient id="intro-rim-grad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#A733CC" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#A733CC" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* The Glowing Rim */}
          <ellipse
            cx="720"
            cy="512"
            rx="1000"
            ry="400"
            fill="none"
            stroke="url(#intro-rim-grad)"
            strokeWidth="12"
            filter="url(#intro-glow)"
          />

          {/* Solid Black area below the horizon line */}
          <ellipse
            cx="720"
            cy="516"
            rx="1000"
            ry="400"
            fill="#000000"
          />
        </svg>
      </div>

      {/* OVERLAY: Cinematic Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background:
            'linear-gradient(270deg, #000814 0%, rgba(0, 8, 20, 0.72) 16.42%, rgba(0, 8, 20, 0.00) 50.13%, rgba(0, 8, 20, 0.72) 84.49%, #000814 100%)',
        }}
      />
    </section>
  );
};

export default Intro;
