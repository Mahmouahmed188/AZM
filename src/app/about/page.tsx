import React from "react";
import AboutStatsGrid from "@/features/about/components/AboutStatsGrid";
import BoardMembersSection from "@/features/about/components/BoardMembersSection";

export default function AboutPage() {
  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: 'url("/aboutBg.png")',
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Page content */}
      <div className="relative pt-28 pb-24">
        <AboutStatsGrid />
        <BoardMembersSection />
      </div>
    </div>
  );
}
