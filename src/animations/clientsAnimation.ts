import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateClients = (
    containerRef: RefObject<HTMLDivElement | null>,
    slidesRef: RefObject<HTMLDivElement | null>[]
) => {
    if (!containerRef.current) return;

    const slides = slidesRef
        .map((ref) => ref.current)
        .filter((el): el is HTMLDivElement => el !== null);

    if (slides.length === 0) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${slides.length * 100}%`,
            pin: true,
            scrub: 1,
        },
    });

    slides.forEach((slide, i) => {
        if (i === 0) return; // Skip first slide

        tl.fromTo(
            slide,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "none" } // Fade in next slide over previous
        ).to(
            slides[i - 1],
            { opacity: 0, duration: 1 },
            "<" // Animate out previous slide at same time
        );
    });
};
