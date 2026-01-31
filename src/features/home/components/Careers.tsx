"use client";

import { useLayoutEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { animateCareersSection } from '@/animations/careersAnimation';
import Link from 'next/link';
import { ROUTES } from '@/shared/config/routes';

export default function CareersSection() {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!sectionRef.current || !cardRef.current) return;

        const ctx = animateCareersSection(sectionRef.current, cardRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-[125vh] bg-black">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-[0.5]"
                style={{ backgroundImage: "url('/bgCareer.png')" }}
            ></div>

            <div className="relative z-10 w-full h-screen flex items-center justify-center lg:justify-start lg:ps-[10%]">
                <div
                    ref={cardRef}
                    className="w-full max-w-[592px] min-h-[444px] bg-[#012D74] p-6 sm:p-10 lg:p-[80px_40px] flex flex-col items-center lg:items-start text-center lg:text-start relative rounded-sm shadow-2xl border border-white/5"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 w-full">
                        <span className="text-[#E9A4FF] font-medium text-base lg:text-xl">{t('careers.subtitle', 'اكتشف فرص العمل في عزم')}</span>
                        <div className="w-6 h-[1.5px] bg-[#E9A4FF] rounded-full" />
                    </div>

                    <h2 className="text-white font-medium text-xl sm:text-2xl lg:text-[30px] leading-tight mb-10 lg:mb-[60px] max-w-[512px]">
                        {t('careers.description', 'كن شريكًا في إحداث تغيير إيجابي في حياة الناس من خلال حلول تجارية وتقنية مبتكرة تُحدث فرقًا حقيقيًا.')}
                    </h2>

                    <Link href={ROUTES.CAREERS} className="join-button group relative inline-flex px-6 py-4 items-center gap-2 bg-transparent border border-[#A733CC]/60 rounded-sm text-white font-medium text-lg cursor-pointer transition-all duration-300 overflow-hidden hover:border-transparent hover:scale-105 self-center lg:self-start">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#A733CC] to-[#E9A4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 17V7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H9.41406L17.707 16.293C18.0976 16.6835 18.0976 17.3165 17.707 17.707C17.3165 18.0976 16.6835 18.0976 16.293 17.707L8 9.41406V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17Z" fill="white"></path>
                        </svg>
                        <span>{t('careers.button', 'انضم الينا')}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
