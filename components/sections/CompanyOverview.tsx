"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { animateNumbers } from "@/animations/numbersAnimation";

/* 
  Merged "About" + "Numbers" into a Split Layout Section.
  Left Side: Statistics Card (Purple Gradient)
  Right Side: Text Content ("Leading Company...")
*/

const STATS = [
    { label: "إجمالي قيمة المشاريع خلال الأربع سنوات الأخيرة", value: 2.1, suffix: "+ مليار" },
    { label: "منصات وحلول رقمية", value: 25, suffix: "+ منتج" },
    { label: "من القطاعين الحكومي والخاص", value: 400, suffix: "+ عميل" },
];

const CompanyOverview = () => {
    // Refs for animation
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="relative w-full py-20 px-6 md:px-20 z-10 dir-rtl">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT COLUMN: Statistics Card (Actually visual Right in RTL, but DOM order matters) */}
                {/* The design shows Stats on the Left (visual) / Right (DOM if RTL). 
            Wait, RTL means:
            - First visual element is Right (Text).
            - Second visual element is Left (Stats).
            Let's structure DOM: Text First, Stats Second. Flex-row-reverse or Grid RTL.
        */}

                {/* VISUAL RIGHT (Content) */}
                <div className="flex flex-col text-right items-start order-1 lg:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold font-rubik leading-relaxed text-white mb-6">
                        شركة رائدة فى مجال تقنية المعلومات،<br />
                        نساهم فى تحسين جودة الحياة من خلال<br />
                        تقديم حلول نوعية فى الاعمال والتقنية.
                    </h2>

                    {/* Partner Logos */}
                    <div className="mt-12 flex flex-col gap-6 w-full">
                        {/* Example Logos (Placeholders based on screenshot) */}
                        <div className="flex items-center justify-end gap-4 opacity-80 hover:opacity-100 transition-opacity">
                            <span className="text-right text-sm text-gray-400">تداول - السوق المالية السعودية<br />شركة مدرجة</span>
                            <div className="w-12 h-12 bg-white/10 rounded-full"></div> {/* Logo Placeholder */}
                        </div>

                        <div className="flex items-center justify-end gap-4 opacity-80 hover:opacity-100 transition-opacity">
                            <span className="text-right text-sm text-gray-400">Great Place to Work®<br />شهادة أفضل بيئة عمل</span>
                            <div className="w-12 h-12 bg-red-600/20 rounded-sm"></div> {/* Logo Placeholder */}
                        </div>

                        <div className="flex items-center justify-end gap-4 opacity-80 hover:opacity-100 transition-opacity">
                            <span className="text-right text-sm text-gray-400">البلاتيني<br />مزود خدمة معتمد</span>
                            <div className="w-12 h-12 bg-gray-400/20 rounded-full"></div> {/* Logo Placeholder */}
                        </div>
                    </div>
                </div>

                {/* VISUAL LEFT (Stats Card) */}
                <div className="order-2 lg:order-2 w-full lg:max-w-md bg-[#2E0B45]/40 backdrop-blur-md border border-white/10 rounded-none p-0 overflow-hidden">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className={`
                        p-10 flex flex-col items-center justify-center text-center
                        ${index !== STATS.length - 1 ? 'border-b border-white/10' : ''}
                        hover:bg-white/5 transition-colors duration-300
                    `}
                        >
                            <div className="text-5xl md:text-6xl font-bold text-white font-rubik mb-2 dir-ltr">
                                {/* Force LTR for numbers like 2.1+ so the plus stays on right? No, standard is Right to Left reading. 
                             Design: "+2.1 مليار" 
                          */}
                                {stat.suffix.includes('مليار') ? '2.1 +' : stat.value + ' +'}
                                <span className="text-4xl mr-2">{stat.suffix.replace(stat.value.toString(), '').replace('+', '').trim()}</span>
                            </div>
                            {/* 
                        Correction: Design says "+2.1 مليار". 
                        Let's just hardcode the display string for safety or use correct RTL formatting.
                     */}
                            <div className="text-white text-5xl md:text-6xl font-bold mb-4">
                                {stat.value}{stat.suffix.includes('مليار') ? '' : '+'}
                                <span className="text-3xl md:text-4xl font-normal ml-2">
                                    {stat.suffix.replace('+', '')}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm md:text-base font-light">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CompanyOverview;
