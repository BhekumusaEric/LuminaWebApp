"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHY_LUMINA } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * WhyLumina
 * Three-pillar section with premium staggered scroll reveals and hover effects.
 */
export default function WhyLumina() {
  return (
    <SectionWrapper dark>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Work With Lumina
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {WHY_LUMINA.map((pillar) => (
          <motion.div
            key={pillar.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            whileHover={{ y: -6, scale: 1.015, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300"
          >
            <div className="text-[#C9A227] flex justify-center mb-4">
              <LucideIcon name={pillar.icon} size={36} />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{pillar.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
