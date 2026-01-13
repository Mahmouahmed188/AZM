import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateCertifications = (
    sectionRef: RefObject<HTMLDivElement | null>,
    trackRef: RefObject<HTMLDivElement | null>
) => {
    if (!sectionRef.current || !trackRef.current) return;

    const getScrollAmount = () => {
        if (!trackRef.current) return 0;
        // Calculate total width of track minus the viewport width
        let trackWidth = trackRef.current.scrollWidth;
        return -(trackWidth - window.innerWidth);
    };

    const tween = gsap.to(trackRef.current, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1 + 200}`, // Dynamic end based on scroll length
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true, // Recalculate on resize
    });
};
