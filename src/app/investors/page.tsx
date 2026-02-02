'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { DecorativeWaves } from '@/features/investors/components/DecorativeWaves';
import { StockCard } from '@/features/investors/components/StockCard';
import { StockChart } from '@/features/investors/components/StockChart';
import { InvestorTabs } from '@/features/investors/components/InvestorTabs';
import { InfoCard } from '@/features/investors/components/InfoCard';

export default function InvestorsPage() {
    const { t } = useTranslation('investors');

    const marketData = [
        { label: t('marketData.currency'), value: t('marketData.saudiRiyal') },
        { label: t('marketData.tradedShares'), value: '37352.0' },
        { label: t('marketData.issuedShares'), value: '60.000' },
        { label: t('marketData.marketValue'), value: '1,414.20' },
        { label: t('marketData.previousClosingPrice'), value: '23.53' },
        { label: t('marketData.priceChangePercentage'), value: '0.17%' },
    ];

    const financialIndicators = [
        { label: t('financialIndicators.netIncome'), value: '42.29' },
        { label: t('financialIndicators.priceToEarnings'), value: '33.44' },
        { label: t('financialIndicators.yearStartPrice'), value: '23.82' },
        { label: t('financialIndicators.yearAgoPrice'), value: '23.53' },
        { label: t('financialIndicators.tradedSharesValue'), value: '882114.06' },
        { label: t('financialIndicators.tradedSharesQuantity'), value: '37352.0' },
    ];

    return (
        <div 
            className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#0a0a1a]"
            style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
        >
            {/* Header Section */}
            <div className="relative">
                <div className="absolute top-0 start-0 w-full h-96 sm:h-72">
                    <DecorativeWaves />
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-10">
                    {/* Title */}
                    <div className="text-end mb-16 sm:mb-10">
                        <h1 className="text-white text-5xl font-bold leading-tight sm:text-4xl">
                            {t('title')}
                        </h1>
                    </div>

                    {/* Main Content Card */}
                    <div className="bg-gradient-to-br from-[#1e1e3f]/80 to-[#0f0f1e]/80 backdrop-blur-md rounded-3xl border border-white/10 p-10 mb-10 sm:p-6">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Left Content */}
                            <div className="flex-1">
                                <div className="text-end mb-8">
                                    <div className="text-white text-2xl font-semibold leading-relaxed mb-4 sm:text-xl">
                                        {t('subtitle')}
                                    </div>
                                    <div className="flex items-center justify-end gap-2">
                                        <span className="text-purple-400 text-sm">
                                            {t('listingDoc')}
                                        </span>
                                        <i className="ti ti-arrow-back-up text-purple-400 text-base"></i>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="flex items-center justify-end gap-6 text-sm sm:flex-col sm:items-end sm:gap-3">
                                    <div className="flex items-center gap-2">
                                        <span>{t('email')}</span>
                                        <i className="ti ti-mail text-base"></i>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>{t('phone')}</span>
                                        <i className="ti ti-phone text-base"></i>
                                    </div>
                                    <div>{t('contactInvestorRelations')}</div>
                                </div>
                            </div>

                            {/* Right Content - Stock Info */}
                            <div className="w-full lg:w-96">
                                <StockCard 
                                    price="23.63"
                                    change="0.16%"
                                    date={t('stockInfo.date')}
                                />
                                <div className="mt-4">
                                    <StockChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6">
                {/* Tabs */}
                <InvestorTabs />

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                    <InfoCard 
                        title={t('marketData.title')}
                        date={t('marketData.date')}
                        items={marketData}
                    />
                    <InfoCard 
                        title={t('financialIndicators.title')}
                        date={t('financialIndicators.date')}
                        items={financialIndicators}
                        highlighted={true}
                    />
                </div>
            </div>
        </div>
    );
}
