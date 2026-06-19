"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE, FOUNDER } from "@/lib/data";

/**
 * HeroSection
 * Home page hero. Matches the wow document:
 * - Left: headline, subheading, dual CTAs
 * - Right: professional founder portrait with gold ring frame
 * - Dark navy video background for atmosphere
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0F172A] text-white flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-20"
        >
          <source
            src="https://cdn.pixabay.com/video/2016/02/29/2340-157269921_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70" />
      </div>

      {/* Gold decorative circle - top right */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full border border-[#C9A227]/10 translate-x-1/2 z-0" />
      <div className="absolute top-32 right-0 w-64 h-64 rounded-full border border-[#C9A227]/10 translate-x-1/2 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] font-semibold uppercase tracking-widest text-xs">
                Lumina Advisory
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading"
            >
              Where ambition meets{" "}
              <span className="text-[#C9A227]">intentional growth.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
            >
              A growth-focused consultancy supporting individuals and
              organisations through career growth, strategic advisory,
              leadership development, facilitation, and meaningful
              transformation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button href={SITE.calendly} variant="primary" external>
                Book Free Discovery Call
              </Button>
              <Button href="/services" variant="outline">
                Work With Us
              </Button>
            </motion.div>

            {/* Trust badge row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 flex items-center gap-6 text-white/40 text-xs uppercase tracking-widest"
            >
              <span>Level 1 BBBEE</span>
              <div className="w-1 h-1 rounded-full bg-[#C9A227]" />
              <span>MBA Cum Laude</span>
              <div className="w-1 h-1 rounded-full bg-[#C9A227]" />
              <span>Johannesburg</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Founder Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Outer gold ring */}
            <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border-2 border-[#C9A227]/30 animate-spin-slow" />
            {/* Inner gold ring */}
            <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-[#C9A227]/15" />

            {/* Portrait */}
            <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/40">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 280px, 340px"
              />
              {/* Bottom gradient for name badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

              {/* Name badge */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg font-heading">{FOUNDER.name}</p>
                <p className="text-[#C9A227] text-sm">{FOUNDER.title}</p>
              </div>
            </div>

            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-12 bg-[#C9A227] text-[#0F172A] px-4 py-3 rounded-xl shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-wider">MBA</p>
              <p className="text-xs font-semibold">Cum Laude</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
