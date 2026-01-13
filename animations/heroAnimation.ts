import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHero = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    logoRef: React.RefObject<HTMLDivElement | null>,
    titleRef: React.RefObject<HTMLHeadingElement | null>,
    subtitleRef: React.RefObject<HTMLParagraphElement | null>,
    bgRef: React.RefObject<HTMLDivElement | null>
) => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    // Initial State
    gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 40,
    });

    gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.95,
    });

    // Entrance Animation
    tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
    })
        .to(
            titleRef.current,
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.8"
        )
        .to(
            subtitleRef.current,
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.8"
        );

    // Scroll Parallax
    gsap.to(bgRef.current, {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
        y: 100, // Parallax movement speed
        ease: "none",
    });

    gsap.to([titleRef.current, subtitleRef.current, logoRef.current], {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "50% top",
            scrub: true,
        },
        y: -50,
        opacity: 0,
        ease: "none",
    });
};
