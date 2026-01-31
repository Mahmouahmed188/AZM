"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/shared/components/common/LanguageSwitcher";

import { usePathname } from "next/navigation";
import { NAV_LINKS, ROUTES } from "@/shared/config/routes";

const NAV_ITEMS = NAV_LINKS;


const splitArabic = (text: string) => {
    const chars = text.split("");
    const nonJoiners = "اأإآدذرزوؤةى";

    return chars.map((char, index) => {
        if (char === " ") return char;

        let displayChar = char;
        const prevChar = chars[index - 1];
        const nextChar = chars[index + 1];

        // Add ZWJ before if previous exists, isn't space, and isn't a non-joiner
        if (prevChar && prevChar !== " " && !nonJoiners.includes(prevChar)) {
            displayChar = "\u200D" + displayChar;
        }

        // Add ZWJ after if next exists, isn't space, and current isn't a non-joiner
        if (nextChar && nextChar !== " " && !nonJoiners.includes(char)) {
            displayChar = displayChar + "\u200D";
        }

        return displayChar;
    });
};

// مكوّن فرعي للتعامل مع حركة الكلمة (حرفاً بحرف - متصل)
const AnimatedWord = ({ label, isActive }: { label: string; isActive: boolean }) => {
    const container = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: container });

    const chars = splitArabic(label);

    const handleMouseEnter = contextSafe(() => {
        gsap.to(".char-main", { y: "-100%", duration: 0.5, ease: "power3.inOut", stagger: 0.02 });
        gsap.to(".char-hover", { y: "0%", duration: 0.5, ease: "power3.inOut", stagger: 0.02 });
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(".char-main", { y: "0%", duration: 0.5, ease: "power3.inOut", stagger: 0.02 });
        gsap.to(".char-hover", { y: "100%", duration: 0.5, ease: "power3.inOut", stagger: 0.02 });
    });

    return (
        <div
            ref={container}
            className="flex items-center justify-center cursor-pointer overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {chars.map((char, i) => (
                <span key={i} className="relative inline-flex flex-col overflow-hidden">
                    <span className="char-main inline-block whitespace-pre">
                        {char}
                    </span>
                    <span className="char-hover absolute inset-0 inline-block whitespace-pre translate-y-full text-white">
                        {char}
                    </span>
                </span>
            ))}
        </div>
    );
};

const Header = () => {
    const { t } = useTranslation();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="fixed top-0 start-0 end-0 z-[100] w-full h-20 transition-all duration-700 backdrop-blur-[40px]"
            >
                <div className="relative w-full h-full max-w-[1440px] mx-auto px-6 lg:px-28 flex items-center justify-between">

                    {/* Logo (Start) - Right in AR, Left in EN */}
                    <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
                        <Link href={ROUTES.HOME} className="relative block w-[140px] lg:w-[214px] h-9 lg:h-20 transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/logo-area.png"
                                alt="Saudi AZM Logo"
                                fill
                                className="object-contain object-center lg:object-start"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation Menu (Center) */}
                    <div className="hidden lg:flex flex-1 items-center justify-center px-4">
                        <nav className="flex items-center gap-12">
                            {mounted && NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={cn(
                                        "font-tajawal text-base font-medium transition-all duration-500 relative whitespace-pre py-2",
                                        pathname === item.href ? "text-white" : "text-white/48"
                                    )}
                                >
                                    <AnimatedWord label={t(item.label)} isActive={pathname === item.href} />
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="nav-active"
                                            className="absolute -bottom-1 start-0 w-full h-0.5 bg-white"
                                            style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Actions / Language Switcher (End) - Left in AR, Right in EN */}
                    <div className="flex-shrink-0 flex items-center gap-4 justify-end">
                        <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(true)}>
                            <Menu size={24} />
                        </button>

                        <div className="hidden lg:block">
                            <LanguageSwitcher />
                        </div>
                    </div>

                </div>
                <div className="absolute bottom-0 start-0 w-full h-px bg-[#7278B8]/16" />
            </motion.header>

            {/* Mobile Sidebar (نفس المنطق يمكن تطبيقه هنا أيضاً) */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110]"
                        />
                        <motion.div
                            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 end-0 h-full w-[300px] bg-[#000814] border-s border-white/5 z-[120] p-10 flex flex-col"
                        >
                            <button className="self-end text-white/40 mb-16" onClick={() => setMobileMenuOpen(false)}>
                                <X size={32} />
                            </button>
                            <div className="flex flex-col gap-10">
                                {mounted && NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => { setMobileMenuOpen(false); }}
                                        className={cn(
                                            "font-tajawal text-2xl font-medium",
                                            pathname === item.href ? "text-white" : "text-white/40"
                                        )}
                                    >
                                        {t(item.label)}
                                    </Link>
                                ))}

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;