"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SERVICES } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * ServicesOverview
 * Displays all 6 services with staggered scroll reveal and premium card hover animations.
 * Each card links to /services#service-id.
 */
export default function ServicesOverview() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A]">How We Support Growth</h2>
        <p className="text-[#475569] max-w-xl mx-auto">
          Tailored services for individuals and organisations at every stage of their journey.
        </p>
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(201, 162, 39, 0.3)" }}
            className="bg-white rounded-2xl p-6 border border-[#0F172A]/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="text-[#C9A227] mb-4">
              <LucideIcon name={service.icon} size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#0F172A]">{service.title}</h3>
            <p className="text-[#475569] text-sm leading-relaxed flex-1 mb-6">
              {service.shortDescription}
            </p>
            <Link
              href={`/services#${service.id}`}
              className="text-[#C9A227] text-sm font-semibold hover:underline mt-auto self-start"
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
