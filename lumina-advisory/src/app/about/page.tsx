"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FOUNDER, MISSION_VISION } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/**
 * ABOUT PAGE — editorial dark treatment
 * ─────────────────────────────────────────────────────────────
 * 1. PageHero
 * 2. Who We Are — centered editorial paragraph block
 * 3. Mission / Vision — 2-column numbered manifesto (not cards)
 * 4. Our Founder — portrait + bio + hairline-separated timeline
 * 5. Final CTA — floating dark glass
 * ───────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="ABOUT LUMINA ADVISORY"
        subheading="Where ambition meets intentional growth."
        backgroundImage="/images/heroes/about.jpg"
      />

      {/* ─── WHO WE ARE — 2 column, image accent ─── */}
      <section className="lumina-section">
        <div className="lumina-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
            {/* Visual accent */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: EASE }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] border border-[#C8A24C]/20 shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
            >
              <Image
                src="/images/stock/image8.jpeg"
                alt="Lumina Advisory at work — strategy, coaching, and human development"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#08060a]/70 via-[#08060a]/15 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/85">
                <span className="h-px w-8 bg-[#C8A24C]" />
                <span>Boutique. Focused. Human.</span>
              </div>
            </motion.div>

            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: EASE }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C8A24C]/60" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                  Who We Are
                </span>
              </div>

              <h2 className="mb-8 text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
                A boutique advisory built on <span className="lumina-shimmer">intention</span>.
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-white/80 md:text-lg">
                {MISSION_VISION.whoWeAre?.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
                    className="text-balance-justify"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="lumina-section">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Mission & Vision
              </span>
            </div>
            <h2 className="text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Why we exist, where we&apos;re going.
            </h2>
          </motion.div>

          <div className="grid gap-0 md:grid-cols-2">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
              className="group border-t border-white/10 py-10 pr-0 md:border-r md:pr-10"
            >
              <span className="mb-8 block font-mono text-sm tabular-nums text-[#C8A24C]">01</span>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8A24C]/15 text-[#D8B96F] transition-colors group-hover:bg-[#C8A24C]/25">
                  <LucideIcon name="Target" size={22} />
                </div>
                <h3 className="min-w-0 flex-1 text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-white md:text-2xl">
                  Our Mission
                </h3>
              </div>
              <p className="text-balance-justify text-base leading-relaxed text-white/75 md:text-lg">
                {MISSION_VISION.mission}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="group border-t border-white/10 py-10 md:pl-10"
            >
              <span className="mb-8 block font-mono text-sm tabular-nums text-[#C8A24C]">02</span>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8A24C]/15 text-[#D8B96F] transition-colors group-hover:bg-[#C8A24C]/25">
                  <LucideIcon name="Eye" size={22} />
                </div>
                <h3 className="min-w-0 flex-1 text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-white md:text-2xl">
                  Our Vision
                </h3>
              </div>
              <p className="text-balance-justify text-base leading-relaxed text-white/75 md:text-lg">
                {MISSION_VISION.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER ─── */}
      <section className="lumina-section">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Our Founder
              </span>
            </div>
            <h2 className="text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Meet {FOUNDER.name.split(" ")[0]}.
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: EASE }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] border border-[#C8A24C]/20 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
                <Image
                  src={FOUNDER.image}
                  alt={`${FOUNDER.name} — ${FOUNDER.title}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060a]/45 via-transparent to-transparent" />
              </div>

              {/* Attribution — hairline style */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                className="mt-6 border-t border-white/10 pt-5"
              >
                <h3 className="text-lg font-bold uppercase tracking-[-0.02em] text-white md:text-xl">
                  {FOUNDER.name}
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D8B96F]">
                  {FOUNDER.qualifications}
                </p>
                <p className="mt-2 text-sm text-white/65">{FOUNDER.title}</p>
              </motion.div>
            </motion.div>

            {/* Bio + Career */}
            <div className="flex flex-col justify-center">
              <div className="space-y-5 text-base leading-relaxed text-white/80 md:text-lg">
                {FOUNDER.detailedBio.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
                    className="text-balance-justify"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Career journey — hairline rows */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                className="mt-12"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#C8A24C]/60" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                    Career Journey
                  </span>
                </div>
                <ul className="border-t border-white/10">
                  {FOUNDER.timeline.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
                      className="flex items-baseline gap-6 border-b border-white/10 py-4 text-sm text-white/80 md:text-base"
                    >
                      <span className="text-xs font-mono tabular-nums text-[#C8A24C]/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="lumina-section flex items-center">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE }}
            className="lumina-glass-dark mx-auto max-w-3xl px-8 py-14 text-center md:px-14 md:py-20"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              Let&apos;s Talk
            </p>
            <h2 className="mb-5 text-3xl font-bold uppercase tracking-[-0.02em] text-white md:text-4xl">
              Ready to <span className="lumina-shimmer">work</span> with us?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Book a discovery call to explore how Lumina can support your next chapter.
            </p>
            <Button href="/contact" variant="primary">
              Schedule a Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
