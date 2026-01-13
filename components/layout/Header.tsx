"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "الرئيسية", href: "#hero" },
    { label: "من نحن", href: "#about" },
    { label: "منتجاتنا", href: "#products" },
    { label: "خدماتنا", href: "#services" },
    { label: "المستثمرين", href: "#consultants" },
    { label: "الوظائف", href: "#jobs" },
];

const Header = () => {
    const [active, setActive] = useState("#hero");

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[100] h-[80px] w-full"
            style={{
                background:
                    "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(115, 48, 136, 0.04) 0%, rgba(115, 48, 136, 0.00895833) 77.08%, rgba(115, 48, 136, 0) 100%)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
            }}
        >
            {/* 
                Structure based on CSS Specs:
                - Container padding: 112px (Left/Right)
                - Width: 1440px (Max)
                - RTL Direction
                
                Items:
                1. Logo Area: 214px wide, Border Left/Right.
                2. Nav: Gap 80px from Logo Area.
                3. Lang Switcher: 80px wide, pushed to FL (Left).
            */}
            <div className="relative w-full h-full max-w-[1440px] mx-auto flex items-center px-[112px]" dir="rtl">

                {/* 1. LOGO AREA (Right in RTL) - 214px */}
                <div className="flex-shrink-0 flex items-center justify-center w-[214px] h-full border-x border-[rgba(114,120,184,0.16)]">
                    <Link href="/" className="relative block w-[120px] h-[40px]">
                        <Image
                            src="/azm-text-logo.png"
                            alt="AZM"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* 2. NAVIGATION (Gap 80px from Logo) */}
                <nav className="mr-[80px] flex items-center gap-[48px] h-full">
                    {NAV_ITEMS.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setActive(item.href)}
                            className={cn(
                                "font-rubik text-[16px] font-medium transition-colors duration-300 relative",
                                active === item.href ? "text-white" : "text-white/48 hover:text-white"
                            )}
                        >
                            {item.label}
                            {active === item.href && (
                                <span className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 w-[32px] h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* 3. LANG SWITCHER (Far Left) - 80px */}
                <div className="mr-auto flex-shrink-0 flex items-center justify-center w-[80px] h-full border-x border-[rgba(114,120,184,0.16)]">
                    <button className="font-rubik text-[14px] font-medium text-white hover:text-[#A733CC] transition-colors">
                        EN
                    </button>
                </div>

                {/* Bottom Border Line */}
                <div
                    className="absolute bottom-0 left-0 w-full h-[1px]"
                    style={{ background: "rgba(114, 120, 184, 0.16)" }}
                />
            </div>
        </header>
    );
};

export default Header;
