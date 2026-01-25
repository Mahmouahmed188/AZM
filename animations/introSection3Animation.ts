import gsap from "gsap";

/**
 * Intro Section 3 Animation
 * - Arc fades in
 * - Text rises with fade (translateY + opacity)
 * - Smooth, cinematic easing
 * - No bounce, calm premium motion
 */
export const animateIntroSection3 = (
  sectionRef: React.RefObject<HTMLDivElement | null>,
  arcRef: React.RefObject<HTMLDivElement | null>,
  textRef: React.RefObject<HTMLDivElement | null>,
  onComplete: () => void
) => {
  const tl = gsap.timeline({
    onComplete: () => {
      // Hold for 2.5 seconds before completing
      setTimeout(onComplete, 2500);
    },
  });

  // Initial states
  if (arcRef.current) {
    gsap.set(arcRef.current, { 
      opacity: 0, 
      scale: 0.95,
      transformOrigin: "center center"
    });
  }
  
  if (textRef.current) {
    gsap.set(textRef.current, { 
      opacity: 0, 
      y: 40 
    });
  }

  // Arc fade in first
  if (arcRef.current) {
    tl.to(arcRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
    });
  }

  // Text rises slightly with fade (overlapping animation)
  if (textRef.current) {
    tl.to(
      textRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power2.out",
      },
      "-=1.0" // Start 1 second before arc animation completes
    );
  }

  return tl;
};