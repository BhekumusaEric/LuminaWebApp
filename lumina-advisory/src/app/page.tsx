"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/Button";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { SERVICES, WHY_LUMINA, TESTIMONIALS } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect } from "react";

/**
 * HOMEPAGE — editorial landing page
 * ─────────────────────────────────────────────────────────────
 * 1. Hero                — visual first impression
 * 2. Manifesto           — the belief, the promise, in one line
 * 3. Practice Areas      — six ways Lumina helps (editorial list)
 * 4. Approach            — three commitments (numbered manifesto)
 * 5. By the Numbers      — credibility credentials as display facts
 * 6. Featured Voice      — one pulled testimonial
 * 7. Final CTA           — call to book a discovery call
 *
 * Every section is snap-target 100vh. All content sits on the
 * shared GlobalBackdrop (no per-section backgrounds fight it).
 * Motion timing uses cubic-bezier [0.22, 1, 0.36, 1] — the same
 * cinematic ease we use on /services, /testimonials, /contact.
 * ───────────────────────────────────────────────────────────── */

// Numbers surfaced as editorial credentials. Curated for display,
// not just pulled raw from QUICK_FACTS (those titles are too long).
const CREDENTIALS = [
  { number: "100%", label: "Black South African", sub: "female-owned consultancy" },
  { number: "10+", label: "Years", sub: "corporate & consulting experience" },
  { number: "MBA", label: "Cum Laude", sub: "leadership expertise" },
  { number: "Level 1", label: "BBBEE", sub: "verified consultancy" },
];

// Featured pull-quote — first testimonial has the strongest arc.
const FEATURED_TESTIMONIAL = TESTIMONIALS[0];

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

      {/* ────────────────────────  2. MANIFESTO  ──────────────────────── */}
      <section className="snap-section lumina-section">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="mx-auto max-w-5xl text-center"
          >
            <div className="mb-8 inline-flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Our Manifesto
              </span>
              <span className="h-px w-12 bg-[#C8A24C]/60" />
            </div>

            <p className="mb-10 text-3xl font-bold uppercase leading-[1.1] tracking-[-0.03em] text-white md:text-5xl lg:text-[3.5rem]">
              We believe growth should be{" "}
              <span className="lumina-shimmer">intentional</span>.
            </p>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              Lumina Advisory partners with individuals, teams, and organisations to unlock
              what's already there — turning ambition into direction, potential into practice,
              and intention into transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────  3. PRACTICE AREAS  ──────────────────────── */}
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

      {/* ────────────────────────  4. APPROACH  ──────────────────────── */}
      <section className="snap-section lumina-section relative isolate overflow-hidden">
        {/* Atmospheric background — very low opacity so type stays crisp */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/images/heroes/growth-ambient.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,10,0.85)_0%,rgba(8,6,10,0.72)_50%,rgba(8,6,10,0.9)_100%)]" />
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
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Three commitments that guide our work.
            </h2>
          </motion.div>

          <div className="grid gap-0 lg:grid-cols-3">
            {WHY_LUMINA.map((pillar, i) => (
              <motion.div
                key={pillar.title}
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
                    <LucideIcon name={pillar.icon} size={22} />
                  </div>
                  <h3 className="min-w-0 flex-1 text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-white md:text-2xl">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-white/75">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 border-t border-white/10 pt-8"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D8B96F] transition-colors hover:text-white"
            >
              Learn more about Lumina
              <LucideIcon
                name="ArrowRight"
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────  5. BY THE NUMBERS  ──────────────────────── */}
      <section className="snap-section lumina-section">
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
              Credentials that stand.
            </h2>
          </motion.div>

          <div className="grid gap-0 border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((c, i) => (
              <motion.div
                key={c.label + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                className="group border-b border-white/10 px-2 py-10 transition-colors md:border-r md:last:border-r-0 md:px-6 lg:px-8"
              >
                <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A24C]/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mb-3 text-5xl font-bold leading-none tracking-[-0.04em] text-white md:text-6xl lg:text-[4.5rem]">
                  {c.number}
                </p>
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#D8B96F]">
                  {c.label}
                </p>
                <p className="text-sm leading-relaxed text-white/60">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────  6. FEATURED VOICE (magazine profile)  ──────────────────────── */}
      <section className="snap-section lumina-section">
        <div className="lumina-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
            {/* Portrait — warm-framed, moody */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: EASE }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] border border-[#C8A24C]/20 shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
            >
              <Image
                src="/images/stock/image3.jpeg"
                alt="A client's story of growth with Lumina Advisory"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#08060a]/70 via-[#08060a]/15 to-transparent" />
              {/* Slide-style attribution stamp bottom-left */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/85">
                <span className="h-px w-8 bg-[#C8A24C]" />
                <span>A Client&apos;s Story</span>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: EASE }}
              className="flex flex-col justify-center py-4 lg:py-8"
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C8A24C]/60" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                  In Their Words
                </span>
              </div>

              <blockquote className="mb-10 text-2xl font-medium leading-[1.35] tracking-[-0.01em] text-white md:text-3xl lg:text-[2.15rem]">
                <span className="mr-1 text-[#C8A24C]" aria-hidden>
                  &ldquo;
                </span>
                {FEATURED_TESTIMONIAL.quote}
                <span className="ml-1 text-[#C8A24C]" aria-hidden>
                  &rdquo;
                </span>
              </blockquote>

              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C8A24C]/60" />
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D8B96F]">
                  {FEATURED_TESTIMONIAL.author}
                </p>
              </div>

              <Link
                href="/testimonials"
                className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D8B96F] transition-colors hover:text-white"
              >
                Read more stories
                <LucideIcon
                  name="ArrowRight"
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────  7. FINAL CTA  ──────────────────────── */}
      <section className="snap-section snap-section-full lumina-section relative flex items-center">
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
              Ready to <span className="lumina-shimmer">unlock</span> your potential?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Whether you're developing leaders, strengthening teams, or navigating
              organisational change, Lumina Advisory is here to help you achieve meaningful
              and lasting impact.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" variant="primary" className="px-8 py-4">
                Schedule a Discovery Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
