"use client";

import React, { useRef, useLayoutEffect, createRef } from "react";
import { animateClients } from "@/animations/clientsAnimation";

const COMPANIES = [
    {
        name: "AZM Fintech",
        desc: "Revolutionizing digital payments and financial services in the Kingdom.",
        color: "bg-azm-blue-900",
    },
    {
        name: "AZM Cybersecurity",
        desc: "Providing top-tier security assessments, monitoring, and compliance.",
        color: "bg-azm-blue-800",
    },
    {
        name: "AZM Software",
        desc: "Building scalable, enterprise-grade software solutions for government and private sectors.",
        color: "bg-azm-blue-700",
    },
];

const Clients = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

    if (slideRefs.current.length !== COMPANIES.length) {
        slideRefs.current = Array(COMPANIES.length)
            .fill(null)
            .map((_, i) => slideRefs.current[i] || createRef());
    }

    useLayoutEffect(() => {
        // @ts-ignore
        animateClients(containerRef, slideRefs.current);
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
            {COMPANIES.map((company, index) => (
                <div
                    key={index}
                    ref={slideRefs.current[index] as React.RefObject<HTMLDivElement>}
                    className={`absolute inset-0 w-full h-full flex items-center justify-center ${company.color} ${index === 0 ? "z-10" : "z-0"
                        }`}
                    style={{ zIndex: index === 0 ? 10 : 0 }}
                >
                    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
                        {/* Image Placeholder */}
                        <div className="w-full aspect-square bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <span className="text-6xl font-black text-white/20">0{index + 1}</span>
                        </div>

                        <div className="text-white">
                            <h3 className="text-5xl md:text-7xl font-bold mb-8">{company.name}</h3>
                            <p className="text-xl md:text-2xl text-white/80 leading-normal max-w-lg">
                                {company.desc}
                            </p>
                            <button className="mt-8 px-8 py-4 border border-white rounded-full hover:bg-white hover:text-azm-dark transition-colors text-lg uppercase tracking-wider">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Clients;
