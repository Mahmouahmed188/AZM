"use client";

import React, { useRef, useLayoutEffect, createRef } from "react";
import { animateServices } from "@/animations/servicesAnimation";

const SERVICES = [
    { title: "Fintech Solutions", desc: "Advanced financial technology services & payment gateways." },
    { title: "Cybersecurity", desc: "Protecting assets with top-tier security controls (CMMI L5)." },
    { title: "Software Development", desc: "Custom software tailored to enterprise needs." },
    { title: "Cloud Services", desc: "Secure cloud infrastructure and migration." },
    { title: "Data Analytics", desc: "Insightful data processing and BI dashboards." },
    { title: "Consulting", desc: "Strategic digital transformation consulting." },
];

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

    if (cardRefs.current.length !== SERVICES.length) {
        cardRefs.current = Array(SERVICES.length)
            .fill(null)
            .map((_, i) => cardRefs.current[i] || createRef());
    }

    useLayoutEffect(() => {
        // @ts-ignore - Validated inside animation function
        animateServices(containerRef, titleRef, cardRefs.current);
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-24 bg-white text-azm-dark"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-azm-blue-900"
                >
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            ref={cardRefs.current[index] as React.RefObject<HTMLDivElement>}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-azm-blue-100 rounded-lg mb-6 flex items-center justify-center text-azm-blue-600">
                                {/* Icons placeholder */}
                                <div className="w-6 h-6 bg-current rounded-sm opacity-50" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-azm-blue-900">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
