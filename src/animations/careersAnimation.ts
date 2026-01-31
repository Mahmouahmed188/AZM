import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateCareersSection = (
    section: HTMLElement,
    card: HTMLElement
) => {
    return gsap.context(() => {
        ScrollTrigger.create({
            trigger: card,        // نراقب الكارد نفسه
            start: "center center", // يبدأ التثبيت عندما يصبح مركز الكارد في مركز الشاشة
            endTrigger: section,  // ينتهي التثبيت بنهاية القسم الكبير
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            pinType: "transform", // Use transform instead of fixed positioning to avoid RTL issues
            invalidateOnRefresh: true, // Recalculate on resize/refresh
            scrub: true,
        });
    }, section);
};