"use client";

import { useEffect } from "react";

/**
 * ScrollSnapController
 * Dynamically adds 'snap-enabled' class to the html element
 * on mount, and cleans it up when unmounted.
 */
export function ScrollSnapController() {
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.add("snap-enabled");

    return () => {
      htmlElement.classList.remove("snap-enabled");
    };
  }, []);

  return null;
}
