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
          className="absolute min-w-full min-h-full object-cover opacity-15"
        >
          <source
            src="https://cdn.pixabay.com/video/2016/02/29/2340-157269921_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Sleek mesh-like gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#C9A227] font-semibold uppercase tracking-widest text-sm mb-4">
            Lumina Advisory
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-heading">
            Where ambition meets intentional growth.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
            A growth-focused consultancy supporting individuals and organisations
            through career growth, strategic advisory, leadership development,
            facilitation, and meaningful transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={SITE.calendly} variant="primary" external>
              Book Free Discovery Call
            </Button>
            <Button href="/services" variant="outline">
              Work With Us
            </Button>
          </div>
        </motion.div>

        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 hidden md:block"
        >
          <Image
            src={FOUNDER.image}
            alt={FOUNDER.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
