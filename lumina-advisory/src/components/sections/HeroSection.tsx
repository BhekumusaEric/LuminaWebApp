"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE, FOUNDER } from "@/lib/data";

/**
 * HeroSection
 * Home page hero. Loop video background overlayed with navy glassmorphism.
 * - Primary CTA: Book Free Discovery Call → Calendly
 * - Secondary CTA: Work With Us → /services
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0F172A] text-white flex items-center pt-20 overflow-hidden">
      {/* Background Video with Backdrop Overlay */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-70"
        >
          <source
            src="https://cdn.pixabay.com/video/2016/02/29/2340-157269921_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Sleek top-to-bottom gradient overlay to preserve text readability and blend headers/footers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/50 to-[#0F172A]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 w-full text-center flex flex-col items-center justify-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-[#C9A227] font-semibold uppercase tracking-widest text-sm mb-4">
            Lumina Advisory
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-heading max-w-3xl">
            Where ambition meets intentional growth.
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            A growth-focused consultancy supporting individuals and organisations
            through career growth, strategic advisory, leadership development,
            facilitation, and meaningful transformation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={SITE.calendly} variant="primary" external>
              Book Free Discovery Call
            </Button>
            <Button href="/services" variant="outline">
              Work With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
