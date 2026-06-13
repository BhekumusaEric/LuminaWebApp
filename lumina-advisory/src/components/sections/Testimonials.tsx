"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TESTIMONIALS } from "@/lib/data";

/**
 * Testimonials
 * Staggered entry list of testimonials with gold stars and hover scaling.
 */
export default function Testimonials() {
  return (
    <SectionWrapper dark>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What People Are Saying
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {TESTIMONIALS.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            whileHover={{ y: -6, scale: 1.015, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300"
          >
            {/* Star rating */}
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-[#C9A227]">★</span>
              ))}
            </div>
            <p className="text-white/80 text-sm leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            <p className="text-[#C9A227] text-sm font-semibold mt-auto">
              {testimonial.author}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
