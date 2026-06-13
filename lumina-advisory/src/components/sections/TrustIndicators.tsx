"use client";

import { motion } from "framer-motion";
import { TRUST_INDICATORS } from "@/lib/data";

/**
 * TrustIndicators
 * Horizontal strip of trust badges with staggered scroll reveals.
 * Update indicators in src/lib/data.ts → TRUST_INDICATORS array.
 */
export default function TrustIndicators() {
  return (
    <section className="bg-[#C9A227] py-6 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10"
      >
        {TRUST_INDICATORS.map((item) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="flex items-center gap-2"
          >
            <span className="text-[#0F172A] font-bold text-base">✓</span>
            <span className="text-[#0F172A] font-semibold text-sm">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
