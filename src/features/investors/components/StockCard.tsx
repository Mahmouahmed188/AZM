'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface StockCardProps {
  price: string;
  change: string;
  date: string;
}

export function StockCard({ price, change, date }: StockCardProps) {
  const { t } = useTranslation('investors');
  const isPositive = change.startsWith('+') || !change.startsWith('-');

  return (
    <div className="w-full lg:w-400">
      {/* Date */}
      <div className="flex items-center justify-between text-xs mb-2">
        <span>{t(`stockInfo.date`, { date })}</span>
        <i className="ti ti-calendar text-sm"></i>
      </div>
      
      {/* Stock Price Label */}
      <div className="text-white text-sm mb-3">
        {t('stockInfo.stockPrice')}
      </div>
      
      {/* Price Display */}
      <div className="flex items-end justify-end gap-2 mb-1">
        <span className="text-white text-3xl font-bold">{price}</span>
        <span className="text-white text-xl mb-1">{t('stockInfo.saudiRiyal')}</span>
      </div>
      
      {/* Change Indicator */}
      <div className={`flex items-center justify-end gap-1`}>
        <span className={`${isPositive ? 'text-green-500' : 'text-red-500'} text-sm font-medium`}>
          {change}
        </span>
        <i className={`ti ti-arrow-${isPositive ? 'up' : 'down'} text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}></i>
      </div>
    </div>
  );
}