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
        className="absolute bottom-[7.5vh] left-1/2 -translate-x-1/2 z-10 w-[140vw] h-[50vh] pointer-events-none opacity-0"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <ellipse cx="720" cy="420" rx="1032" ry="420" fill="url(#paint0_linear_intro)" />
          <g filter="url(#filter0_di_intro)">
            <ellipse cx="720" cy="424" rx="1080" ry="420" fill="#000814" />
          </g>
          <defs>
            <filter
              id="filter0_di_intro"
              x="-568"
              y="-214"
              width="2576"
              height="1256"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="120"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_intro"
              />
              <feOffset dy="-10" />
              <feGaussianBlur stdDeviation="44" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.45098 0 0 0 0 0.188235 0 0 0 0 0.533333 0 0 0 0.32 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_intro"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_intro"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="12" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.45098 0 0 0 0 0.188235 0 0 0 0 0.533333 0 0 0 0.64 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_intro"
              />
            </filter>
            <linearGradient
              id="paint0_linear_intro"
              x1="720"
              y1="0"
              x2="720"
              y2="840"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#733088" />
              <stop offset="1" stopColor="#000814" />
            </linearGradient>
          </defs>
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
