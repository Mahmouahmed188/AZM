"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";
import { Building2, Cpu, Code2, MonitorCog } from "lucide-react";
import { ServiceCard } from "@/shared/components/ServiceCard";
import { ContributionCard } from "@/shared/components/ContributionCard";

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
            <ServiceCard
              key={index}
              icon={service.icon}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
              t={(key, fallback) => t(key, fallback || "")}
            />
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
                <ContributionCard
                  key={index}
                  number={item.number}
                  titleKey={item.titleKey}
                  descriptionKey={item.descriptionKey}
                  t={(key, fallback) => t(key, fallback || "")}
                  index={index}
                  dir={dir}
                  isFirstCard={isFirstCard}
                  isSecondCard={isSecondCard}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
