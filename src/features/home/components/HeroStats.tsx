import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";
import StatItem from "@/shared/components/ui/StatItem";
import CertificationLogo from "@/shared/components/ui/CertificationLogo";

interface HeroStatsProps {
    descTextRef: React.RefObject<HTMLDivElement | null>;
    descLogosRef: React.RefObject<HTMLDivElement | null>;
    loadingBarRef: React.RefObject<HTMLDivElement | null>;
}

const HeroStats = forwardRef<HTMLDivElement, HeroStatsProps>(({
    descTextRef,
    descLogosRef,
    loadingBarRef
}, ref) => {
    const { t } = useTranslation();
    const { dir } = useDirection();

    return (
        <div className="relative z-20 mt-auto overflow-hidden">
            <div className="absolute inset-0 bg-azm-dark/50 backdrop-blur-xl pointer-events-none" />
            <div className="absolute top-0 end-0 h-[1.9px] bg-[#7278B84A] w-0 z-20" ref={loadingBarRef}></div>

            <div ref={ref} dir={dir}>
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
                    <div className="flex-1 p-8 lg:p-12">
                        <div ref={descTextRef} className="mb-12">
                            <h3 className="text-2xl lg:text-3xl font-normal text-white leading-tight mb-4">
                                {t('hero.description', 'شركة رائدة في مجال تقنية المعلومات، نساهم في تحسين جودة الحياة من خلال، تقديم حلول نوعية في الاعمال والتقنية.').split('،').map((part, index, array) => (
                                    <React.Fragment key={index}>
                                        {part}
                                        {index < array.length - 1 && <><br /></>}
                                    </React.Fragment>
                                ))}
                            </h3>
                        </div>

                        <div ref={descLogosRef} className="absolute space-y-6 z-20">
                            <CertificationLogo
                                src="https://api.builder.io/api/v1/image/assets/TEMP/265afc705c0e1be0776998f4ded408f48ebc99aa?width=128"
                                title={t('hero.certifications.tadawul.title', 'تداول – السوق المالية السعودية')}
                                subtitle={t('hero.certifications.tadawul.subtitle', 'شركة مدرجة')}
                            />
                            <CertificationLogo
                                src="https://api.builder.io/api/v1/image/assets/TEMP/d95a82daf2e7077172c7bb6eb88cfeec7afab48b?width=71"
                                title="Great Place to Work®"
                                subtitle={t('hero.certifications.gptw.subtitle', 'شهادة أفضل بيئة عمل')}
                            />
                            <CertificationLogo
                                src="https://api.builder.io/api/v1/image/assets/TEMP/b3cb39ab82bc50198a4b9946ab25cbc0d1745de6?width=96"
                                title={t('hero.certifications.platinum.title', 'البلاتيني')}
                                subtitle={t('hero.certifications.platinum.subtitle', 'مزود خدمة معتمد من هيئة الحكومة الرقمية')}
                            />
                        </div>
                    </div>

                    <div className="lg:w-[600px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
                        <StatItem
                            number={2.5}
                            unit={t('hero.stats.projects.unit', 'مليار')}
                            label={t('hero.stats.projects.label', 'إجمالي قيمة المشاريع خلال الأربع سنوات الأخيرة')}
                            decimals={true}
                        />
                        <StatItem
                            number={25}
                            unit={t('hero.stats.products.unit', 'منتج')}
                            label={t('hero.stats.products.label', 'منصات وحلول رقمية')}
                        />
                        <StatItem
                            number={400}
                            unit={t('hero.stats.clients.unit', 'عميل')}
                            label={t('hero.stats.clients.label', 'من القطاعين الحكومي والخاص')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

HeroStats.displayName = "HeroStats";

export default HeroStats;
