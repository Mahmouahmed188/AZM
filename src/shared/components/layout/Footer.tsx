"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-[100vh] overflow-hidden flex flex-col justify-between bg-[#000814]">
            {/* 1. Top Section - Map Background (74vh) */}
            <div className="relative w-full h-[100vh] z-0">
                <Image
                    src="/footer/map.png"
                    alt={t('footer.mapAlt', 'Map Background')}
                    fill
                    className="object-cover object-top"
                    priority
                />

                {/* Floating Contact Card - Positioned relative to this section */}
                <div className="absolute inset-0 container my-16 mx-auto px-6 lg:px-[112px] justify-start z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full max-w-[488px] bg-[#1a0b2e] rounded-[24px] border-2 border-[#733088]/60 overflow-hidden shadow-[0_10px_80px_rgba(115,48,136,0.4)] flex flex-col group/card"
                    >
                        {/* Card Image */}
                        <div className="relative w-full h-[320px] overflow-hidden">
                            <Image
                                src="/footer/building.png"
                                alt={t('footer.buildingAlt', 'Corporate Building')}
                                fill
                                className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-[#1a0b2e]/10 mix-blend-multiply"></div>
                        </div>
                        {/* Card Content */}
                        <div className="p-8 lg:p-10 space-y-6 flex flex-col bg-[#1a0b2e]">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 flex items-center justify-center bg-[#733088]/40 rounded-full border border-[#E38CFF]/30">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C6.13 0 3 3.13 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#E38CFF" />
                                    </svg>
                                </div>
                                <p className="text-white text-[16px] leading-[1.7] font-medium font-tajawal text-right">
                                    {t('footer.address', 'مبنى رقم 23، ليسن فالي، طريق الملك خالد - الرياض - المملكة العربية السعودية')}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-[#733088]/40 rounded-full border border-[#E38CFF]/30">
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM18 16H2V6.4L10 11L18 6.4V16ZM10 9L2 4H18L10 9Z" fill="#E38CFF" />
                                    </svg>
                                </div>
                                <a href="mailto:info@azm.sa" className="text-white/90 text-[18px] font-medium font-tajawal">{t('footer.email', 'info@azm.sa')}</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-[#733088]/40 rounded-full border border-[#E38CFF]/30">
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.62 8.5C5.06 11.33 7.38 13.64 10.21 15.09L12.41 12.89C12.69 12.61 13.08 12.52 13.43 12.64C14.56 13.01 15.77 13.22 17 13.22C17.55 13.22 18 13.67 18 14.22V17.5C18 18.05 17.55 18.5 17 18.5C7.61 18.5 0 10.89 0 1.5C0 0.95 0.45 0.5 1 0.5H4.28C4.83 0.5 5.28 0.95 5.28 1.5C5.28 2.73 5.49 3.94 5.86 5.07C5.97 5.42 5.89 5.81 5.61 6.09L3.62 8.5Z" fill="#E38CFF" />
                                    </svg>
                                </div>
                                <a href="tel:966-112884141" className="text-white/90 text-[18px] font-medium font-tajawal" dir="ltr">{t('footer.phone', '966-112884141')}</a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Transition Shadow between Map and Bottom Section */}
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#000814] to-transparent z-10"></div>
            </div>
        </div>
    );
};

export default Footer;
