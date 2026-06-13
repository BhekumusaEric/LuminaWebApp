"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  headline: string;
  subheading?: string;
}

export function PageHero({ headline, subheading }: PageHeroProps) {
  return (
    <section className="relative w-full bg-[#0F172A] text-white px-6 py-20 md:py-28 overflow-hidden">
      {/* Subtle executive background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A] to-[#1E293B]/40 z-0" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 font-heading">
          {headline}
        </h1>
        {subheading && (
          <p className="text-lg md:text-xl text-[#C9A227] max-w-2xl font-medium">
            {subheading}
          </p>
        )}
      </motion.div>
    </section>
  );
}
