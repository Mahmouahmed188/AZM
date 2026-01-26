import gsap from "gsap";

export const animateIntroSection2 = (
  sectionRef: React.RefObject<HTMLDivElement | null>,
  arcRef: React.RefObject<HTMLDivElement | null>,
  onComplete: () => void
) => {
  const tl = gsap.timeline({
    onComplete: () => {
      // Hold for 2 seconds before transitioning to next section
      setTimeout(onComplete, 2000);
    },
  });

  // Initial state
  if (arcRef.current) {
    gsap.set(arcRef.current, {
      opacity: 0,
      scale: 0.95,
      transformOrigin: "center center"
    });
  }

  // Arc fade in with subtle scale animation
  if (arcRef.current) {
    tl.to(arcRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.8,
      ease: "power2.out",
    });
  }

  return tl;
};