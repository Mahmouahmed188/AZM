"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageTransitionProps {
  isTriggered: boolean;
  onComplete: () => void;
}

export default function PageTransition({
  isTriggered,
  onComplete,
}: PageTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!isTriggered || !overlayRef.current) return;

    const numColumns = 12;
    const columns: HTMLDivElement[] = [];

    // Clear existing columns
    overlayRef.current.innerHTML = "";

    // Create columns
    for (let i = 0; i < numColumns; i++) {
      const column = document.createElement("div");
      column.className = "page-transition-column";
      overlayRef.current.appendChild(column);
      columns.push(column);
    }

    columnsRef.current = columns;

    // Initial setup - columns fill the screen
    gsap.set(columns, {
      height: "100vh",
      width: `${100 / numColumns}%`,
      backgroundColor: "#000000",
      position: "absolute",
      top: 0,
      transformOrigin: "center center",
    });

    // Position columns side by side
    columns.forEach((column, index) => {
      gsap.set(column, {
        left: `${(index * 100) / numColumns}%`,
      });
    });

    // Show overlay
    gsap.set(overlayRef.current, {
      display: "block",
      opacity: 1,
    });

    // Animate columns - staggered vertical shrink
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(overlayRef.current, { display: "none" });
        onComplete();
      },
    });

    // Stagger the column animations from center outwards
    const centerIndex = Math.floor(numColumns / 2);
    const animationOrder = [];

    // Create order from center outward
    for (let i = 0; i <= centerIndex; i++) {
      if (centerIndex - i >= 0) animationOrder.push(centerIndex - i);
      if (centerIndex + i < numColumns && i !== 0)
        animationOrder.push(centerIndex + i);
    }

    // Animate each column shrinking vertically
    animationOrder.forEach((index, position) => {
      tl.to(
        columns[index],
        {
          scaleY: 0,
          duration: 0.6,
          ease: "power2.inOut",
          opacity: 0,
        },
        position * 0.05, // Stagger delay
      );
    });

    return () => {
      // Cleanup
      if (overlayRef.current) {
        overlayRef.current.innerHTML = "";
      }
    };
  }, [isTriggered, onComplete]);

  return (
    <div
      ref={overlayRef}
      className="page-transition-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        display: "none",
        pointerEvents: "none",
      }}
    />
  );
}
