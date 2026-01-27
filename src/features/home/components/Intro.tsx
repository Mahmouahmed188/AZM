"use client";

import React from "react";
import IntroSection1 from "./intro/IntroSection1";

interface IntroProps {
  onComplete: () => void;
}

/**
 * Main Intro Component
 * Displays the intro animation with logo rising from behind planet horizon
 */
const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  return <IntroSection1 onComplete={onComplete} />;
};

export default Intro;