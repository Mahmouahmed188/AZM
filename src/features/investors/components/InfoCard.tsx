'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface InfoCardProps {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
  highlighted?: boolean;
  date?: string;
}

export function InfoCard({ title, items, highlighted = false, date }: InfoCardProps) {

  return (
    <div 
      className={`
        p-8 rounded-xl border
        ${highlighted 
          ? 'bg-gradient-to-br from-purple-500/20 to-purple-400/10 backdrop-blur-md border-purple-500' 
          : 'bg-gradient-to-br from-[#1e1e3f]/60 to-[#0f0f1e]/60 backdrop-blur-md border-white/10'
        }
      `}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        {date && (
          <div className="flex items-center gap-2 text-xs">
            <span>{date}</span>
            <i className="ti ti-calendar text-sm"></i>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-1">
            <span className="text-sm">{item.label}</span>
            <span className="text-white text-base font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}