"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FOUNDER } from "@/lib/data";

/**
 * FounderIntro
 * Brief founder introduction on the home page.
 * Portrait slides in from left, text details slide in from right.
 */
export default function FounderIntro() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Founder Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-[#0F172A]/10"
        >
          <Image
            src={FOUNDER.image}
            alt={FOUNDER.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#C9A227] font-semibold uppercase tracking-widest text-sm mb-3">
            Meet the Founder
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-[#0F172A]">{FOUNDER.name}</h2>
          <p className="text-[#475569] mb-1">{FOUNDER.title}</p>
          <p className="text-[#C9A227] font-medium mb-6">{FOUNDER.qualifications}</p>
          <p className="text-[#475569] leading-relaxed mb-8 text-sm">
            {FOUNDER.shortBio}
          </p>
          <Link
            href="/about"
            className="text-[#0F172A] font-semibold border-b-2 border-[#C9A227] pb-0.5 hover:text-[#C9A227] transition-colors"
          >
            Read More →
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
