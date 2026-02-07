"use client";

import React from "react";
import { twMerge } from "tailwind-merge"; // تأكد من تنصيب tailwind-merge أو استخدم template literals
import { useHoverEffect } from "@/shared/hooks/useHoverEffect";

// --- Types ---
type StatCellProps = {
  value: string;
  label: string;
  bgImage?: string;
  className?: string;
  isLarge?: boolean;
};

// --- Sub-Component ---
function StatCell({
  value,
  label,
  bgImage,
  className,
  isLarge,
}: StatCellProps) {
  const { handleMouseMove, handleMouseEnter, handleMouseLeave, hoverStyle } =
    useHoverEffect();

  return (
    <div
      className={twMerge(
        "relative flex flex-col justify-end p-8 md:p-10 min-h-[280px] md:min-h-[320px]",
        "border-[0.5px] border-[#7278b8]/20",
        className,
      )}
      style={
        bgImage
          ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }
          : {}
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
        style={hoverStyle}
      />

      <div
        className={twMerge(
          "text-white font-bold tracking-tight leading-[1.1]",
          isLarge ? "text-[48px] md:text-[64px]" : "text-[32px] md:text-[48px]",
        )}
      >
        {value}
      </div>
      <div className="mt-4 text-white/70 text-base md:text-lg leading-relaxed max-w-[200px]">
        {label}
      </div>
    </div>
  );
}

// --- Main Component ---
export default function AboutStatsGrid() {
  const statsData = [
    {
      value: "2017",
      label: "سنة التأسيس",
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    { value: "", label: "", bg: "/about/Pattern.png", isEmpty: true },
    {
      value: "الدرجة الأولى",
      label: "تصنيف المقاييس في هيئة الاتصالات",
      bg: "/about/bgPattern.png",
    },
    {
      value: "400+",
      label: "في أقسام ومشاريع المجموعة",
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: "4 مكاتب",
      label: "تطوير برمجي خارج المملكة",
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    { value: "", label: "", bg: "/about/Pattern1.png", isEmpty: true },
    { value: "", label: "", bg: "/about/Pattern2.png", isEmpty: true },
    {
      value: "63%",
      label: "نسبة المحتوى المحلي",
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: "66%",
      label: "نسبة السعودة في النطاق البلاتيني",
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: "17 جنسية",
      label: "تنوع الكفاءات البشرية",
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: "15+",
      label: "قطاعاً رئيسياً تخدمها الشركة في المملكة",
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: "48%",
      label: "نسبة الموظفات في الشركة",
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
  ];

  return (
    <section className="w-full py-" aria-label="Digital Overview" dir="rtl">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <h1 className="text-white font-bold text-4xl md:text-5xl mb-12 tracking-tight">
          من نحن
        </h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-[0.5px] border-[#7278b8]/20 rounded-xl overflow-hidden shadow-2xl">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              {stat.isEmpty ? (
                <div
                  className="hidden lg:block relative border-[0.5px] border-[#7278b8]/20 min-h-[320px]"
                  style={{
                    backgroundImage: `url(${stat.bg})`,
                    backgroundSize: "cover",
                  }}
                />
              ) : (
                <StatCell
                  value={stat.value}
                  label={stat.label}
                  bgImage={stat.bg}
                  isLarge={stat.isLarge}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
