"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { WHY_LUMINA } from "@/lib/data";

/**
 * TESTIMONIALS PAGE ("What People Are Saying")
 * ─────────────────────────────────────────────────────────────
 * 1. PageHero
 * 2. WHY LUMINA — three glass-pillar cards (matches homepage)
 * 3. CLIENT SUCCESS STORIES — editorial testimonial carousel
 *    (via <TestimonialsSection />)
 * 4. CTA — Ready to Begin Your Journey (floating dark glass)
 * ─────────────────────────────────────────────────────────────
 */
export default function TestimonialsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <>
      <PageHero
        headline="WHAT PEOPLE ARE SAYING"
        subheading="Stories of growth, transformation, and impact."
        backgroundImage="/images/heroes/testimonials.jpg"
      />

      {/* WHY LUMINA — top block (mirrors the homepage pillars) */}
      <section className="lumina-section">
        <div className="lumina-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/50" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Why Lumina
              </span>
            </div>
            <h2 className="mb-5 text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Combining expertise, practical solutions, and a people-centred approach.
            </h2>
          </motion.div>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {WHY_LUMINA.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="lumina-glass-dark flex h-full items-start gap-4 p-6 md:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8A24C]/25 text-[#D8B96F] backdrop-blur-sm">
                  <LucideIcon name={pillar.icon} size={22} />
                </div>

                <div className="flex min-w-0 flex-col">
                  <h3 className="mb-2 text-lg font-bold leading-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT SUCCESS STORIES — editorial carousel */}
      <TestimonialsSection />

      {/* Closing CTA — floating dark glass card */}
      <section className="lumina-section flex items-center">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" as const }}
            className="lumina-glass-dark mx-auto max-w-3xl px-8 py-14 text-center md:px-14 md:py-20"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              Your Turn
            </p>
            <h2 className="mb-5 text-3xl font-bold uppercase tracking-[-0.02em] text-white md:text-4xl">
              Ready to <span className="lumina-shimmer">begin</span> your journey?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Join the professionals and organisations who have transformed their leadership,
              careers, and teams with Lumina Advisory.
            </p>
            <Button href="/contact" variant="primary">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
