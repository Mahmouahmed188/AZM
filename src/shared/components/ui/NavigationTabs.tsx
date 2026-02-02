"use client";

import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
}

interface NavigationTabsProps {
  tabs: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  onTabChange,
  className = ""
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || "");
  
  const activeTab = controlledActiveTab || internalActiveTab;

  const handleTabClick = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalActiveTab(tabId);
    }
  };

  return (
    <div 
      className={`w-full h-22 flex items-center justify-center border-b border-white/10 ${className}`}
      dir="rtl"
    >
      <div className="max-w-7xl w-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-12 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`whitespace-nowrap transition-all duration-300 ease-out ${
                activeTab === tab.id
                  ? "text-white text-[18px] font-[700]"
                  : "text-white/70 text-[16px] font-[500] hover:text-white hover:text-[17px]"
              }`}
              style={{
                fontFamily: 'Tajawal, sans-serif'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;