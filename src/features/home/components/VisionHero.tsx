"use client";

import React, { useRef, useLayoutEffect, useMemo } from "react";
import { animateVisionHero } from "@/animations/visionHeroAnimation";
import { useDirection } from "@/shared/hooks/useDirection";

const VisionHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const charsRefs = useRef<HTMLSpanElement[]>([]);
  const { dir } = useDirection();

  const fullText = "نبتكر الحلول الرقمية لنصنع أثراً ملموساً في حياة المجتمع، ونبني بعزمنا مستقبل المملكة الذكي.";
  const words = useMemo(() => fullText.split(" "), []);

  useLayoutEffect(() => {
    charsRefs.current = charsRefs.current.filter(Boolean);
    const cleanup = animateVisionHero(sectionRef, charsRefs);
    return () => cleanup && cleanup();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center font-tajawal"
      dir={dir}
    >
      {/* الخلفية الملونة */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2141C9] via-[#5E2B7E] to-[#AB33FF]" />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none">
        <svg className="w-full h-full">
          <filter id="grain-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-noise)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[90vw] lg:max-w-[1400px] px-6 md:px-12 text-center leading-normal">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-snug">
          {words.map((word, wordIndex) => (
            // inline-block للكلمة فقط لمنع انكسارها
            <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <span
                  key={`char-${wordIndex}-${charIndex}`}
                  ref={(el) => { if (el) charsRefs.current.push(el); }}
                  className="transition-colors duration-75"
                  style={{
                    color: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {char}
                </span>
              ))}
              {/* مسافة عادية */}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};
export default VisionHero;