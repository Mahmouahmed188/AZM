'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface InvestorTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function InvestorTabs({ activeTab, onTabChange }: InvestorTabsProps) {
  const { t } = useTranslation();

  const tabs = [
    { key: 'informationBulletin', label: t('investors.tabs.informationBulletin') },
    { key: 'financialClaims', label: t('investors.tabs.financialClaims') },
    { key: 'corporateGovernance', label: t('investors.tabs.corporateGovernance') },
    { key: 'stockInformation', label: t('investors.tabs.stockInformation') },
    { key: 'profitDistribution', label: t('investors.tabs.profitDistribution') },
    { key: 'companyAnnouncements', label: t('investors.tabs.companyAnnouncements') },
  ];

  return (
    <div className="flex gap-8 border-b border-white/10 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onTabChange(tab.key)}
          className={`relative whitespace-nowrap pb-4 text-sm transition-colors ${
            activeTab === tab.key
              ? 'text-white'
              : 'text-white/50 hover:text-white'
          }`}
        >
          {tab.label}
          {activeTab === tab.key && (
            <span className="absolute bottom-[-1px] right-0 left-0 h-[2px] bg-[#9b5cff]" />
          )}
        </button>
      ))}
    </div>
  );
}
