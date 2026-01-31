import React, { useState } from "react";
import { useDirection } from "@/shared/hooks/useDirection";

interface StatItemProps {
    number: number;
    unit: string;
    label: string;
    decimals?: boolean;
}

const StatItem = ({ number, unit, label, decimals = false }: StatItemProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const { dir, isRTL } = useDirection();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            className="relative group w-full max-w-[488px] mx-auto stat-item-container overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            dir={dir}
        >
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(208, 38, 238, 0.12), transparent 80%)`,
                }}
            />

            <div className="relative flex flex-col items-start justify-center h-[168px] px-12 py-9">
                <div className="flex flex-row items-baseline gap-1 z-10">
                    <div className="flex flex-row items-baseline">
                        <span className="text-[48px] leading-[60px] font-normal text-white tracking-tighter stat-plus">+</span>
                        <span
                            className="text-[48px] leading-[60px] font-normal text-white tracking-tighter stat-value"
                            data-target={number}
                            data-decimals={decimals ? 1 : 0}
                        >
                            0
                        </span>
                    </div>
                    <span className="text-[48px] leading-[60px] font-normal text-white ms-2 stat-unit">{unit}</span>
                </div>

                <p className="mt-3 text-sm leading-5 text-white/50 font-normal z-10 max-w-full ">
                    {label}
                </p>

                <div className="absolute inset-y-0 start-0 w-[1.9px] bg-[#7278B84A] side-line-start"></div>
                <div className="absolute inset-y-0 end-0 w-[1.5px] bg-[#7278B84A] side-line-end"></div>
            </div>

            <div className="relative w-full">
                <div
                    className="h-[1.9px] bg-[#7278B84A] bottom-line"
                    style={{ transformOrigin: isRTL ? "left" : "right" }}
                ></div>
            </div>
        </div>
    );
};

export default StatItem;
