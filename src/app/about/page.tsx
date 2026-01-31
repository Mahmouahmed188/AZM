import React from "react";
import AboutStatsGrid from "@/features/about/components/AboutStatsGrid";
import BoardMembersSection from "@/features/about/components/BoardMembersSection";

export default function AboutPage() {
  return (
    <div className="relative w-full bg-azm-dark">
      {/* Background glows matching the screenshot */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-105 w-105 rounded-full bg-[#6B2CFF]/14 blur-[120px]" />
        <div className="absolute top-[18%] -left-44 h-130 w-130 rounded-full bg-[#A733CC]/12 blur-[140px]" />
        <div className="absolute -bottom-44 -right-44 h-130 w-130 rounded-full bg-[#6B2CFF]/10 blur-[160px]" />
      </div>

      {/* Page content */}
      <div className="relative pt-28 pb-24">
        <AboutStatsGrid />
        <BoardMembersSection />
      </div>
    </div>
  );
}
