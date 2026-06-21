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
    <section className="relative min-h-screen bg-[#F8F7F4] flex items-center pt-20">
      {/* Optional: subtle background gradient/shape on the left */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-white/50 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start text-left"
        >
          <h1 className="text-5xl md:text-7xl font-heading text-[#2D2D2D] leading-tight mb-8">
            Developing <span className="text-[#C9A227]">people.</span><br />
            Strengthening <span className="text-[#C9A227]">leaders.</span><br />
            Transforming <span className="text-[#C9A227]">organisations.</span>
          </h1>
          <p className="text-[#666666] text-[15px] leading-loose mb-12 max-w-xl font-body">
            Lumina Advisory partners with individuals, teams, and
            organisations to unlock potential, strengthen leadership,
            and drive meaningful transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              WORK WITH US
            </Button>
            <Button href="/services" variant="outline">
              EXPLORE SERVICES
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full relative h-[500px] md:h-[700px] rounded-none overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-[#2B2118]/10 before:z-10"
        >
          {/* Placeholder image resembling the mockup (workshop/presentation) */}
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt="Lumina Advisory Workshop"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
