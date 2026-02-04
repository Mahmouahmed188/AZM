"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StockChart } from "@/features/investors/components/StockChart";
import { InvestorTabs } from "@/features/investors/components/InvestorTabs";
import { useDirection } from "@/shared/hooks/useDirection";

export default function InvestorsPage() {
  const { t, i18n } = useTranslation();
  const { dir, mounted } = useDirection();
  const isRtl = dir === "rtl";
  const [activeTab, setActiveTab] = useState("informationBulletin");

  if (!mounted) {
    return null;
  }

  const chartLabels = [
    t("investors.chartLabels.june"),
    t("investors.chartLabels.may"),
    t("investors.chartLabels.april"),
    t("investors.chartLabels.march"),
    t("investors.chartLabels.february"),
    t("investors.chartLabels.january"),
  ];

  const marketRows = [
    {
      label: t("investors.marketData.currency"),
      value: t("investors.marketData.saudiRiyal"),
    },
    { label: t("investors.marketData.tradedShares"), value: "37352.0" },
    { label: t("investors.marketData.issuedShares"), value: "60.000" },
    { label: t("investors.marketData.marketValue"), value: "1,414.20" },
    { label: t("investors.marketData.previousClosingPrice"), value: "23.53" },
    {
      label: t("investors.marketData.priceChangePercentage"),
      value: "0.17%",
      highlight: true,
    },
  ];

  const indicatorRows = [
    { label: t("investors.financialIndicators.netIncome"), value: "42.29" },
    {
      label: t("investors.financialIndicators.priceToEarnings"),
      value: "33.44",
    },
    {
      label: t("investors.financialIndicators.yearStartPrice"),
      value: "23.82",
    },
    { label: t("investors.financialIndicators.yearAgoPrice"), value: "23.53" },
    {
      label: t("investors.financialIndicators.tradedSharesValue"),
      value: "882114.06",
    },
    {
      label: t("investors.financialIndicators.tradedSharesQuantity"),
      value: "37352.0",
    },
  ];

  const documentCards = [
    {
      tag: t("investors.documents.tags.statements2023"),
      title: t("investors.documents.titles.statementsPeriod2023"),
    },
    {
      tag: t("investors.documents.tags.statements2023"),
      title: t("investors.documents.titles.statementsSemi2023"),
    },
    {
      tag: t("investors.documents.tags.statements2023"),
      title: t("investors.documents.titles.statementsQ32023"),
    },
    {
      tag: t("investors.documents.tags.annual2024"),
      title: t("investors.documents.titles.annual2024"),
    },
    {
      tag: t("investors.documents.tags.annual2024"),
      title: t("investors.documents.titles.annual2024"),
    },
    {
      tag: t("investors.documents.tags.annual2024"),
      title: t("investors.documents.titles.annual2024"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c16]" dir={dir} lang={i18n.language}>
      <div className="relative overflow-hidden">
        <img
          src="/InvestorsBg.png"
          alt=""
          className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover object-left-top"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-16 pt-16 lg:pt-24">
          <h1 className={`text-3xl font-bold text-white sm:text-4xl `}>
            {t("investors.title")}
          </h1>

          <div className="mt-8 rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className={`flex flex-col gap-8 lg:flex-row-reverse `}>
              <div className="w-full lg:w-[420px] min-h-[244px] rounded-l-[16px] border border-white/10 bg-[#0b0f1d]/80 p-5">
                <div
                  className={`mt-4 grid grid-cols-[1fr_140px] gap-4 h-full ${isRtl ? "text-end" : "text-start"}`}
                  dir="ltr"
                >
                  <StockChart labels={chartLabels} />
                  <div
                    className={`flex flex-col justify-center ${isRtl ? "items-end" : "items-start"}`}
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    <div
                      className={`flex items-center gap-2 text-[11px] text-white/70 ${isRtl ? "justify-end" : "justify-start"}`}
                    >
                      <i className="ti ti-calendar text-sm" />
                      <span>{t("investors.stockInfo.date")}</span>
                    </div>
                    <span className="text-xs text-white/60">
                      {t("investors.stockInfo.stockPrice")}
                    </span>
                    <div className="mt-2 flex items-end gap-2">
                      <span className="text-3xl font-semibold text-white">
                        23.63
                      </span>
                      <span className="text-sm text-white/80">
                        {t("investors.stockInfo.saudiRiyal")}
                      </span>
                    </div>
                    <div
                      className={`mt-1 flex items-center gap-2 text-xs font-semibold text-emerald-400 `}
                    >
                      <i className="ti ti-arrow-up" />
                      <span>0.16%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p
                  className={`text-xl font-semibold leading-relaxed text-white sm:text-2xl`}
                >
                  {t("investors.subtitle")}
                </p>

                <div
                  className={`mt-4 flex items-center gap-2 text-sm text-[#b47bff] `}
                >
                  <span>{t("investors.listingDoc")}</span>
                  <i className={`ti ti-arrow-left  text-base`} />
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div
                    className={`flex flex-wrap items-center gap-6 text-xs text-white/70  divide-x divide-white/10`}
                  >
                    <div className="flex items-center gap-2 px-2">
                      <i className="ti ti-phone text-base text-white/70" />
                      <span>{t("investors.phone")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-2">
                      <i className="ti ti-mail text-base text-white/70" />
                      <span>{t("investors.email")}</span>
                    </div>
                    <div className="px-2">
                      {t("investors.contactInvestorRelations")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <InvestorTabs activeTab={activeTab} onTabChange={setActiveTab} />
            {activeTab === "stockInformation" ? (
              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <div className="flex items-center justify-between rounded-full bg-[#8f40de] px-5 py-3 text-xs text-white">
                    <span>{t("investors.marketData.title")}</span>
                    <span className="flex items-center gap-2">
                      <i className="ti ti-calendar text-sm" />
                      {t("investors.marketData.date")}
                    </span>
                  </div>
                  <div className="mt-6 space-y-2 text-sm">
                    {marketRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between text-white/70"
                      >
                        <span>{row.label}</span>
                        <span
                          className={
                            row.highlight ? "text-emerald-400" : "text-white"
                          }
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between rounded-full bg-[#8f40de] px-5 py-3 text-xs text-white">
                    <span>{t("investors.financialIndicators.title")}</span>
                    <span className="flex items-center gap-2">
                      <i className="ti ti-calendar text-sm" />
                      {t("investors.financialIndicators.date")}
                    </span>
                  </div>
                  <div className="mt-6 space-y-2 text-sm">
                    {indicatorRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between text-white/70"
                      >
                        <span>{row.label}</span>
                        <span className="text-white">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {documentCards.map((card, index) => (
                    <div
                      key={`${card.title}-${index}`}
                      className="rounded-[14px] border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <div
                        className={`text-[11px] text-[#b47bff] ${isRtl ? "text-end" : "text-start"}`}
                      >
                        {card.tag}
                      </div>
                      <div
                        className={`mt-2 text-sm text-white/90 ${isRtl ? "text-end" : "text-start"}`}
                      >
                        {card.title}
                      </div>
                      <div
                        className={`mt-6 flex items-center gap-2 text-xs text-white/60 ${isRtl ? "justify-end" : "justify-start"}`}
                      >
                        <i className="ti ti-download text-sm" />
                        <span>{t("investors.documents.download")}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 text-sm text-white/70">
                  <div className="text-base font-semibold text-white">
                    {t("investors.documents.sideTitle")}
                  </div>
                  <div>
                    {t("investors.documents.sideItems.financialStatements")}
                  </div>
                  <div>{t("investors.documents.sideItems.annualReports")}</div>
                  <div>
                    {t("investors.documents.sideItems.corporateGovernance")}
                  </div>
                  <div>
                    {t("investors.documents.sideItems.profitDistribution")}
                  </div>
                  <div>
                    {t("investors.documents.sideItems.companyAnnouncements")}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
