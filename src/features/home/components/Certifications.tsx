"use client";

import React, { useRef, useLayoutEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";
import Image from "next/image";
import { animateCertifications } from "@/animations/certificationsAnimation";

interface CertDataItem {
    titleKey: string; // Use translation key instead of hardcoded text
    image: string;
    year: string;
}

const Certifications = () => {
    const { t } = useTranslation();
    const { dir, isRTL } = useDirection();
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Certificate data with translation keys
    const CERT_DATA: CertDataItem[] = useMemo(() => [
        {
            titleKey: "certifications.items.ohsas.title",
            image: "/certificat/Frame 238.png",
            year: "2018"
        },
        {
            titleKey: "certifications.items.cloudPrivacy.title",
            image: "/certificat/Frame 237.png",
            year: "2019"
        },
        {
            titleKey: "certifications.items.digitalTrust.title",
            image: "/certificat/Frame 229.png",
            year: "2024"
        },
        {
            titleKey: "certifications.items.advancedLevel.title",
            image: "/certificat/Frame 231.png",
            year: "2025"
        },
        {
            titleKey: "certifications.items.platinum.title",
            image: "/certificat/Frame 232.png",
            year: "2024"
        },
        {
            titleKey: "certifications.items.digitalPartner.title",
            image: "/certificat/Frame 233.png",
            year: "2025"
        },
        {
            titleKey: "certifications.items.cmmi.title",
            image: "/certificat/Frame 234.png",
            year: "2023"
        },
        {
            titleKey: "certifications.items.cloudSecurity.title",
            image: "/certificat/Frame 235.png",
            year: "2015"
        },
        {
            titleKey: "certifications.items.businessContinuity.title",
            image: "/certificat/Frame 236.png",
            year: "2019"
        },
    ], []);

    useLayoutEffect(() => {
        if (sectionRef.current && trackRef.current) {
            const cleanup = animateCertifications(sectionRef, trackRef);
            return cleanup; // Cleanup on unmount
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[100vh] bg-[#D7E3F5] overflow-hidden flex flex-col items-center z-20"
            dir={dir}
        >
            {/* Title Section */}
            <div className="w-full max-w-[1440px] px-4 md:px-10 z-10 flex flex-col items-center">
                <h2 className="text-[#000F26] text-center font-tajawal text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mt-[10vh] mb-[11vh] max-w-4xl">
                    {t('certifications.title', 'نفخر في عزم السعودية برحلات نجاح أتممناها')}
                </h2>
            </div>

            {/* Horizontal Track Area */}
            <div className="relative w-full flex justify-end">
                <div
                    ref={trackRef}
                    className="flex gap-10 md:gap-5 px-[10vw] items-end"
                    style={{ width: "max-content", willChange: "transform" }}
                >
                    {CERT_DATA.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-card flex-shrink-0 w-[380px] h-auto bg-white rounded-2xl shadow-sm overflow-hidden"
                        >
                            <Image
                                src={cert.image}
                                alt={t(cert.titleKey)}
                                width={380}
                                height={400}
                                style={{ height: 'auto' }}
                                className="w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Side Blurs (optional from JSON) */}
            <div className="absolute top-0 right-0 h-full w-[150px] pointer-events-none z-20 bg-gradient-to-l from-[#D7E3F5] to-transparent hidden md:block"></div>
            <div className="absolute top-0 left-0 h-full w-[150px] pointer-events-none z-20 bg-gradient-to-r from-[#D7E3F5] to-transparent hidden md:block"></div>
        </section>
    );
};

export default Certifications;
