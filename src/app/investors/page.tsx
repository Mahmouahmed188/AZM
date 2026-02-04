 'use client';
 
 import React from 'react';
import { useTranslation } from 'react-i18next';
import { StockChart } from '@/features/investors/components/StockChart';
import { InvestorTabs } from '@/features/investors/components/InvestorTabs';
 
 export default function InvestorsPage() {
     const { t } = useTranslation('investors');
 
     return (
         <div 
             className="min-h-screen bg-[#0b0d16]"
             style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
         >
             <div className="relative overflow-hidden">
                 <img
                     src="/InvestorsBg.png"
                     alt=""
                     className="pointer-events-none select-none absolute top-0 start-0 w-[55vw] max-w-[900px] h-auto opacity-100"
                 />
                 <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
                     <div className="text-end mb-14">
                         <h1 className="text-white text-5xl font-bold leading-tight sm:text-4xl">
                             {t('title')}
                         </h1>
                     </div>
                     <div className="relative w-full max-w-[1216px] rounded-[24px] overflow-hidden">
                       {/* Decorative Blob */}
                       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4318D1] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>
                       
                       <div className="relative z-10 p-8 sm:p-12 flex flex-col lg:flex-row items-start justify-between gap-12">
                            {/* Text Info Section */}
                            <div className="flex-1 text-end order-2 lg:order-1">
                                <div className="text-white text-3xl font-semibold leading-relaxed mb-4">
                                    {t('subtitle')}
                                </div>
                                <div className="flex items-center justify-end gap-2 text-white text-base mb-6">
                                    <i className="ti ti-file-text text-xl"></i>
                                    <span>{t('listingDoc')}</span>
                                </div>
                                <div className="flex flex-wrap items-center justify-end gap-8 text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <span className="text-base">966-112884141</span>
                                        <i className="ti ti-phone text-xl"></i>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-base">info@azm.sa</span>
                                        <i className="ti ti-mail text-xl"></i>
                                    </div>
                                    <div className="text-base">{t('contactInvestorRelations')}</div>
                                </div>
                            </div>

                            {/* Stock Card Section */}
                            <div className="w-full lg:w-[480px] shrink-0 order-1 lg:order-2">
                                <div className="bg-gradient-to-br from-[#1a1a2e]/40 to-[#0f0f1e]/40 backdrop-blur-md rounded-2xl border border-white p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2 text-white">
                                            <i className="ti ti-calendar text-xl"></i>
                                            <span className="text-sm">{t('stockInfo.date')}</span>
                                        </div>
                                    </div>
                                    <div className="mb-8 text-end">
                                        <div className="text-gray-400 text-sm mb-2">{t('stockInfo.stockPrice')}</div>
                                        <div className="flex items-end justify-end gap-3 mb-2">
                                            <span className="text-white text-4xl font-bold leading-none">23.63</span>
                                            <span className="text-white text-xl mb-1">{t('stockInfo.saudiRiyal')}</span>
                                        </div>
                                        <div className="flex items-center justify-end gap-2">
                                            <i className="ti ti-arrow-up text-emerald-500 text-base"></i>
                                            <span className="text-emerald-500 text-base font-semibold">0.16%</span>
                                        </div>
                                    </div>
                                    <div className="relative h-[200px]">
                                        <StockChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
 
             <div className="max-w-7xl mx-auto px-6">
                 <InvestorTabs />
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-24">
                     <div className="rounded-2xl border border-white/10 bg-[#111325]/60 p-6">
                         <div className="flex items-center justify-between mb-4">
                             <div className="text-purple-400 text-sm font-semibold">
                                 {t('marketData.title')}
                             </div>
                             <div className="text-gray-300 text-xs">
                                 {t('marketData.date')}
                             </div>
                         </div>
                         <div className="space-y-3 text-end">
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('marketData.currency')}</span>
                                 <span className="text-white">{t('marketData.saudiRiyal')}</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('marketData.tradedShares')}</span>
                                 <span className="text-white">37352.0</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('marketData.issuedShares')}</span>
                                 <span className="text-white">60.000</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('marketData.marketValue')}</span>
                                 <span className="text-white">1,414.20</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('marketData.previousClosingPrice')}</span>
                                 <span className="text-white">23.53</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('marketData.priceChangePercentage')}</span>
                                 <span className="text-emerald-400">0.17%</span>
                             </div>
                         </div>
                     </div>
                     <div className="rounded-2xl border border-white/10 bg-[#111325]/60 p-6">
                         <div className="flex items-center justify-between mb-4">
                             <div className="text-purple-400 text-sm font-semibold">
                                 {t('financialIndicators.title')}
                             </div>
                             <div className="text-gray-300 text-xs">
                                 {t('financialIndicators.date')}
                             </div>
                         </div>
                         <div className="space-y-3 text-end">
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('financialIndicators.netIncome')}</span>
                                 <span className="text-white">42.29</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('financialIndicators.priceToEarnings')}</span>
                                 <span className="text-white">33.44</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('financialIndicators.yearStartPrice')}</span>
                                 <span className="text-white">23.82</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('financialIndicators.yearAgoPrice')}</span>
                                 <span className="text-white">23.53</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('financialIndicators.tradedSharesValue')}</span>
                                 <span className="text-white">882114.06</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-gray-300">{t('financialIndicators.tradedSharesQuantity')}</span>
                                 <span className="text-white">37352.0</span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     );
 }
