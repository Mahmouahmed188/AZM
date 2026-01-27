import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Expert-level GSAP ScrollTrigger animation for vertical character-by-character text reveal
 * Handles Arabic RTL text with precise pinning behavior
 * 
 * @param sectionRef - Reference to the section element to pin
 * @param charsRefs - Array of character span elements to animate
 */
export const animateVisionHero = (
  sectionRef: React.RefObject<HTMLElement | null>,
  charsRefs: React.MutableRefObject<HTMLSpanElement[]>
) => {
  // Filter out null references
  const validChars = charsRefs.current.filter((el) => el !== null);

  // Early return if refs are invalid
  if (!sectionRef.current || validChars.length === 0) {
    console.warn("VisionHero animation: Invalid refs provided");
    return;
  }

  // Set initial state: all characters faded
  gsap.set(validChars, {
    color: "rgba(188, 17, 17, 0.1)",
  });

  // Create timeline with ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      id: "visionHeroTrigger",
      trigger: sectionRef.current,
      start: "top top", // Pin as soon as section enters viewport
      end: "+=200%", // Extended scroll distance for smooth character reveal
      pin: true, // Lock section in place
      scrub: 1, // Tie animation to scrollbar (1 second smoothing)
      anticipatePin: 1, // Prevent jumps during pinning
      invalidateOnRefresh: true, // Recalculate on resize
      markers: false, // Set to true for debugging
      onUpdate: (self) => {
        // Optional: Debug progress
        // console.log("Animation progress:", self.progress);
      },
    },
  });

  // Animate characters with vertical flow (character-by-character)
  // Using stagger to create sequential reveal from first to last character
  tl.to(validChars, {
    color: "#FFFFFF",
    // تقليل المدة لكل حرف لجعل الانتقال حاداً وواضحاً
    duration: 0.1,
    stagger: {
      // جعل قيمة "each" مساوية للـ duration يضمن عدم تداخل الحروف
      each: 0.1,
      from: "start",
      ease: "none",
    },
    ease: "none", // ضروري لضمان سرعة ثابتة أثناء التلوين
  });
  // Cleanup function to kill ScrollTrigger on unmount
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.id === "visionHeroTrigger") {
        trigger.kill();
      }
    });
  };
};

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const animateVisionHero = (
//   sectionRef: React.RefObject<HTMLElement>,
//   textRef: React.RefObject<HTMLHeadingElement>
// ) => {
//   if (!sectionRef.current || !textRef.current) return;

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "+=200%",
//       pin: true,
//       scrub: 1,
//     },
//   });

//   // تحريك خلفية النص (التدرج) من اليمين إلى اليسار
//   tl.to(textRef.current, {
//     backgroundPosition: "0% 0%",
//     ease: "none",
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach(t => t.kill());
//   };
// };