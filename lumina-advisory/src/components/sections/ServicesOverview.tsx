"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SERVICES } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * ServicesOverview
 * Displays all 6 services with staggered scroll reveal and premium card hover animations.
 * Each card links to /services#service-id.
 */
export default function ServicesOverview() {
  return (
    <section className="bg-[#F8F7F4] py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <p className="text-[#C9A227] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-5xl md:text-6xl font-heading text-[#2D2D2D]">
            Solutions that empower growth and drive results.
          </h2>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id} yOffset={20}>
              <div
                className="bg-white rounded-none p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center h-full hover:scale-[1.01]"
              >
                <div className="text-[#C9A227] mb-6 flex items-center justify-center">
                  <LucideIcon name={service.icon} size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-[#2D2D2D]">{service.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed flex-1 font-body">
                  {service.shortDescription}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="flex justify-center">
          <Button href="/services" variant="outline">
            VIEW ALL SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
}
