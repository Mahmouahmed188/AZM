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
        className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 z-10 w-[140vw] h-[50vh] pointer-events-none opacity-0"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 500"
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          <defs>
            {/* Glow Filter for the Edge */}
            <filter id="edge-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Gradient for the Stroke (Purple Glow) */}
            <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(167, 51, 204, 0)" />
              <stop offset="25%" stopColor="rgba(167, 51, 204, 0.4)" />
              <stop offset="50%" stopColor="#A733CC" />
              <stop offset="75%" stopColor="rgba(167, 51, 204, 0.4)" />
              <stop offset="100%" stopColor="rgba(167, 51, 204, 0)" />
            </linearGradient>

            {/* Fill Gradient (Dark masking) */}
            <linearGradient id="fill-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000814" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>

          {/* 
               The Main Shape (Filled)
               Curve: Flatter. M 0,200 Q 700,100 1400,200 L...
            */}
          <path
            d="M 0,200 Q 700,50 1400,200 L 1400,500 L 0,500 Z"
            fill="url(#fill-grad)"
            stroke="none"
          />

          {/* The Glowing Edge (Stroke) */}
          <path
            d="M 0,200 Q 700,50 1400,200"
            fill="none"
            stroke="url(#glow-grad)"
            strokeWidth="2"
            style={{ filter: 'drop-shadow(0px -4px 10px rgba(167, 51, 204, 0.5))' }}
          />
        </svg>
      </div>

      {/* OVERLAY: Cinematic Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 40%, #000814 100%)',
          opacity: 0.8
        }}
      />
    </section>
  );
};

export default Intro;
