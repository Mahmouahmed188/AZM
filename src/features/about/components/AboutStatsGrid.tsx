"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { useHoverEffect } from "@/shared/hooks/useHoverEffect";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";

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
  const { t } = useTranslation();
  const { dir } = useDirection();

  const statsData = [
    {
      value: t("about.stats.foundingYear.value"),
      label: t("about.stats.foundingYear.label"),
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    { value: "", label: "", bg: "/about/Pattern.png", isEmpty: true },
    {
      value: t("about.stats.classification.value"),
      label: t("about.stats.classification.label"),
      bg: "/about/bgPattern.png",
    },
    {
      value: t("about.stats.teamSize.value"),
      label: t("about.stats.teamSize.label"),
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: t("about.stats.offices.value"),
      label: t("about.stats.offices.label"),
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    { value: "", label: "", bg: "/about/Pattern1.png", isEmpty: true },
    { value: "", label: "", bg: "/about/Pattern2.png", isEmpty: true },
    {
      value: t("about.stats.localContent.value"),
      label: t("about.stats.localContent.label"),
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: t("about.stats.saudization.value"),
      label: t("about.stats.saudization.label"),
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: t("about.stats.nationalities.value"),
      label: t("about.stats.nationalities.label"),
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: t("about.stats.sectors.value"),
      label: t("about.stats.sectors.label"),
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
    {
      value: t("about.stats.femaleEmployees.value"),
      label: t("about.stats.femaleEmployees.label"),
      bg: "/about/bgPattern.png",
      isLarge: true,
    },
  ];

  return (
    <section className="w-full py-" aria-label="Digital Overview" dir={dir}>
      <div className="mx-auto w-full max-w-[1280px] px-6">
<h1 className="text-white font-bold text-4xl md:text-5xl mb-12 tracking-tight">
          {t("about.title")}
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
