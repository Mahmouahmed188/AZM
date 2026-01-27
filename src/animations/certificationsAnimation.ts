import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateCertifications = (
    sectionRef: RefObject<HTMLDivElement | null>,
    trackRef: RefObject<HTMLDivElement | null>
) => {
    if (!sectionRef.current || !trackRef.current) return;

    const section = sectionRef.current;
    const track = trackRef.current;

    ScrollTrigger.getById("certifications-horizontal")?.kill();

    const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        // التحريك لليسار في وضع RTL
        return -(trackWidth - viewportWidth);
    };

    const horizontalScroll = gsap.fromTo(track,
        { x: 0 },
        {
            x: () => getScrollAmount(),
            ease: "none",
            scrollTrigger: {
                id: "certifications-horizontal",
                trigger: section,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${track.scrollWidth}`,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        }
    );

    // ملاحظة: تم حذف جزء الـ cards.forEach الذي كان يسبب حركة y (فوق وتحت)

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
        horizontalScroll.kill();
    };
};