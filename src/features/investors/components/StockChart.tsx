"use client";

import React from "react";

interface StockChartProps {
  className?: string;
  labels: string[];
}

export function StockChart({ className = "", labels }: StockChartProps) {
  return (
    <div className={`relative  ${className}`}>
      <svg
        viewBox="0 0 416 120"
        className="absolute inset-0 h-[70%] w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#8B5CF6", stopOpacity: 0.35 }}
            />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#8B5CF6", stopOpacity: 0.3 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#8B5CF6", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M 0 24 L 26 26 L 52 29 L 78 30 L 104 36 L 130 40 L 156 44 L 182 48 L 208 52 L 234 58 L 260 64 L 286 72 L 312 82 L 338 92 L 364 104 L 392 112 L 416 118"
          stroke="url(#lineGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 0 24 L 26 26 L 52 29 L 78 30 L 104 36 L 130 40 L 156 44 L 182 48 L 208 52 L 234 58 L 260 64 L 286 72 L 312 82 L 338 92 L 364 104 L 392 112 L 416 118 L 416 120 L 0 120 Z"
          fill="url(#areaGradient)"
        />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[11px] text-white/50">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
