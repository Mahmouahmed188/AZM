"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface IntroProps {
  onComplete: () => void;
}

/**
 * Expert Senior Frontend Implementation: 
 * Cinematic Intro Animation matching reference requirements.
 */
const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Animate Horizon in
      // Step 2: Animate Text rising
      // Step 3: Wait and complete
      await new Promise((resolve) => setTimeout(resolve, 3500));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  return (
    <section className="fixed inset-0 z-50 w-screen h-screen bg-black overflow-hidden m-0 p-0 flex flex-col items-center justify-center">
      {/* 1. ATMospheric BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #000814 100%)"
        }}
      />

      {/* 2. VIGNETTE OVERLAY */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)"
        }}
      />

      {/* 3. LOGO TYPOGRAPHY (Layered between Background and Horizon) */}
      <motion.div
        className="relative z-10 opacity-0 mix-blend-screen"
        initial={{ y: "150%", opacity: 1 }}
        animate={{ y: "-5vh", opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1], // easeOutQuart-like custom easing
        }}
        style={{
          width: "min(650px, 85vw)",
        }}
      >
        <Image
          src="/azm-text-logo.png"
          alt="عزم السعودية"
          width={800}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>

      {/* 4. PLANET HORIZON (CRITICAL Masking & Lighting) */}
      <motion.div
        className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 z-20 w-[180vw] h-[60vh] pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          <defs>
            {/* Atmospheric soft glow filter */}
            <filter id="cinematic-glow" x="-50%" y="-100%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="40" result="blur" />
            </filter>

            {/* Rim light sharp glow filter */}
            <filter id="rim-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
            </filter>

            {/* Sharp Rim Gradient with opacity fade at ends */}
            <linearGradient id="rim-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#733088" stopOpacity="0" />
              <stop offset="50%" stopColor="#9D4EDD" stopOpacity="1" />
              <stop offset="100%" stopColor="#733088" stopOpacity="0" />
            </linearGradient>

            {/* Diffuse Atmospheric Radial Glow */}
            <radialGradient id="ambience-radial" cx="50%" cy="100%" r="100%">
              <stop offset="0%" stopColor="#733088" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#733088" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* LAYER A: BACK DIFFUSE GLOW */}
          <ellipse
            cx="720"
            cy="480"
            rx="900"
            ry="250"
            fill="url(#ambience-radial)"
            filter="url(#cinematic-glow)"
          />

          {/* LAYER B: SOLID BODY (THE BLOCKER) */}
          {/* This matches background to hide logo rising */}
          <ellipse
            cx="720"
            cy="488"
            rx="1250"
            ry="320"
            fill="#000000"
          />

          {/* LAYER C: THE SHARP GLOWING RIM */}
          <ellipse
            cx="720"
            cy="480"
            rx="1245"
            ry="315"
            stroke="url(#rim-grad)"
            strokeWidth="3"
            fill="none"
            filter="url(#rim-glow)"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Intro;