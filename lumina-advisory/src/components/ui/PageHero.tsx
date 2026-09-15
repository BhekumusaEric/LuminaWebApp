"use client";

import { motion } from "framer-motion";
import { getImagePath } from "@/lib/data";

interface PageHeroProps {
  headline: string;
  subheading?: string;
  /**
   * Optional path to a hero background image (e.g. "/images/heroes/about.jpg").
   * Rendered underneath a warm-gradient overlay so text stays legible while
   * the photograph gives the page a distinctive atmosphere.
   */
  backgroundImage?: string;
}

/**
 * PageHero
 * ─────────────────────────────────────────────────────────────
 * Sub-page hero. Left-aligned within a max-width container.
 *
 * Layer stack (bottom → top):
 *   1. Solid dark base                     (#0a0806)
 *   2. Optional photograph (Ken Burns)     (soft slow pan/zoom)
 *   3. Two drifting gold glow orbs         (matches home hero language)
 *   4. Warm-to-dark gradient overlay       (readability)
 *   5. Headline + subheading content
 * ───────────────────────────────────────────────────────────── */
export function PageHero({ headline, subheading, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0a0806] px-6 pt-32 pb-20 text-white md:pt-36 md:pb-24">
      {/* Background photograph — subtle Ken Burns pan/zoom */}
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="hero-ken-burns absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url("${getImagePath(backgroundImage)}")` }}
          />
        </div>
      )}

      {/* Restrained warm glow orbs — subtle, not decorative */}
      <div
        className="hero-glow-a absolute -left-[12%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(184,144,32,0.15) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="hero-glow-b absolute -right-[10%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(200,171,86,0.10) 0%, transparent 70%)" }}
        aria-hidden
      />

      {/* Deep contrast wash — text stays crisp regardless of image */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,10,0.94)_0%,rgba(8,6,10,0.78)_50%,rgba(8,6,10,0.55)_100%)]"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-[-0.05em] md:text-5xl lg:text-6xl">
          {headline}
        </h1>
        {subheading && (
          <p className="max-w-3xl text-base font-medium leading-relaxed text-[#E0C76C] md:text-lg lg:text-xl">
            {subheading}
          </p>
        )}
      </motion.div>
    </section>
  );
}
