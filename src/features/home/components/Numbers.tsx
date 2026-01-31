"use client";

import React, { useMemo, useRef, useLayoutEffect, createRef } from "react";
import { animateNumbers } from "@/animations/numbersAnimation";

const STATS = [
    { label: "Satisfied Clients", value: 200, suffix: "+" },
    { label: "Completed Projects", value: 500, suffix: "+" },
    { label: "Years of Excellence", value: 10, suffix: "+" },
    { label: "Team Members", value: 150, suffix: "+" },
];

const Numbers = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const numberRefs = useMemo(
        () => STATS.map(() => createRef<HTMLSpanElement>()),
        []
    );

    useLayoutEffect(() => {
        animateNumbers(containerRef, numberRefs, STATS.map((s) => s.value));
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-20 bg-azm-blue-900 text-white relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {STATS.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-4xl md:text-6xl font-bold mb-2 text-azm-green font-mono">
                                <span ref={numberRefs[index]}>0</span>
                                {stat.suffix}
                            </div>
                            <p className="text-sm md:text-base text-gray-300 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Numbers;
