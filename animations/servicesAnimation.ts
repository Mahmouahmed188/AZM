import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateServices = (
    containerRef: RefObject<HTMLDivElement | null>,
    titleRef: RefObject<HTMLHeadingElement | null>,
    cardsRef: RefObject<HTMLDivElement | null>[]
) => {
    if (!containerRef.current || !titleRef.current) return;

    const validCards = cardsRef
        .map((ref) => ref.current)
        .filter((el): el is HTMLDivElement => el !== null);

    if (validCards.length === 0) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
        },
    });

    // Init Title
    gsap.set(titleRef.current, { y: 30, opacity: 0 });

    // Init Cards
    gsap.set(validCards, { opacity: 0, y: 40, scale: 0.95 });

    // Animate Title
    tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
    })
        // Animate Cards Stagger
        .to(
            validCards,
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
            },
            "-=0.3"
        );
};
