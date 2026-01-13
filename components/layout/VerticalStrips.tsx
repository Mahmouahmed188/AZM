"use client";

import React from "react";

const VerticalStrips = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-center overflow-hidden">
            {/* Container for strips */}
            <div className="w-full max-w-[1920px] h-full flex justify-between opacity-30">
                {/* Generate multiple strips across the screen */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-full w-[1px] bg-gradient-to-b from-transparent via-[rgba(167,51,204,0.1)] to-transparent"
                        style={{
                            background: `linear-gradient(180deg, rgba(8, 2, 14, 0) 0%, rgba(167, 51, 204, 0.15) 50%, rgba(8, 2, 14, 0) 100%)`, // Simulating the vertical purple cast
                        }}
                    />
                ))}
            </div>

            {/* The Purple Ellipse/Curtain Effect */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-[rgba(26,11,46,0.6)] blur-[120px] rounded-[100%]"
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, #2E0B45 0%, rgba(8, 2, 14, 0) 100%)'
                }}
            />
        </div>
    );
};

export default VerticalStrips;
