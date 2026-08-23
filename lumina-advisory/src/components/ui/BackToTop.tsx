"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "./LucideIcon";

/**
 * BackToTop Button
 * ─────────────────────────────────────────────────────────────
 * Appears after user scrolls 50% down the page.
 * Smooth scroll to top on click.
 * Circular button with arrow icon and subtle animations.
 * ─────────────────────────────────────────────────────────────
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 50% of page height
      const scrolled = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrolled / pageHeight) * 100;
      
      setIsVisible(scrollPercentage > 50);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" as const }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227] text-white shadow-[0_8px_24px_rgba(201,162,39,0.4)] transition-shadow hover:shadow-[0_12px_32px_rgba(201,162,39,0.5)]"
          aria-label="Back to top"
        >
          <LucideIcon name="ArrowUp" size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
