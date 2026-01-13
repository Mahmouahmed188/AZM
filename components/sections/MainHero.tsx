"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { StatisticsSection } from "@/components/sections/StatisticsSection";

const MainHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Simple entry animation for the title
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.5,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative w-full h-[1024px] min-h-screen flex flex-col items-center justify-start overflow-hidden bg-azm-dark"
        >
            {/* 1. Background Layers (Oval, Union Pattern, Gradients) */}
            <BackgroundEffects />

            {/* 2. Main Content (Headline) */}
            {/* Positioned comfortably to account for the fixed Header height (80px) and visual balance */}
            <div className="relative z-10 w-full max-w-[1440px] px-8 pt-[280px] flex flex-col items-center text-center">
                <h1
                    ref={titleRef}
                    className="font-rubik font-bold text-white text-6xl md:text-8xl lg:text-[100px] leading-tight mb-8 drop-shadow-lg opacity-0"
                    dir="rtl"
                >
                    حلول رقمية
                    <br />
                    <span className="text-[#A733CC] inline-block mt-4">
                        - لجودة حياة أفضل
                    </span>
                </h1>
            </div>

            {/* 3. Statistics Section (Bottom) */}
            <StatisticsSection />
        </section>
    );
};

export default MainHero;
