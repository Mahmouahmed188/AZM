'use client';

import React from 'react';

interface StockChartProps {
  className?: string;
}

export function StockChart({ className = '' }: StockChartProps) {
  return (
    <div className={`relative bg-[#0a0a1a] rounded-xl p-5 h-44 ${className}`}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 360 140" 
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path 
          d="M 0 100 Q 60 90 120 85 T 240 70 T 360 40 L 360 140 L 0 140 Z" 
          fill="url(#chartGradient)"
        />
        <path 
          d="M 0 100 Q 60 90 120 85 T 240 70 T 360 40" 
          stroke="#a855f7" 
          strokeWidth="2" 
          fill="none"
        />
      </svg>
      
      {/* Chart Labels */}
      <div className="flex justify-between text-xs mt-2 relative z-10">
        <span>يونيو</span>
        <span>مايو</span>
        <span>ابريل</span>
        <span>فبراير</span>
        <span>يناير</span>
        <span>مارس</span>
      </div>
    </div>
  );
}