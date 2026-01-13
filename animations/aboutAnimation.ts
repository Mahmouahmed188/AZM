import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateAbout = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    titleRef: React.RefObject<HTMLHeadingElement | null>,
    textRef: React.RefObject<HTMLParagraphElement | null>
) => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Start when top of section hits 80% viewport height
            toggleActions: "play none none reverse",
        },
    });

    gsap.set(titleRef.current, { x: -100, opacity: 0 });
    gsap.set(textRef.current, { y: 40, opacity: 0 });

    tl.to(titleRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
    }).to(
        textRef.current,
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
        },
        "-=0.4" // Overlap slightly
    );
};
