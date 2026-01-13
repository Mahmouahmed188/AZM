"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { animateHero } from "@/animations/heroAnimation";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        animateHero(containerRef, logoRef, titleRef, subtitleRef, bgRef);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Layer with Parallax */}
            <div
                ref={bgRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%] bg-azm-dark pointer-events-none z-0"
            >
                {/* Abstract shapes or gradient if needed from Figma */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-azm-blue-700 via-azm-dark to-azm-dark" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full pt-20">
                <h1
                    ref={titleRef}
                    className="font-rubik font-bold text-white text-6xl md:text-8xl lg:text-[100px] leading-tight mb-8 text-right md:text-center w-full max-w-5xl dir-rtl"
                >
                    حلول رقمية
                    <br />
                    <span className="relative inline-block mt-2">
                        - لجودة حياة
                        <span className="relative inline-block mx-4 z-10 text-white">
                            أفضل
                            {/* Purple Loop Accent */}
                            <svg
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[160%] -z-10 pointer-events-none"
                                viewBox="0 0 200 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50 C 150 10, 190 40, 180 60 C 170 80, 130 90, 100 90 C 70 90, 30 80, 20 60 C 10 40, 50 10, 100 50"
                                    stroke="#A733CC"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="opacity-80"
                                />
                            </svg>
                        </span>
                    </span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;
