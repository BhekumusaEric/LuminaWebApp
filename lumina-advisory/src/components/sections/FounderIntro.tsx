"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FOUNDER } from "@/lib/data";

import { Button } from "@/components/ui/Button";

/**
 * FounderIntro (now About & Founder combo)
 * 3-column layout on desktop: About Text | Founder Image | Founder Text
 */
export default function FounderIntro() {
  return (
    <section className="bg-[#F8F7F4] py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        
        {/* Left Column: About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <p className="text-[#C9A227] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            ABOUT LUMINA ADVISORY
          </p>
          <h2 className="text-5xl md:text-6xl font-heading text-[#2D2D2D] mb-6 leading-tight">
            Empowering meaningful transformation.
          </h2>
          <p className="text-[#666666] leading-relaxed mb-8 font-body">
            We are a boutique leadership and development consultancy
            focused on empowering individuals, teams, and organisations
            through intentional growth, leadership development, and
            people-centred transformation.
          </p>
          <Link
            href="/about"
            className="text-[#C9A227] text-xs font-bold uppercase tracking-widest hover:text-[#b8911f] transition-colors flex items-center gap-2 w-fit"
          >
            LEARN MORE ABOUT US <span className="text-lg leading-none">→</span>
          </Link>
        </motion.div>

        {/* Center Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-[450px] md:h-[600px] w-full"
        >
          {/* We use object-contain and bottom-0 to have the portrait rest on the bottom like the mockup */}
          <Image
            src={FOUNDER.image}
            alt={FOUNDER.name}
            fill
            className="object-cover md:object-contain object-bottom"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>

        {/* Right Column: Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col"
        >
          <p className="text-[#C9A227] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            THE FOUNDER
          </p>
          <h2 className="text-5xl md:text-6xl font-heading text-[#2D2D2D] mb-6 leading-tight">
            I’m passionate about seeing people win.
          </h2>
          <p className="text-[#666666] leading-relaxed mb-4 font-body">
            Yolandi is a leadership and development professional,
            facilitator, consultant, and entrepreneur with a passion
            for helping individuals and organisations unlock their
            full potential.
          </p>
          <p className="text-[#666666] leading-relaxed mb-8 font-body">
            With extensive experience in consulting, banking,
            leadership development, and strategic transformation,
            she brings a unique blend of corporate expertise and
            people-centred insight to every engagement.
          </p>
          <div>
            <Button href="/about" variant="outline">
              READ YOLANDI'S FULL STORY
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
