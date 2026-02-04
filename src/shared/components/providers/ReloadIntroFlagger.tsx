"use client";

import { useEffect } from "react";

const STORAGE_KEY = "azm:showIntroOnHome";

const ReloadIntroFlagger = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navigationType = navigationEntries[0]?.type;
    const isReload = navigationType === "reload";

    if (isReload) {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  }, []);

  return null;
};

export default ReloadIntroFlagger;
