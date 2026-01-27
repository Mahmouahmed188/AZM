import { useLayoutEffect } from "react";
import gsap from "gsap";

interface HeroAnimateProps {
    sectionRef: React.RefObject<HTMLElement | null>;
    titleRef: React.RefObject<HTMLDivElement | null>;
    swirlRef: React.RefObject<SVGSVGElement | null>;
    descTextRef: React.RefObject<HTMLDivElement | null>;
    descLogosRef: React.RefObject<HTMLDivElement | null>;
    loadingBarRef: React.RefObject<HTMLDivElement | null>;
}

export const useHeroAnimations = ({
    sectionRef,
    titleRef,
    swirlRef,
    descTextRef,
    descLogosRef,
    loadingBarRef,
}: HeroAnimateProps) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial States
            gsap.set(titleRef.current, { y: 50, opacity: 0 });
            gsap.set(".title-line", { y: 30, opacity: 0 });
            gsap.set(swirlRef.current, { scale: 0.5, opacity: 0, rotation: -15 });
            gsap.set(descTextRef.current, { y: 45, opacity: 0 });
            gsap.set(descLogosRef.current, { opacity: 0 });
            gsap.set(loadingBarRef.current, { width: 0 });
            gsap.set(".bottom-line", { scaleX: 0, transformOrigin: "right" });
            gsap.set([".side-line-left", ".side-line-right"], { scaleY: 0, transformOrigin: "top" });
            gsap.set(".stat-value", { opacity: 0 });
            gsap.set(".stat-plus", { opacity: 0 });
            gsap.set(".stat-unit", { y: 40, opacity: 0 });
            gsap.set(".stat-label", { y: 30, opacity: 0 });

            const tl = gsap.timeline({ delay: 0.5 });

            // Title & Swirl
            tl.to(titleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power4.out" })
                .to(".title-line", { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.6")
                .to(swirlRef.current, { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "back.out(1.7)" }, "-=0.4");

            // Description & Logos
            tl.to(descLogosRef.current, {
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power2.inOut"
            })
                .to(descTextRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out"
                }, "-=.5");

            tl.addLabel("startLeftStats");

            // Stats Borders & Loading Bar
            tl.to(loadingBarRef.current, { width: "100%", duration: 1.2, ease: "expo.inOut" }, "startLeftStats")
                .to(".bottom-line", { scaleX: 1, duration: 1.2, ease: "expo.inOut", stagger: 0.1 }, "startLeftStats")
                .to([".side-line-left", ".side-line-right"], { scaleY: 1, duration: 1.2, ease: "expo.inOut", stagger: 0.1 }, "startLeftStats");

            // Stats Content
            tl.to(".stat-value", { opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.in" }, "startLeftStats+=0.4")
                .to(".stat-unit", { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "startLeftStats+=0.4");
            tl.to(".stat-plus", { opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.in" }, "startLeftStats+=0.4");
            tl.to(".stat-label", { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "startLeftStats+=0.7");

            // Counter Animation
            tl.to(".stat-value", {
                duration: 2,
                ease: "power2.out",
                onStart: () => {
                    const stats = document.querySelectorAll<HTMLElement>(".stat-value");
                    stats.forEach((el) => {
                        const target = parseFloat(el.getAttribute("data-target") || "0");
                        const hasDecimals = el.getAttribute("data-decimals") === "1";

                        gsap.to(el, {
                            innerText: target,
                            duration: 2,
                            snap: { innerText: hasDecimals ? 0.1 : 1 },
                            ease: "power2.out",
                            onUpdate: function () {
                                if (hasDecimals) {
                                    el.innerHTML = parseFloat(el.innerText).toFixed(1);
                                } else {
                                    el.innerHTML = Math.floor(parseFloat(el.innerText)).toString();
                                }
                            }
                        });
                    });
                }
            }, "-=0.5");
        }, sectionRef);

        return () => ctx.revert();
    }, [sectionRef, titleRef, swirlRef, descTextRef, descLogosRef, loadingBarRef]);
};
