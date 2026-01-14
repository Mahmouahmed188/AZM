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
        // تم تعديل الارتفاع ليتناسب مع بروز التوهج للأعلى
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[120vw] h-[50vh] pointer-events-none"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 500" // زيادة الارتفاع لاستيعاب التوهج
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          <defs>
            {/* فلتر ضبابي ناعم لعمل التوهج */}
            <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="25" result="blur" />
            </filter>

            {/* تدرج لوني شعاعي للضوء - يتركز السطوع في منتصف الحافة العلوية */}
            <radialGradient
              id="light-gradient"
              cx="0.5" cy="1"    // مركز التدرج عند أسفل المنتصف
              r="0.8"            // نصف القطر
              fx="0.5" fy="0.92" // نقطة التركيز البؤري قريبة جداً من الحافة العلوية للكوكب
            >
              {/* لون بنفسجي ساطع في بؤرة التركيز */}
              <stop offset="0%" stopColor="#9D4EDD" stopOpacity="1" />
              {/* يتلاشى للبنفسجي الأغمق */}
              <stop offset="40%" stopColor="#733088" stopOpacity="0.7" />
              {/* يتلاشى للشفافية التامة في الأطراف والأعلى */}
              <stop offset="100%" stopColor="#733088" stopOpacity="0" />
            </radialGradient>

            {/* القناع: يستخدم شكل الكوكب لحجب الضوء من الأسفل */}
            <mask id="planet-mask">
              {/* خلفية بيضاء بالكامل تسمح بمرور الضوء */}
              <rect x="-2000" y="-2000" width="4000" height="4000" fill="white" />
              {/* شكل أسود مطابق للكوكب يحجب الضوء خلفه */}
              <ellipse cx="720" cy="480" rx="850" ry="250" fill="black" />
            </mask>
          </defs>

          {/* --- رسم العناصر --- */}

          {/* 1. طبقة الضوء الخلفية (يتم قصها بالقناع وتطبيق الوهج عليها) */}
          <g mask="url(#planet-mask)">
            <ellipse
              cx="720"
              cy="470" // مرفوع قليلاً خلف الكوكب
              rx="920" // أعرض قليلاً لضمان توهج الأطراف
              ry="320" // أطول ليمتد التوهج للأعلى في الغلاف الجوي
              fill="url(#light-gradient)"
              filter="url(#glow-filter)"
              opacity="0.9" // للتحكم في شدة الإضاءة العامة
            />
          </g>

          {/* 2. جسم الكوكب المظلم في المقدمة (يغطي أسفل الضوء) */}
          <ellipse
            cx="720"
            cy="480"
            rx="850"
            ry="250"
            fill="#000814" // لون أسود ليلكي داكن جداً
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
