"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { getImagePath } from "@/lib/data";
import { useState, useEffect } from "react";

/**
 * HeroSection
 * ─────────────────────────────────────────────────────────────
 * The GlobalBackdrop (rendered once in the root layout) provides
 * the ambient motion — animated orbs, particles, warm gradient.
 * So this hero stays lean:
 *   1. Optional real video overlay (if dropped at
 *      /public/videos/growth-tree.mp4, it will render on top of
 *      the shared backdrop).
 *   2. A soft vertical wash gradient for text contrast only.
 *   3. Foreground content with shimmer keyword highlights.
 *
 * Everything else (particles, glows, texture) comes through from
 * the GlobalBackdrop, so every section on the site shares a single
 * continuous atmosphere — the effect the portfolio reference uses.
 * ───────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [videoAvailable, setVideoAvailable] = useState(false);

  // Probe the video only in the browser; if it 404s, GlobalBackdrop shows through instead.
  useEffect(() => {
    let cancelled = false;
    const probe = document.createElement("video");
    probe.src = getImagePath("/videos/growth-tree.mp4");
    probe.onloadeddata = () => { if (!cancelled) setVideoAvailable(true); };
    probe.onerror = () => { if (!cancelled) setVideoAvailable(false); };
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20">
      {/* Optional real video — only renders when the file exists. */}
      {videoAvailable && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          aria-hidden
        >
          <source src={getImagePath("/videos/growth-tree.mp4")} type="video/mp4" />
          <source src={getImagePath("/videos/growth-tree.webm")} type="video/webm" />
        </video>
      )}

      {/* Background photograph — subtle Ken Burns pan/zoom.
          Hidden when the video is available so we don't stack unrelated imagery. */}
      {!videoAvailable && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="hero-ken-burns absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url("${getImagePath("/images/heroes/home-hero.jpg")}")` }}
          />
        </div>
      )}

      {/* Deep contrast wash — text-left legibility, image reads as atmosphere not subject */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,10,0.96)_0%,rgba(8,6,10,0.82)_45%,rgba(8,6,10,0.6)_100%)]"
        aria-hidden
      />

      {/* Foreground content */}
      <div className="lumina-container relative z-10 py-24 md:py-28">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C] sm:text-xs"
          >
            WHERE AMBITION MEETS INTENTIONAL GROWTH
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" as const }}
            className="mb-8 text-4xl font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-[5rem]"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="block"
            >
              DEVELOPING <span className="lumina-shimmer">PEOPLE</span>.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="block"
            >
              STRENGTHENING <span className="lumina-shimmer">LEADERS</span>.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="block"
            >
              TRANSFORMING <span className="lumina-shimmer">ORGANISATIONS</span>.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.9 }}
            className="mb-10 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg"
          >
            Lumina Advisory is a growth-focused consultancy partnering with individuals, teams,
            and organisations to unlock potential, develop people, strengthen leadership, and
            drive meaningful transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Button href="/contact" variant="primary" className="px-7 py-4">
              CONTACT US
            </Button>
            <Button href="/services" variant="outline" className="px-7 py-4">
              EXPLORE SERVICES
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
