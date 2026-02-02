'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface InvestorTabsProps {
  onTabChange?: (tab: string) => void;
}

export function InvestorTabs({ onTabChange }: InvestorTabsProps) {
  const { t } = useTranslation('investors');
  const [activeTab, setActiveTab] = useState('informationBulletin');

  const tabs = [
    { key: 'informationBulletin', label: t('tabs.informationBulletin') },
    { key: 'financialClaims', label: t('tabs.financialClaims') },
    { key: 'corporateGovernance', label: t('tabs.corporateGovernance') },
    { key: 'stockInformation', label: t('tabs.stockInformation') },
    { key: 'profitDistribution', label: t('tabs.profitDistribution') },
    { key: 'companyAnnouncements', label: t('tabs.companyAnnouncements') },
  ];

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    onTabChange?.(tabKey);
  };

  return (
    <div className="flex gap-1 mb-8 border-b border-white/10 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => handleTabClick(tab.key)}
          className={`
            px-6 py-4 text-sm font-medium cursor-pointer transition-colors
            ${activeTab === tab.key
              ? 'text-white border-b-2 border-purple-500'
              : 'text-gray-400 hover:text-white'
            }
          `}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}