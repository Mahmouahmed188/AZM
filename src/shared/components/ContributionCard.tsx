import React from "react";
import { useHoverEffect } from "@/shared/hooks/useHoverEffect";

interface ContributionCardProps {
  number: string;
  titleKey: string;
  descriptionKey: string;
  t: (key: string, fallback?: string) => string;
  index: number;
  dir: string;
  isFirstCard: boolean;
  isSecondCard: boolean;
}

export const ContributionCard: React.FC<ContributionCardProps> = ({
  number,
  titleKey,
  descriptionKey,
  t,
  index,
  dir,
  isFirstCard,
  isSecondCard,
}) => {
  const { handleMouseMove, handleMouseEnter, handleMouseLeave, hoverStyle } = useHoverEffect();

  return (
    <div
      className={`flex items-center gap-1 justify-start w-full${
        isFirstCard
          ? dir === "rtl"
            ? " md:ps-24 lg:ps-48"
            : " md:pe-24 lg:pe-48"
          : ""
      }${
        isSecondCard
          ? dir === "rtl"
            ? " md:ps-48 lg:ps-96"
            : " md:pe-48 lg:pe-96"
          : ""
      }`}
    >
      {/* Large Number */}
      <div
        className="font-bold leading-none text-[#733088] select-none shrink-0"
        style={{
          fontSize: "clamp(80px, 10vw, 140px)",
          textShadow: "0 4px 20px rgba(115, 48, 136, 0.5)",
        }}
      >
        {number}
      </div>

      {/* Card */}
      <div
        className="
          relative overflow-hidden rounded-xl border border-white/5 p-8 md:p-10
          w-full max-w-[600px] max-w-3xl transition-all duration-500 hover:border-purple-500/30
          hover:translate-x-2
        "
        style={{
          backgroundImage:
            'url("/services/Background.png"), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(248, 224, 255, 0.0256) 0%, rgba(248, 224, 255, 0.0064) 77.08%, rgba(255, 255, 255, 0) 100%)',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
          style={hoverStyle}
        />
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-start">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-normal">
            {t(titleKey)}
          </h3>
          <p className="text-gray-400 md:text-lg">
            {t(descriptionKey)}
          </p>
        </div>

        {/* Subtle Grid / Noise Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
    </div>
  );
};