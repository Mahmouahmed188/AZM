import React from "react";
import { useDirection } from "@/shared/hooks/useDirection";
import { useHoverEffect } from "@/shared/hooks/useHoverEffect";

interface StatItemProps {
  number: number;
  unit: string;
  label: string;
  decimals?: boolean;
}

const StatItem = ({ number, unit, label, decimals = false }: StatItemProps) => {
  const { dir, isRTL } = useDirection();
  const { handleMouseMove, handleMouseEnter, handleMouseLeave, hoverStyle } =
    useHoverEffect();

  return (
    <div
      className="relative group w-full max-w-[488px] mx-auto stat-item-container overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      dir={dir}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
        style={hoverStyle}
      />

      <div className="relative flex flex-col items-start justify-center h-[168px] px-8 lg:px-12 lg:py-9">
        <div className="flex flex-row items-baseline gap-1 z-10">
          <div className="flex flex-row items-baseline">
            <span className="text-3xl lg:text-[48px] leading-[60px] font-normal text-white tracking-tighter stat-plus">
              +
            </span>
            <span
              className="text-3xl lg:text-[48px] leading-[60px] font-normal text-white tracking-tighter stat-value"
              data-target={number}
              data-decimals={decimals ? 1 : 0}
            >
              0
            </span>
          </div>
          <span className="text-3xl lg:text-[48px] leading-[60px] font-normal text-white ms-2 stat-unit">
            {unit}
          </span>
        </div>

        <p className="mt-3 text-sm leading-5 text-white/50 font-normal z-10 max-w-full stat-label">
          {label}
        </p>

        <div className="hidden lg:block absolute inset-y-0 left-0 w-[1.9px] bg-[#7278B84A] side-line-left"></div>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[1.5px] bg-[#7278B84A] side-line-right"></div>
      </div>

      <div className="relative w-full">
        <div
          className="h-[1.9px] bg-[#7278B84A] bottom-line"
          style={{ transformOrigin: isRTL ? "left" : "right" }}
        ></div>
      </div>
    </div>
  );
};

export default StatItem;
