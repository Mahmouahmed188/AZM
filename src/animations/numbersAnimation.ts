import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateNumbers = (
    containerRef: RefObject<HTMLDivElement | null>,
    numberRefs: RefObject<HTMLSpanElement | null>[],
    targetValues: number[]
) => {
    if (!containerRef.current) return;

    const validNumbers = numberRefs
        .map((ref) => ref.current)
        .filter((el): el is HTMLSpanElement => el !== null);

    if (validNumbers.length === 0) return;

    ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        once: true, // Only trigger once
        onEnter: () => {
            validNumbers.forEach((el, index) => {
                const target = targetValues[index];
                const obj = { val: 0 };

                gsap.to(obj, {
                    val: target,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: () => {
                        el.innerText = Math.floor(obj.val).toString();
                    },
                });
            });
        },
    });
};
