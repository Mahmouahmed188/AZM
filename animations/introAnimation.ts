import gsap from "gsap";

export const animateIntro = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    arcRef: React.RefObject<HTMLDivElement | null>,
    textRef: React.RefObject<HTMLDivElement | null>,
    onComplete: () => void
) => {
    const tl = gsap.timeline({
        onComplete: () => {
            // Longer hold to appreciate the "Figma Match"
            setTimeout(onComplete, 2500);
        },
        defaults: { ease: "power2.out" },
    });

    // INITIAL STATES (Set in CSS/JS to ensure no flash)
    if (arcRef.current) gsap.set(arcRef.current, { autoAlpha: 0 });
    if (textRef.current) gsap.set(textRef.current, { autoAlpha: 0, y: 30 });

    // ANIMATION
    // 1. Horizon Fades In
    if (arcRef.current) {
        tl.to(arcRef.current, {
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.inOut"
        });
    }

    // 2. Text Fades In and Rises slightly (Cinematic reveal)
    if (textRef.current) {
        tl.to(textRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out"
        }, "-=1.0"); // Start overlap
    }

    // Final state is strictly static match to design
};
