import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateCareersSection = (
    sectionRef: React.RefObject<HTMLDivElement | null>,
    bgRef: React.RefObject<HTMLDivElement | null>,
    cardRef: React.RefObject<HTMLDivElement | null>
) => {
    if (!sectionRef.current || !bgRef.current) return;

    const sectionHeight = sectionRef.current.offsetHeight;
    const bgHeight = bgRef.current.offsetHeight;

    const diff = bgHeight - sectionHeight;

    if (diff <= 0) return;

    gsap.to(bgRef.current, {
        y: -diff,
        ease: "none",
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${diff}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
        }
    });
};