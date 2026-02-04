"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

interface TransitionContextType {
  isTransitioning: boolean;
  isExiting: boolean;
  isEntering: boolean;
  isCovered: boolean;
  pageReady: boolean;
  startTransition: (href: string) => void;
  endTransition: () => void;
  forceCleanup: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined,
);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within TransitionLayout");
  }
  return context;
}

interface TransitionLayoutProps {
  children: React.ReactNode;
}

export default function TransitionLayout({ children }: TransitionLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isCovered, setIsCovered] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(
    null,
  );
  const [pageReady, setPageReady] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);
  const exitTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const entranceTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const cleanupTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousPathnameRef = useRef<string>("");
  const pageReadyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // GSAP context for proper cleanup
  const gsapContextRef = useRef<gsap.Context | null>(null);

  const clearTimeoutRef = (ref: MutableRefObject<NodeJS.Timeout | null>) => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  // Cleanup function - resets all transition state
  const cleanup = useCallback(() => {
    // Kill any running animations
    if (exitTimelineRef.current) {
      exitTimelineRef.current.kill();
      exitTimelineRef.current = null;
    }

    if (entranceTimelineRef.current) {
      entranceTimelineRef.current.kill();
      entranceTimelineRef.current = null;
    }

    // Clear all timeouts
    clearTimeoutRef(cleanupTimeoutRef);
    clearTimeoutRef(navigationTimeoutRef);
    clearTimeoutRef(pageReadyTimeoutRef);

    // Hide overlay
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { display: "none", opacity: 0 });
      overlayRef.current.innerHTML = "";
    }

    // Reset all state
    setIsTransitioning(false);
    setIsExiting(false);
    setIsEntering(false);
    setIsCovered(false);
    setPageReady(false);
    setPendingNavigation(null);
    columnsRef.current = [];
  }, []);

  // Force cleanup function - emergency fallback (uses same logic but with additional logging)
  const forceCleanup = useCallback(() => {
    cleanup();
  }, [cleanup]);

  // Execute navigation with proper timing
  const executeNavigation = useCallback(
    (href: string) => {
      // Clear any existing navigation timeout
      clearTimeoutRef(navigationTimeoutRef);

      // Force router navigation with multiple attempts
      const attemptNavigation = () => {
        try {
          router.push(href);

          // Verify if navigation worked
          setTimeout(() => {
            if (
              window.location.pathname ===
              new URL(href, window.location.origin).pathname
            ) {
              // Navigation successful
            } else {
              window.location.href = href;
            }
          }, 100);
        } catch (error) {
          window.location.href = href;
        }
      };

      // Execute navigation immediately
      attemptNavigation();

      // Fallback navigation attempts
      navigationTimeoutRef.current = setTimeout(() => {
        if (
          window.location.pathname !==
          new URL(href, window.location.origin).pathname
        ) {
          attemptNavigation();
        }
      }, 1000);
    },
    [router],
  );

  // Create and setup columns
  const createColumns = useCallback(() => {
    if (!overlayRef.current) return;

    const numColumns = 20;
    const columns: HTMLDivElement[] = [];

    // Clear and recreate columns
    overlayRef.current.innerHTML = "";

    // Create vertical blind columns
    for (let i = 0; i < numColumns; i++) {
      const column = document.createElement("div");
      column.className = "horizontal-shutter-column";
      overlayRef.current.appendChild(column);
      columns.push(column);
    }

    columnsRef.current = columns;

    // Create GSAP context for proper cleanup
    gsapContextRef.current = gsap.context(() => {
      // Position and style columns - start as thin lines
      gsap.set(columns, {
        height: "100vh",
        width: `${100 / numColumns}%`,
        backgroundColor: "#000000",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 1,
        transformOrigin: "right center",
        zIndex: 9999,
      });

      // Position columns side by side from left
      columns.forEach((column, index) => {
        gsap.set(column, {
          left: `${(index * 100) / numColumns}%`,
        });
      });

      // Show overlay
      gsap.set(overlayRef.current, {
        display: "block",
        opacity: 1,
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      });
    }, overlayRef.current);
  }, []);

  // Exit Animation: Expand thin lines to full coverage
  const playExitAnimation = useCallback(() => {
    if (!overlayRef.current || columnsRef.current.length === 0) return;

    // Kill any existing entrance animation
    if (entranceTimelineRef.current) {
      entranceTimelineRef.current.kill();
      entranceTimelineRef.current = null;
    }

    setIsExiting(true);
    setPageReady(false); // Reset page ready state for next page

    // Create exit animation timeline
    exitTimelineRef.current = gsap.timeline({
      onComplete: () => {
        setIsExiting(false);
        setIsCovered(true); // Mark screen as covered

        // NAVIGATE IMMEDIATELY
        if (pendingNavigation) {
          executeNavigation(pendingNavigation);
        }
      },
    });

    // Start from thin lines (scaleX: 0.03) and expand to full coverage (scaleX: 1)
    exitTimelineRef.current.fromTo(
      columnsRef.current,
      {
        scaleX: 0.03, // Start as thin lines
        opacity: 1,
      },
      {
        scaleX: 1, // Expand to full coverage
        duration: 0.8,
        ease: "power2.inOut",
        opacity: 1,
        stagger: 0.03, // Slight stagger for wave effect
      },
    );

    // Emergency cleanup timeout
    cleanupTimeoutRef.current = setTimeout(() => {
      forceCleanup();
    }, 5000);
  }, [pendingNavigation, executeNavigation, forceCleanup]);

  // Entrance Animation: Shrink full coverage to thin lines
  const playEntranceAnimation = useCallback(() => {
    // Ensure overlay exists
    if (!overlayRef.current) {
      return;
    }

    // Recovery: If columns are missing, recreate them
    if (columnsRef.current.length === 0) {
      createColumns();
    }

    // Clear emergency timeout
    clearTimeoutRef(cleanupTimeoutRef);
    clearTimeoutRef(pageReadyTimeoutRef);

    // Kill any existing exit animation
    if (exitTimelineRef.current) {
      exitTimelineRef.current.kill();
      exitTimelineRef.current = null;
    }

    setIsEntering(true);

    // Ensure overlay is visible and columns are in "closed" state (full black screen)
    gsap.set(overlayRef.current, {
      display: "block",
      opacity: 1,
      zIndex: 9999,
    });

    // Force columns to full width (covered) before starting to shrink
    gsap.set(columnsRef.current, {
      scaleX: 1,
      opacity: 1,
      transformOrigin: "right center", // Ensure origin is consistent
    });

    // Create entrance animation timeline
    entranceTimelineRef.current = gsap.timeline({
      onComplete: () => {
        cleanup();
      },
    });

    // Animate columns shrinking horizontally towards right edge
    // Reversing the exit animation: Exit was scaleX 0.03 -> 1. Entrance is 1 -> 0.03.
    // Exit stagger was 0.03. We use the same stagger.
    entranceTimelineRef.current.to(columnsRef.current, {
      scaleX: 0.03, // Shrink to very thin lines
      duration: 0.8,
      ease: "power2.inOut",
      opacity: 1,
      stagger: 0.03, // Match exit stagger
      delay: 0.1, // Small delay
    });

    // Emergency cleanup timeout
    cleanupTimeoutRef.current = setTimeout(() => {
      forceCleanup();
    }, 5000);
  }, [cleanup, forceCleanup, createColumns]);

  // Start Transition: This is called when user clicks a link
  const startTransition = useCallback(
    (href: string) => {
      // Prevent multiple simultaneous transitions
      if (isTransitioning) {
        return;
      }

      // Don't navigate if already on this page
      if (href === pathname) {
        return;
      }

      setIsTransitioning(true);
      setPendingNavigation(href);

      // Start exit animation immediately
      createColumns();
      playExitAnimation();
    },
    [isTransitioning, pathname, createColumns, playExitAnimation],
  );

  // End Transition: Called by page components
  const endTransition = useCallback(() => {
    // This will be handled by pathname change useEffect
  }, []);

  // Watch for pathname changes to trigger entrance animation
  useEffect(() => {
    // Skip on initial mount
    if (previousPathnameRef.current === "") {
      previousPathnameRef.current = pathname;
      return;
    }

    // TRIGGER ENTRANCE: If pathname has changed and we are in transition mode
    // We don't wait for 'isCovered' here because the route change might happen
    // slightly before state updates propagate.
    // If isTransitioning is true, we assume we need to play the entrance.
    if (previousPathnameRef.current !== pathname && isTransitioning) {
      setPendingNavigation(null); // Clear pending navigation

      // Force covered state visually if not already set (safety)
      if (overlayRef.current) {
        gsap.set(overlayRef.current, {
          display: "block",
          opacity: 1,
          zIndex: 9999,
        });
        if (columnsRef.current.length > 0) {
          gsap.set(columnsRef.current, { scaleX: 1, opacity: 1 });
        }
      }

      // Play entrance animation immediately (Next.js has already mounted the new page component)
      playEntranceAnimation();
    }

    previousPathnameRef.current = pathname;
  }, [pathname, isTransitioning, playEntranceAnimation]);

  // New page marks itself as ready when mounted
  useEffect(() => {
    if (isTransitioning && isCovered) {
      // Mark page as ready after a reasonable mount time
      pageReadyTimeoutRef.current = setTimeout(() => {
        setPageReady(true);
      }, 150); // Give page 150ms to mount

      return () => {
        clearTimeoutRef(pageReadyTimeoutRef);
      };
    }

    return () => {
      clearTimeoutRef(pageReadyTimeoutRef);
    };
  }, [isTransitioning, isCovered]);

  // Initialize and cleanup GSAP context
  useEffect(() => {
    return () => {
      if (gsapContextRef.current) {
        gsapContextRef.current.revert();
      }
      cleanup();
    };
  }, [cleanup]);

  // Development debugging
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Development state can be monitored here if needed
    }
  }, [
    isTransitioning,
    isExiting,
    isEntering,
    isCovered,
    pageReady,
    pathname,
    pendingNavigation,
  ]);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        isExiting,
        isEntering,
        isCovered,
        pageReady,
        startTransition,
        endTransition,
        forceCleanup,
      }}
    >
      <div className="relative">
        {children}

        {/* Shutter Overlay */}
        <div
          ref={overlayRef}
          className="shutter-overlay"
          style={{
            // Control display via state to prevent React from hiding it during re-renders
            display: isTransitioning || isCovered ? "block" : "none",
            pointerEvents: "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
          }}
        />
      </div>
    </TransitionContext.Provider>
  );
}
