"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/Button";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { SERVICES } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect } from "react";

/**
 * HOMEPAGE — editorial landing page
 * ─────────────────────────────────────────────────────────────
 * 1. Hero                — visual first impression
 * 2. Practice Areas      — six ways Lumina helps (editorial list)
 * 3. By the Numbers      — credibility credentials as display facts
 * 4. Trusted To Deliver Impact — auto-advancing testimonial carousel
 * 5. Final CTA           — call to book a discovery call
 *
 * The "Our Approach" / 3-pillar values section now lives only on
 * /about (as "Our Values") to avoid duplicating it on two pages.
 *
 * Every section is snap-target 100vh. All content sits on the
 * shared GlobalBackdrop (no per-section backgrounds fight it).
 * Motion timing uses cubic-bezier [0.22, 1, 0.36, 1] — the same
 * cinematic ease we use on /services, /about, /contact.
 * ───────────────────────────────────────────────────────────── */

// Numbers surfaced as editorial credentials. Curated for display,
// not just pulled raw from QUICK_FACTS (those titles are too long).
const CREDENTIALS = [
  { number: "100%", label: "Black South African", sub: "Female-Owned Consultancy" },
  { number: "9+", label: "Years", sub: "Corporate & Consulting Experience" },
  { number: "MBA", label: "Cum Laude", sub: "Digital Transformation" },
  { number: "BBBEE", label: "Level 1", sub: "Consultancy" },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function HomePage() {
  // Enable strict scroll snapping (defined in globals.css)
  useEffect(() => {
    document.documentElement.classList.add("snap-enabled");
    return () => {
      document.documentElement.classList.remove("snap-enabled");
    };
  }, []);

  return (
    <>
      {/* ────────────────────────  1. HERO  ──────────────────────── */}
      <div className="snap-section snap-section-full">
        <HeroSection />
      </div>

      {/* ────────────────────────  2. PRACTICE AREAS  ──────────────────────── */}
      <section className="snap-section lumina-section">
        <div className="lumina-container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
            {/* Left — sticky visual + heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              {/* Visual anchor — warm image with gold-tinted frame */}
              <div className="relative mb-8 aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] border border-[#C8A24C]/20 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/heroes/services.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060a]/70 via-[#08060a]/15 to-transparent" />
                {/* Small caption stamp bottom-left */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/85">
                  <span className="h-px w-8 bg-[#C8A24C]" />
                  <span>The Practice</span>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C8A24C]/60" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                  Practice Areas
                </span>
              </div>
              <h2 className="mb-6 text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
                Six ways we help you unlock what&apos;s next.
              </h2>
              <p className="mb-8 text-base leading-relaxed text-white/70 md:text-lg">
                From individual coaching to organisational transformation — a full spectrum
                of development, facilitation, and strategic advisory.
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D8B96F] transition-colors hover:text-white"
              >
                Explore all services
                <LucideIcon
                  name="ArrowRight"
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Right — numbered list of services */}
            <div>
              <ul className="border-t border-white/10">
                {SERVICES.map((service, i) => (
                  <motion.li
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: 0.08 * i, ease: "easeOut" as const }}
                    className="group border-b border-white/10"
                  >
                    <Link
                      href={`/services#${service.id}`}
                      className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-6 transition-colors md:py-7"
                    >
                      <span className="text-xs font-mono tabular-nums text-[#C8A24C]/60 transition-colors group-hover:text-[#C8A24C]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="mb-1 text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-white transition-colors md:text-2xl">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/60 transition-colors group-hover:text-white/85 md:text-base">
                          {service.shortDescription}
                        </p>
                      </div>
                      <LucideIcon
                        name="ArrowUpRight"
                        size={20}
                        className="text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D8B96F]"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────  3. BY THE NUMBERS  ──────────────────────── */}
      <section className="snap-section lumina-section relative isolate overflow-hidden">
        {/* Warm glow accents — brighter and more saturated so this section
            doesn't read as flat/dark next to the surrounding sections. */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div
            className="absolute -left-[12%] top-0 h-[520px] w-[520px] rounded-full blur-[130px]"
            style={{ background: "radial-gradient(circle, rgba(200,162,76,0.3) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -right-[10%] bottom-0 h-[560px] w-[560px] rounded-full blur-[140px]"
            style={{ background: "radial-gradient(circle, rgba(216,185,111,0.24) 0%, transparent 70%)" }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(200,162,76,0.08) 0%, transparent 65%)" }}
          />
        </div>

        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-14 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                By The Numbers
              </span>
              <span className="h-px w-12 bg-[#C8A24C]/60" />
            </div>
            <h2 className="text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Credentials that build.
            </h2>
          </motion.div>

          <div className="grid gap-0 overflow-hidden rounded-[1.5rem] border border-[#C8A24C]/20 bg-gradient-to-br from-[#C8A24C]/[0.08] via-white/[0.03] to-[#C8A24C]/[0.05] shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm md:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((c, i) => (
              <motion.div
                key={c.label + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group overflow-visible border-b border-[#C8A24C]/15 px-7 py-10 transition-colors hover:bg-[#C8A24C]/[0.08] md:border-r md:px-7 md:first:pl-9 md:last:border-r-0 md:last:pr-9 lg:px-9 lg:first:pl-10 lg:last:pr-10"
              >
                <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A24C]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className={`lumina-shimmer mb-3 inline-block overflow-visible px-1 pb-1 font-bold leading-[1.1] tracking-[-0.02em] ${
                    c.number.length > 4
                      ? "text-4xl md:text-5xl lg:text-6xl"
                      : "text-5xl md:text-6xl lg:text-[4.5rem]"
                  }`}
                >
                  {c.number}
                </p>
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#D8B96F]">
                  {c.label}
                </p>
                <p className="text-sm leading-relaxed text-white/70">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────  4. TRUSTED TO DELIVER IMPACT (testimonials)  ──────────────────────── */}
      {/* Auto-advancing carousel (same component used on About) so testimonials
          slide on their own after a few seconds, as requested. Attribution is
          role-based (e.g. "Corporate Workshop Client") — Lumina the brand is
          the voice being trusted here, not Yolandi personally.
          `!pb-0` tightens the gap to the Final CTA right below it (Home-only
          override — About still uses the component's default spacing). */}
      <div className="[&>section]:!pb-0">
        <TestimonialsSection
          eyebrow="Trusted To Deliver Impact"
          heading="Hear from the people we've partnered with."
          footerLink={{ href: "/about#testimonials", label: "Read more stories" }}
        />
      </div>

      {/* ────────────────────────  5. FINAL CTA  ──────────────────────── */}
      {/* Dropped the `snap-section` class here — it enforces min-height:100vh
          and vertically centers the card, which was the real source of the
          large blank gap before the Footer. This is the last section on the
          page so it doesn't need scroll-snap targeting. Padding tightened too. */}
      <section className="lumina-section relative flex items-center !pt-6 !pb-6 md:!pt-8 md:!pb-8">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE }}
            className="lumina-glass-dark mx-auto max-w-4xl px-8 py-14 text-center md:px-14 md:py-20"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              Let's Begin
            </p>
            <h2 className="mb-5 text-3xl font-bold uppercase tracking-[-0.03em] text-white md:text-5xl">
              Ready to turn <span className="lumina-shimmer">ambition</span> into action?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Whether you're looking to develop your people, strengthen leadership,
              facilitate meaningful conversations, or navigate your next career move,
              Lumina Advisory is ready to partner with you.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" variant="primary" className="px-8 py-4">
                Get in touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
