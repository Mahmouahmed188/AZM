"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
    const navItems = [
        { name: "الرئيسية", link: "#" },
        { name: "من نحن", link: "#" },
        { name: "منتجاتنا", link: "#" },
        { name: "خدماتنا", link: "#" },
        { name: "المستثمرين", link: "#" },
        { name: "الوظائف", link: "#" },
        { name: "تواصل معنا", link: "#" },
    ];

    return (
        <footer className="relative w-full h-[140vh] overflow-hidden flex flex-col justify-between bg-[#000814]">
            {/* 1. Top Section - Map Background (74vh) */}
            <div className="relative w-full h-[90vh] z-0">
                <Image
                    src="/assets/footer/map.png"
                    alt="Map Background"
                    fill
                    className="object-cover object-top"
                    priority
                />

                {/* Floating Contact Card - Positioned relative to this section */}
                <div className="absolute inset-0 container mx-auto px-6 lg:px-[112px] flex items-center justify-start z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full max-w-[488px] bg-[#1a0b2e] rounded-[24px] border-2 border-[#733088]/60 overflow-hidden shadow-[0_30px_80px_rgba(115,48,136,0.5)] flex flex-col group/card"
                    >
                        {/* Card Image */}
                        <div className="relative w-full h-[320px] overflow-hidden">
                            <Image
                                src="/assets/footer/building.png"
                                alt="Corporate Building"
                                fill
                                className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-[#1a0b2e]/10 mix-blend-multiply"></div>
                        </div>
                        {/* Card Content */}
                        <div className="p-8 lg:p-10 space-y-6 flex flex-col bg-[#1a0b2e]" dir="rtl">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 flex items-center justify-center bg-[#733088]/40 rounded-full border border-[#E38CFF]/30">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C6.13 0 3 3.13 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#E38CFF" />
                                    </svg>
                                </div>
                                <p className="text-white text-[16px] leading-[1.7] font-medium font-tajawal text-right">
                                    مبنى رقم 23، ليسن فالي، طريق الملك خالد - الرياض - المملكة العربية السعودية
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-[#733088]/40 rounded-full border border-[#E38CFF]/30">
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM18 16H2V6.4L10 11L18 6.4V16ZM10 9L2 4H18L10 9Z" fill="#E38CFF" />
                                    </svg>
                                </div>
                                <a href="mailto:info@azm.sa" className="text-white/90 text-[18px] font-medium font-tajawal">info@azm.sa</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-[#733088]/40 rounded-full border border-[#E38CFF]/30">
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.62 8.5C5.06 11.33 7.38 13.64 10.21 15.09L12.41 12.89C12.69 12.61 13.08 12.52 13.43 12.64C14.56 13.01 15.77 13.22 17 13.22C17.55 13.22 18 13.67 18 14.22V17.5C18 18.05 17.55 18.5 17 18.5C7.61 18.5 0 10.89 0 1.5C0 0.95 0.45 0.5 1 0.5H4.28C4.83 0.5 5.28 0.95 5.28 1.5C5.28 2.73 5.49 3.94 5.86 5.07C5.97 5.42 5.89 5.81 5.61 6.09L3.62 8.5Z" fill="#E38CFF" />
                                    </svg>
                                </div>
                                <a href="tel:966-112884141" className="text-white/90 text-[18px] font-medium font-tajawal" dir="ltr">966-112884141</a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Transition Shadow between Map and Bottom Section */}
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#000814] to-transparent z-10"></div>
            </div>

            {/* 2. Bottom Section - Nav & Logo (26vh) */}
            <div className="relative w-full h-[40vh] z-20 flex items-center bg-[#000814]">
                {/* Arc Background - Visible but not blurred */}
                <div className="absolute inset-0 z-0 flex items-start">
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                            src="/assets/footer/arc.png"
                            alt="Arc Background"
                            fill
                            className="object-cover object-top opacity-100"
                        />
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 lg:px-[112px] flex flex-col gap-12 py-12">
                    {/* Logo and Nav Row */}
                    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                        {/* Logo on Right */}
                        <div className="flex items-center">
                            <Image
                                src="/assets/footer/logo.png"
                                alt="Saudi Azm"
                                width={220}
                                height={80}
                                className="object-contain brightness-0 invert"
                            />
                        </div>

                        {/* Nav on Left */}
                        <nav className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4" dir="rtl">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="text-white/90 hover:text-[#A733CC] transition-colors duration-300 font-tajawal text-[18px]"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Bottom Bar: Social, Copyright, Legal */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between">
                        {/* Social Icons (Left) */}
                        <div className="flex items-center gap-6 flex-1 justify-center md:justify-start order-2 md:order-1">
                            <a href="#" className="text-white hover:opacity-70 transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.9435 23L10.3941 15.0901L3.44691 23H0.507812L9.09013 13.2311L0.507812 1H8.05376L13.284 8.45502L19.8373 1H22.7764L14.5924 10.3165L23.4895 23H15.9435ZM19.2165 20.77H17.2378L4.71616 3.23H6.69515L11.7102 10.2532L12.5774 11.4719L19.2165 20.77Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:opacity-70 transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                        {/* Copyright (Middle) */}
                        <div className="order-3 md:order-2 text-center text-[16px]">
                            جميع الحقوق محفوظة © 2025 عزم السعودية.
                        </div>
                        {/* Legal Links (Right) */}
                        <div className="flex items-center gap-8 order-1 md:order-3 flex-1 justify-center md:justify-end">
                            <a href="#" className="text-white/50 hover:text-white transition-colors text-[14px] font-medium">سياسة الخصوصية</a>
                            <a href="#" className="text-white/50 hover:text-white transition-colors text-[14px] font-medium">الشروط والأحكام</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
