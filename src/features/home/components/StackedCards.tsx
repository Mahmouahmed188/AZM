"use client";

import React, { useRef, useLayoutEffect, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateVisionStackedExperience } from "@/animations/stackedCardsAnimation";

// Important: keep GSAP + plugins imported from the SAME module paths app-wide.
// Mixing `gsap/ScrollTrigger` with `gsap/dist/ScrollTrigger` can result in duplicate plugin instances
// where refresh/kill calls affect the wrong instance and pinned sections appear "skipped".
gsap.registerPlugin(ScrollTrigger);

// 1. تبسيط واجهة البيانات لتستقبل الصورة فقط
interface CardData {
  id: number;
  image: string;
  alt: string;
}

// 2. تحديث البيانات لربطها بمسارات الصور الموجودة في مجلد public
const cardsData: CardData[] = [
  {
    id: 1,
    image: "/cards/Card 1.png", // تأكد أن اسم الصورة يطابق ملفك
    alt: "منصة التركات",
  },
  {
    id: 2,
    image: "/cards/Card 2.png",
    alt: "منصة شفاء",
  },
  {
    id: 3,
    image: "/cards/Card 3.png",
    alt: "منصة عقارك",
  },
  {
    id: 4,
    image: "/cards/Card 4.png",
    alt: "منصة نافذ",
  },
];

const StackedCards = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const charsRefs = useRef<HTMLSpanElement[]>([]);

  const fullText =
    "نبتكر الحلول الرقمية لنصنع أثراً ملموساً في حياة المجتمع، ونبني بعزمنا مستقبل المملكة الذكي.";
  const words = useMemo(() => fullText.split(" "), []);

  useLayoutEffect(() => {
    // Ensure charsRefs are clean before animation starts
    // We use a temp array during render to collect them consistently

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cleanup = animateVisionStackedExperience(
        containerRef,
        charsRefs,
        cardsRef,
      );

      // Critical: Refresh ScrollTrigger after layout/paint so the pin + measurements are correct.
      // Using rAF + a small timeout is more consistent across Chrome/Safari/Firefox than a single delay.
      const rafId = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
      const timeout = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => {
        if (cleanup) cleanup();
        cancelAnimationFrame(rafId);
        clearTimeout(timeout);
      };
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="cards-container relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#02050A]"
      dir="rtl"
    >
      {/* Background Layer (Vibrant Cinematic Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2141C9] via-[#5E2B7E] to-[#AB33FF]" />

      {/* Grain texture overlay (Cinematic Look) */}
      <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none">
        <svg className="w-full h-full text-transparent">
          <filter id="grain-noise-vision">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-noise-vision)" />
        </svg>
      </div>

      {/* Layer 0: Vision Hero Text (ثابت كما هو) */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 text-center z-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-snug">
          {words.map((word, wordIndex) => (
            <span
              key={`word-${wordIndex}`}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((char, charIndex) => (
                <span
                  key={`char-${wordIndex}-${charIndex}`}
                  ref={(el) => {
                    if (el) {
                      // Only push if not already present to avoid duplicates during re-renders
                      if (!charsRefs.current.includes(el)) {
                        charsRefs.current.push(el);
                      }
                    }
                  }}
                  className="transition-colors duration-75 px-[1.6px]"
                  style={{
                    color: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {char}
                </span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </h2>
      </div>

      {/* Layers 1-4: Image Cards */}
      <div className="relative w-full h-full max-w-[1600px] mx-auto flex items-center justify-center px-6 md:px-12 pointer-events-none">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="card absolute w-full max-w-[1100px] h-auto aspect-[16/9] rounded-[40px] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.9)] border border-white/5 bg-[#030B16] pointer-events-auto"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative w-full h-full">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackedCards;
