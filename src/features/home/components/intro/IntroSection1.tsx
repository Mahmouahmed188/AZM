"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IntroSection1Props {
  onComplete: () => void;
}

const IntroSection1: React.FC<IntroSection1Props> = ({ onComplete }) => {
  useEffect(() => {
    const sequence = async () => {
      // Intro duration
      await new Promise((resolve) => setTimeout(resolve, 3500));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  return (
    <section
      className="fixed inset-0 w-screen h-screen overflow-hidden m-0 p-0 flex items-center justify-center"
      style={{
        zIndex: 99999,
        backgroundColor: "#000000"
      }}
    >
      {/* 1. Atmospheric BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #000814 100%)",
        }}
      />

      {/* 2. VIGNETTE OVERLAY */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* 3. LOGO TYPOGRAPHY (Centering vertically and horizontally) */}
      <motion.div
        className="relative z-10 opacity-0 mix-blend-screen"
        initial={{ y: "15vh", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{
          delay: 1.6,
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          width: "min(990px, 100vw)",
        }}
      >
        <Image
          src="/azm-text-logo.png"
          alt="عزم السعودية"
          width={1200}
          height={400}
          style={{ height: 'auto' }}
          className="w-full object-contain px-8"
          priority
        />
      </motion.div>

      {/* 4. PLANET HORIZON (Positioned elegantly below logo) */}
      <motion.div
        className="absolute bottom-[-69.2vh] left-1/2 -translate-x-1/2 z-20 w-[150vw] pointer-events-none"
        initial={{ y: "30vh", opacity: 0, scale: 0.85 }}
        animate={{ y: "0", opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 2.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Image
          src="/Background1.png"
          alt="Planet Horizon"
          width={1920}
          height={600}
          style={{ height: 'auto' }}
          className="w-full object-contain"
          priority
        />
      </motion.div>
    </section>
  );
};

export default IntroSection1;