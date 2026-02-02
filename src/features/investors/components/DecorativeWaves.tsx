'use client';

import React from 'react';

interface DecorativeWavesProps {
  className?: string;
}

export function DecorativeWaves({ className = '' }: DecorativeWavesProps) {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1440 400" 
      preserveAspectRatio="none" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.4 }} />
          <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#c084fc', stopOpacity: 0.2 }} />
        </linearGradient>
      </defs>
      <path 
        d="M0 0 L0 300 Q360 200 720 250 T1440 200 L1440 0 Z" 
        fill="url(#purpleGradient)" 
        opacity="0.3"
      />
      <path 
        d="M0 50 L0 350 Q360 250 720 300 T1440 250 L1440 0 Z" 
        fill="url(#purpleGradient)" 
        opacity="0.2"
      />
    </svg>
  );
}