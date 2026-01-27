import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateVision = (
    containerRef: RefObject<HTMLDivElement | null>,
    visionRef: RefObject<HTMLDivElement | null>,
    missionRef: RefObject<HTMLDivElement | null>
) => {
    if (!containerRef.current || !visionRef.current || !missionRef.current) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
        },
    });

    // Initial states
    gsap.set(visionRef.current, { x: -60, opacity: 0 });
    gsap.set(missionRef.current, { x: 60, opacity: 0 });

    // Animation
    tl.to(visionRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
    }).to(
        missionRef.current,
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
        },
        "-=0.8" // Stagger
    );
};
