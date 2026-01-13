"use client";

import React from "react";
import { cn } from "@/lib/utils";

const STATS = [
    { label: "عميل نثق بهم", value: "+200" },
    { label: "مشروع ناجح", value: "+20" },
    { label: "سنوات خبرة", value: "+5" },
];

export const StatisticsSection = () => {
    return (
        <div className="absolute bottom-20 left-0 w-full z-20 px-8">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6" dir="rtl">
                {STATS.map((stat, index) => (
                    <div
                        key={index}
                        className="group relative w-full md:w-[300px] h-[120px] rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[rgba(167,51,204,0.5)] hover:bg-[rgba(255,255,255,0.05)]"
                    >
                        {/* Glowing Effect on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,51,204,0.3)_0%,transparent_70%)]" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                            <h3 className="font-rubik font-bold text-4xl md:text-5xl text-white mb-2 drop-shadow-[0_0_10px_rgba(167,51,204,0.5)]">
                                {stat.value}
                            </h3>
                            <p className="font-rubik text-base text-white/70 group-hover:text-white transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
