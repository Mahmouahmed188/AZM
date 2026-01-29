import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateVisionStackedExperience = (
    containerRef: React.RefObject<HTMLElement | null>,
    visionTextRef: React.MutableRefObject<HTMLSpanElement[]>,
    cardsRef: React.MutableRefObject<(HTMLDivElement | null)[]>
) => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
    const chars = visionTextRef.current.filter((el) => el !== null);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${(cards.length + 3) * 100}%`, // Added duration for text reveal and exit animation
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        },
    });

    // 1. Vision Text Reveal (Character by character)
    if (chars.length > 0) {
        tl.to(chars, {
            color: "#FFFFFF",
            duration: 0.1,
            stagger: {
                each: 0.05,
                from: "start",
            },
            ease: "none",
        });

        // Phase separation:
        // Only start cards AFTER the text fill is 100% complete.
        // (Optional tiny gap keeps the handoff feeling natural while still scroll-linked.)
        tl.add("card-0", "+=0.15");
    } else {
        // If no text chars exist, allow cards to run from the start.
        tl.add("card-0", 0);
    }

    // 2. Cards Stacking Animation
    const STACK_OFFSET = 30;
    const totalStackHeight = (cards.length - 1) * STACK_OFFSET;
    const startY = -totalStackHeight / 2;

    cards.forEach((card, index) => {
        const label = `card-${index}`;

        if (index > 0) {
            // Increased gap significantly to create the "pause" effect
            tl.add(label, `card-${index - 1}+=1.8`);
        }

        gsap.set(card, {
            y: "110vh",
            zIndex: index + 10,
            scale: 1.3, // Start large as requested
            opacity: 0,   // Start transparent
        });

        tl.to(card, {
            y: startY + (index * STACK_OFFSET),
            scale: 1,    // Scale down to original size
            opacity: 1,  // Become fully visible
            duration: 1.5,
            ease: "power2.out",
        }, label);

        if (index === 0 && chars.length > 0) {
            tl.to(chars, {
                scale: 0.95,
                opacity: 1,
                y: -30,
                duration: 1,
                ease: "power2.inOut",
            }, label);
        }

        else if (index > 0) {
            tl.to(cards[index - 1], {
                scale: 0.98,
                filter: "blur(2px)",
                duration: 1.2,
                ease: "power3.out",
                opacity: 0.8, // Slightly fade back when next card covers it
            }, label);
        }


        // Counters and Internal Content
        const counters = card.querySelectorAll(".counter");
        counters.forEach(counter => {
            const targetValue = parseFloat(counter.getAttribute("data-value") || "0");
            const suffix = counter.getAttribute("data-suffix") || "";
            const prefix = counter.getAttribute("data-prefix") || "";
            const obj = { value: 0 };

            tl.to(obj, {
                value: targetValue,
                duration: 0.8,
                ease: "power2.out",
                onUpdate: () => {
                    counter.textContent = `${prefix}${obj.value.toLocaleString(undefined, {
                        minimumFractionDigits: targetValue % 1 !== 0 ? 3 : 0,
                        maximumFractionDigits: targetValue % 1 !== 0 ? 3 : 0
                    })}${suffix}`;
                }
            }, `${label}+=0.4`);
        });
    });

    // 3. Exit Animation (Fanning out downward)
    // This starts after all cards are stacked
    tl.add("exit", "+=0.5");
    tl.to(cards, {
        y: "120vh",
        opacity: 0,
        scale: 0.9,
        stagger: {
            each: 0.1,
            from: "end", // Starts with the top-most card falling first
        },
        duration: 2,
        ease: "power2.in",
    }, "exit");

    return () => {
        ScrollTrigger.getAll().forEach(t => {
            if (t.trigger === containerRef.current) t.kill();
        });
    };
};
