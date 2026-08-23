"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { SITE } from "@/lib/data";

/**
 * MobileCallButton
 * ─────────────────────────────────────────────────────────────
 * Floating call button visible only on mobile devices.
 * Positioned at bottom-left for easy thumb access.
 * Click-to-call functionality for instant communication.
 * ─────────────────────────────────────────────────────────────
 */
export default function MobileCallButton() {
  return (
    <motion.a
      href={SITE.phoneLink}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-8 z-40 md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2B2118] to-[#1a130e] text-white shadow-[0_8px_24px_rgba(43,33,24,0.4)] ring-2 ring-[#C9A227]/30 transition-shadow hover:shadow-[0_12px_32px_rgba(43,33,24,0.5)]"
      aria-label="Call us"
    >
      <LucideIcon name="Phone" size={22} />
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#C9A227] opacity-20 animate-ping" />
    </motion.a>
  );
}
