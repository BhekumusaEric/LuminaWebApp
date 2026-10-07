"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FOUNDER, MISSION_VISION, CORE_VALUES, TRUSTED_BY } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/**
 * ABOUT PAGE — editorial dark treatment
 * ─────────────────────────────────────────────────────────────
 * 1. PageHero
 * 2. Who We Are — centered editorial paragraph block
 * 3. The Values That Guide Us — 3-column numbered manifesto
 * 4. Our Founder — portrait + bio + hairline-separated timeline
 * 5. Trusted By — client/partner logo strip
 * 6. In Their Words — testimonials (moved here from the former
 *    standalone /testimonials page)
 * 7. Final CTA — floating dark glass
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

      {/* ─── THE VALUES THAT GUIDE US ─── */}
      {/* Atmospheric background treatment (ported from Home's former
          "Our Approach" section, which was removed to avoid duplicating
          this exact 3-pillar content on two pages). */}
      <section className="lumina-section relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/images/heroes/growth-ambient.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,10,0.85)_0%,rgba(8,6,10,0.4)_35%,rgba(8,6,10,0.4)_65%,rgba(8,6,10,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(8,6,10,0.55)_100%)]" />
        </div>

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
                Our Values
              </span>
            </div>
            <h2 className="text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              The values that guide us.
            </h2>
          </motion.div>

          <div className="grid gap-0 lg:grid-cols-3">
            {CORE_VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
                className="group relative border-t border-white/10 py-10 pr-8 lg:border-r lg:border-t lg:pr-10 lg:pl-8 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="mb-8 block font-mono text-sm tabular-nums text-[#C8A24C]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8A24C]/15 text-[#D8B96F] transition-colors group-hover:bg-[#C8A24C]/25">
                    <LucideIcon name={value.icon} size={22} />
                  </div>
                  <h3 className="min-w-0 flex-1 text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-white md:text-2xl">
                    {value.title}
                  </h3>
                </div>

                <p className="text-balance-justify text-base leading-relaxed text-white/75 md:text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
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

          {/* Grid ratio nudged toward the portrait (was 4fr/7fr) and bio
              text sized down slightly so the two columns read as a closer
              height match, since the portrait's aspect ratio is fixed. */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
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
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060a]/45 via-transparent to-transparent" />
              </div>

              {/* Attribution — centered directly under the portrait */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                className="mt-6 border-t border-white/10 pt-5 text-center"
              >
                <h3 className="text-lg font-bold uppercase tracking-[-0.02em] text-white md:text-xl">
                  {FOUNDER.name}
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D8B96F]">
                  ({FOUNDER.qualifications})
                </p>
                <p className="mt-2 text-sm text-white/65">{FOUNDER.title}</p>
              </motion.div>
            </motion.div>

            {/* Bio — top-aligned so it starts level with the portrait's
                top edge, instead of vertically centering against the
                taller portrait+attribution block. */}
            <div className="flex flex-col justify-start">
              <div className="space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
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
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      {/* Tightened vertical padding — this section is just a logo strip,
          it doesn't need the full lumina-section spacing on either side. */}
      <section className="lumina-section !py-4 md:!py-5">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-4 flex items-center justify-center gap-4 text-center"
          >
            <span className="h-px w-12 bg-[#C8A24C]/60" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              Trusted By
            </span>
            <span className="h-px w-12 bg-[#C8A24C]/60" />
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {TRUSTED_BY.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="flex h-14 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                {/* Logo assets not yet supplied — name-chip fallback keeps this
                    section intentional-looking until real logos are provided. */}
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IN THEIR WORDS (testimonials, moved here from /testimonials) ─── */}
      {/* `!pb-0` tightens the gap to the Final CTA right below it (About-only
          override — Home's usage of this component keeps its own spacing). */}
      <div id="testimonials" className="[&>section]:!pb-0">
        <TestimonialsSection
          eyebrow="In Their Words"
          heading="The impact of our work."
          intro="From professionals navigating career growth to organisations developing their people and leaders, our work is centred on creating meaningful, practical impact."
        />
      </div>

      {/* ─── FINAL CTA ─── */}
      <section className="lumina-section flex items-center !pt-10 !pb-10 md:!pt-12 md:!pb-12">
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
              Let&apos;s explore how Lumina Advisory can support your growth, your people
              or your organisation.
            </p>
            <Button href="/contact" variant="primary">
              Get in touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
