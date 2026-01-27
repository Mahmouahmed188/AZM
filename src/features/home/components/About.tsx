"use client";

import React, { useRef, useLayoutEffect } from "react";
import { animateAbout } from "@/animations/aboutAnimation";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        animateAbout(containerRef, titleRef, textRef);
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-24 md:py-32 px-4 bg-azm-offwhite text-azm-dark flex justify-center"
        >
            <div className="max-w-4xl w-full flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-bold mb-6 text-azm-blue-900"
                    >
                        Who We Are
                    </h2>
                    <div className="w-20 h-1 bg-azm-blue-600 mb-8 rounded-full"></div>
                </div>

                <div className="flex-[1.5]">
                    <p
                        ref={textRef}
                        className="text-lg md:text-xl leading-relaxed text-azm-dark/80"
                    >
                        AZM is a leading Saudi company dedicated to providing innovative digital solutions
                        in Fintech, Telecommunications, and Software Development. We are committed to
                        excellence, driving digital transformation, and building trust through
                        advanced technology and secure systems. Our team of experts works tirelessly
                        to deliver value and sustainable growth for our partners.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
