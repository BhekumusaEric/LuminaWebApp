"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { FOUNDER, MISSION_VISION } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <PageHero
        headline="ABOUT LUMINA ADVISORY"
        subheading="Where ambition meets intentional growth"
      />

      {/* Who We Are Section */}
      <section className="bg-[#f9f7f4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-[-0.05em] text-[#1d1b18] md:text-4xl">
              WHO WE ARE
            </h2>
          </motion.div>

          <div className="space-y-6 text-base leading-relaxed text-[#4a4641] md:text-lg">
            {MISSION_VISION.whoWeAre?.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#2B2118] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]/20">
                <LucideIcon name="Target" size={32} className="text-[#C9A227]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-[-0.05em] md:text-3xl">
                OUR MISSION
              </h3>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                {MISSION_VISION.mission}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]/20">
                <LucideIcon name="Eye" size={32} className="text-[#C9A227]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-[-0.05em] md:text-3xl">
                OUR VISION
              </h3>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                {MISSION_VISION.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#f6f3ee] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-[#1d1b18] md:text-4xl">
              OUR FOUNDER
            </h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-[#ebe0d2] bg-[#efe7de] shadow-[0_24px_70px_rgba(29,27,24,0.08)]">
                <Image
                  src={FOUNDER.image}
                  alt={`${FOUNDER.name} - ${FOUNDER.title}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl font-bold text-[#1d1b18]">
                  {FOUNDER.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                  {FOUNDER.qualifications}
                </p>
                <p className="mt-2 text-base text-[#4a4641]">
                  {FOUNDER.title}
                </p>
              </motion.div>
            </motion.div>

            {/* Founder Bio */}
            <div className="flex flex-col justify-center">
              <div className="space-y-5 text-base leading-relaxed text-[#4a4641]">
                {FOUNDER.detailedBio.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Career Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 rounded-[1.5rem] border border-[#e7e0d7] bg-white p-6"
              >
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A227]">
                  CAREER JOURNEY
                </h4>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER.timeline.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-[#e7e0d7] bg-[#f9f7f4] px-4 py-2 text-sm font-medium text-[#2B2118]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
