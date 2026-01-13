"use client";

import React, { useRef, useLayoutEffect } from "react";
import { animateCertifications } from "@/animations/certificationsAnimation";

const AWARDS = [
    { title: "CMMI Level 5", year: "2024", desc: "Capability Maturity Model Integration" },
    { title: "ISO 27001", year: "2023", desc: "Information Security Management" },
    { title: "ISO 9001", year: "2023", desc: "Quality Management System" },
    { title: "Great Place to Work", year: "2024", desc: "Certified Best Workplace" },
    { title: "ISO 22301", year: "2022", desc: "Business Continuity Management" },
    { title: "ISO 20000", year: "2022", desc: "IT Service Management" },
];

const Certifications = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        animateCertifications(sectionRef, trackRef);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-azm-offwhite overflow-hidden flex flex-col justify-center"
        >
            <div className="absolute top-12 left-12 z-10">
                <h2 className="text-4xl font-bold text-azm-dark mb-2">Awards & Certifications</h2>
                <p className="text-azm-dark/60">Recognized for excellence and quality.</p>
            </div>

            <div ref={trackRef} className="flex gap-8 pl-12 pr-12 w-max items-center h-full">
                {AWARDS.map((award, index) => (
                    <div
                        key={index}
                        className="w-[400px] h-[500px] bg-white rounded-3xl p-8 flex flex-col justify-between shadow-lg border border-gray-100 shrink-0"
                    >
                        <div className="w-20 h-20 bg-azm-purple/10 rounded-full flex items-center justify-center text-azm-purple font-bold text-xl">
                            {/* Icon Placeholder */}
                            {award.year}
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-azm-dark mb-4">{award.title}</h3>
                            <p className="text-lg text-gray-500">{award.desc}</p>
                        </div>

                        <div className="w-full h-1 bg-gray-100 relative overflow-hidden rounded-full">
                            <div className="absolute top-0 left-0 h-full w-1/3 bg-azm-purple"></div>
                        </div>
                    </div>
                ))}
                {/* Spacer for right padding */}
                <div className="w-[10vw]"></div>
            </div>
        </section>
    );
};

export default Certifications;
