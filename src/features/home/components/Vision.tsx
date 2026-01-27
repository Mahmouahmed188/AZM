"use client";

import React, { useRef, useLayoutEffect } from "react";
import { animateVision } from "@/animations/visionAnimation";

const Vision = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const visionRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        animateVision(containerRef, visionRef, missionRef);
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-24 md:py-32 px-4 bg-azm-dark text-white overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                {/* Vision Column */}
                <div ref={visionRef} className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-4xl text-azm-green">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8a3 3 0 1 0 0 6a3 3 0 0 0 0-6" /></svg>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">Our Vision</h2>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        To be the most trusted digital partner, empowering organizations to achieve
                        sustainable growth through secure, scalable, and innovative technology solutions.
                    </p>
                </div>

                {/* Mission Column */}
                <div ref={missionRef} className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-4xl text-azm-purple">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14.66.085c.66.162 1.905 2.8 2.05 4.315H.045l14.615-4.23ZM16.89 19.5h3.065c-.145-1.516-1.39-4.154-2.05-4.316l-1.015 4.316Zm-2.795 0h2.47l.86-3.665c-2.345.31-2.9 2.585-3.33 3.665Zm-3.115 0h2.79a3.7 3.7 0 0 0 .5-1.3c.09-1.29-.485-2.26-1.575-2.65l-1.715 3.95Zm-3.115 0h2.79l.995-2.29c-1.93.305-2.585 1.545-2.79 2.29h-1l-2.005-4.62l-2.005 4.62h2.79l-1.28-2.95l.505 2.95Zm15.82-14h-1.635l-1.075 5.34l-3-5.34h-1.72l-3.335 8.01l-2.12-5.06l-2.485 5.925l.84.35l1.645-3.92l2.125 5.06l.005-.01l.005.01l3.33-8.005l3 5.34h1.72l1.625-8.08L24 5.25v.25Z" /></svg>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">Our Mission</h2>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        To deliver world-class Fintech, Cybersecurity, and Software services that
                        drive digital transformation, ensuring security, efficiency, and excellence
                        in every project we undertake.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Vision;
