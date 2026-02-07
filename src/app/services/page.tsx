"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";
import { Building2, Cpu, Code2, MonitorCog } from "lucide-react";
import { useHoverEffect } from "@/shared/hooks/useHoverEffect";

// Services Data with translation keys
const services = [
  {
    titleKey: "services.technical.title",
    descriptionKey: "services.technical.description",
    icon: Building2,
  },
  {
    titleKey: "services.consulting.title",
    descriptionKey: "services.consulting.description",
    icon: Cpu,
  },
  {
    titleKey: "services.development.title",
    descriptionKey: "services.development.description",
    icon: MonitorCog,
  },
  {
    titleKey: "services.platforms.title",
    descriptionKey: "services.platforms.description",
    icon: Code2,
  },
];

const contributions = [
  {
    number: "1",
    titleKey: "contributions.professional.title",
    descriptionKey: "contributions.professional.description",
  },
  {
    number: "2",
    titleKey: "contributions.community.title",
    descriptionKey: "contributions.community.description",
  },
  {
    number: "3",
    titleKey: "contributions.initiatives.title",
    descriptionKey: "contributions.initiatives.description",
  },
];

export default function ServicesPage() {
  const { t } = useTranslation();
  const { dir, mounted } = useDirection();
  const { handleMouseMove, handleMouseEnter, handleMouseLeave, hoverStyle } =
    useHoverEffect();

  if (!mounted) {
    return null;
  }

  return (
    <main
      dir={dir}
      className="relative min-h-screen w-full text-white font-tajawal overflow-hidden pb-20 "
      style={{
        backgroundImage: 'url("/servicesBg.png")',
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Services Header */}
      <section className="relative z-10 pt-24 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("services.title", "خدماتنا")}
          </h1>
          <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
            {t(
              "services.subtitle",
              "لترسيخ نهج منظم نحو تحقيق أولوياتنا الإستراتيجية، حيث تمت إعادة تصنيف تدفقات الإيرادات لدينا إلى خطوط أعمال تمثل نشاطات الشركة، على النحو التالي:",
            )}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto mb-32">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          dir={dir}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[340px] w-full overflow-hidden rounded-xl border border-white/5 bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(248,224,255,0.0256)_0%,rgba(248,224,255,0.0064)_77.08%,rgba(255,255,255,0)_100%)] p-8 backdrop-blur-[40px] transition-all duration-300 hover:border-purple-500/30"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
                style={hoverStyle}
              />
              {/* Internal Gradient Mask/Highlight */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Grid Pattern Overlay */}
              <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, rgba(167, 51, 204, 0.5) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-[#E38CFF] shadow-[0_0_20px_rgba(227,140,255,0.2)]">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-4 text-[30px] font-medium leading-[36px] text-white">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-[18px] font-normal leading-[24px] text-white/80 line-clamp-3">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contributions Section */}
      <section className="relative z-10 bg-[#000913] py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          {/* Header Area */}
          <div className="w-full mb-16 relative z-20">
            <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              {t("contributions.title", "مساهماتنا في المجتمع")}
            </h2>
            <div className="max-w-[600px] max-w-3xl ms-auto">
              <div className="w-44 h-1 bg-[#733088] mb-8 rounded-full md:ms-0"></div>
              <p className="text-gray-300 text-lg md:text-xl leading-loose">
                {t(
                  "contributions.description",
                  "تحرص عزم السعودية على أداء مسؤولياتها الاجتماعية عبر رؤية صحيحة، وإدراكاً تسعى الشركة إلى تأسيس علاقات مستدامة مع المجتمعات التي تعمل فيها، وتحرص على ضمان أن برامج المسؤولية الاجتماعية الرائدة التي تقدمها تنتج منافع اقتصادية واجتماعية ملموسة وإيجابية.",
                )}
              </p>
            </div>
          </div>

          {/* Staggered Cards Container */}
          <div className="flex flex-col gap-6 w-full relative z-10">
            {contributions.map((item, index) => {
              const isFirstCard = index === 1;
              const isSecondCard = index === 2;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-1 justify-start w-full${
                    isFirstCard
                      ? dir === "rtl"
                        ? " md:ps-24 lg:ps-48"
                        : " md:pe-24 lg:pe-48"
                      : ""
                  }${
                    isSecondCard
                      ? dir === "rtl"
                        ? " md:ps-48 lg:ps-96"
                        : " md:pe-48 lg:pe-96"
                      : ""
                  }`}
                >
                  {/* Large Number */}
                  <div
                    className="font-bold leading-none text-[#733088] select-none shrink-0"
                    style={{
                      fontSize: "clamp(80px, 10vw, 140px)",
                      textShadow: "0 4px 20px rgba(115, 48, 136, 0.5)",
                    }}
                  >
                    {item.number}
                  </div>

                  {/* Card */}
                  <div
                    className="
                      relative overflow-hidden rounded-xl border border-white/5 bg-[#0a1420] p-8 md:p-10
                      w-full max-w-[600px] max-w-3xl transition-all duration-500 hover:border-purple-500/30
                      hover:translate-x-2
                    "
                  >
                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-start">
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-normal">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-gray-400 md:text-lg">
                        {t(item.descriptionKey)}
                      </p>
                    </div>

                    {/* Subtle Grid / Noise Overlay */}
                    <div
                      className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
