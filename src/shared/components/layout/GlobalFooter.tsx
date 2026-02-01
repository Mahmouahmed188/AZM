"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, ROUTES } from "@/shared/config/routes";


const GlobalFooter = () => {
    const { t } = useTranslation();
    const { dir } = useDirection();
    const [mounted, setMounted] = useState(false);

    // Handle hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = NAV_LINKS;

    if (!mounted) {
        return null;
    }

    return (
        <footer className="relative w-full h-[45vh] z-20 flex items-end bg-[#000814]" dir={dir}>
            {/* Arc Background - Visible but not blurred */}
            <div className="absolute inset-0 z-0 flex items-start">
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src="/footer/arc.png"
                        alt={t('globalFooter.arcAlt', 'Arc Background')}
                        fill
                        className="object-cover object-top opacity-100"
                    />
                </div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 lg:px-[112px] flex flex-col gap-12 py-6">
                {/* Logo and Nav Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href={ROUTES.HOME}>
                            <Image
                                src="/footer/logo.png"
                                alt={t('globalFooter.logoAlt', 'Saudi Azm')}
                                width={220}
                                height={80}
                                className="object-contain brightness-0 invert"
                            />
                        </Link>
                    </div>


                    {/* Nav */}
                    <nav className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4">
                        {mounted && navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-white/90 hover:text-[#A733CC] transition-colors duration-300 font-tajawal text-[18px]"
                            >
                                {t(item.label)}
                            </Link>
                        ))}
                    </nav>

                </div>

                {/* Bottom Bar: Social, Copyright, Legal */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    {/* Social Icons */}
                    <div className="flex items-center gap-6 flex-1 justify-center md:justify-start">
                        <a href="https://x.com/saudi_azm" target="_blank" className="text-white hover:opacity-70 transition-all">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9435 23L10.3941 15.0901L3.44691 23H0.507812L9.09013 13.2311L0.507812 1H8.05376L13.284 8.45502L19.8373 1H22.7764L14.5924 10.3165L23.4895 23H15.9435ZM19.2165 20.77H17.2378L4.71616 3.23H6.69515L11.7102 10.2532L12.5774 11.4719L19.2165 20.77Z" fill="currentColor" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/azmsquad/posts/?feedView=all" target="_blank" className="text-white hover:opacity-70 transition-all">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                    {/* Copyright */}
                    <div className="text-center text-[16px]">
                        {t('globalFooter.copyright', 'جميع الحقوق محفوظة © 2026 عزم السعودية.')}
                    </div>
                    {/* Legal Links */}
                    <div className="flex items-center gap-8 flex-1 justify-center md:justify-end">
                        <a href="#" className="text-white/50 hover:text-white transition-colors text-[14px] font-medium">{t('globalFooter.privacyPolicy', 'سياسة الخصوصية')}</a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors text-[14px] font-medium">{t('globalFooter.termsAndConditions', 'الشروط والأحكام')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default GlobalFooter;
