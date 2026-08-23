"use client";

import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/Button";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { QUICK_FACTS, WHY_LUMINA } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HomePage() {
  // Enable scroll snapping on homepage
  useEffect(() => {
    document.documentElement.classList.add('snap-enabled');
    return () => {
      document.documentElement.classList.remove('snap-enabled');
    };
  }, []);
  // Animation variants for cards sliding in from left
  const cardVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  // Animation variants for fading in
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  // Staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <div className="snap-section">
        <HeroSection />
      </div>

      <section className="snap-section bg-[#f6f3ee] px-6 py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-[#1d1b18] md:text-4xl">
              QUICK FACTS
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {QUICK_FACTS.map((fact, index) => (
              <motion.div
                key={fact.title}
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="flex h-full flex-col rounded-[1.6rem] border border-[#e7e0d7] bg-white p-6 shadow-[0_10px_28px_rgba(35,26,20,0.03)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(35,26,20,0.08)]"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15 + 0.3,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3e7ba] text-[#2B2118]"
                >
                  <LucideIcon name={fact.icon} size={22} />
                </motion.div>
                <h3 className="mb-3 text-lg font-bold leading-tight text-[#2B2118]">
                  {fact.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4B4B4B]">{fact.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="snap-section">
        <TestimonialsSection />
      </div>

      <section className="snap-section relative bg-[#f9f7f4] px-6 py-20 md:py-24 overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f3e7ba]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[1.05fr_0.95fr_1.1fr] lg:items-stretch lg:justify-between">
          {/* Left Column - About Lumina */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9A227]"
            >
              ABOUT LUMINA
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-3xl font-bold leading-tight text-[#1d1b18] md:text-4xl"
            >
              ABOUT LUMINA
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-base leading-relaxed text-[#4a4641]"
            >
              Lumina Advisory, is a boutique advisory and development consultancy focused on people development, strategic facilitation, leadership, and organisational growth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-base leading-relaxed text-[#4a4641]"
            >
              At Lumina Advisory, we believe growth should be intentional. Whether you are navigating your career, developing as a leader, building confidence, or creating high-performing teams, Lumina exists to support growth that is both practical and impactful.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base leading-relaxed text-[#4a4641]"
            >
              We combine strategic insight, professional experience, and people-centered development to create spaces that inspire transformation personally and professionally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 rounded-[1.5rem] border border-[#e7e0d7] bg-[#f2eadf] p-5 shadow-sm"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2B2118]">
                KEY FOCUS AREAS
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#4a4641]">
                Career & Personal Development • Training & Skills Development • Programme Direction, Moderation & Hosting • Independent Consulting & Advisory • Strategic Facilitation & Team Alignment • Leadership Development
              </p>
            </motion.div>
          </motion.div>

          {/* Center Column - Image with decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#ebe0d2] bg-[#efe7de] shadow-[0_24px_70px_rgba(29,27,24,0.08)] lg:min-h-full"
          >
            <Image
              src="/images/stock/image12.png"
              alt="Lumina Advisory leader in a confident, professional office setting"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Right Column - Why Lumina */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-7 text-2xl font-bold leading-tight text-[#1d1b18] md:text-3xl"
            >
              WHY LUMINA?
            </motion.h3>
            <div className="space-y-4">
              {WHY_LUMINA.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut" as const
                  }}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.3 }
                  }}
                  className="rounded-[1.5rem] border border-[#e7e0d7] bg-white p-5 shadow-[0_8px_20px_rgba(29,27,24,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(29,27,24,0.08)]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3e7ba] text-[#2B2118]"
                    >
                      <LucideIcon name={pillar.icon} size={18} />
                    </motion.div>
                    <h4 className="text-lg font-bold text-[#2B2118]">{pillar.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-[#4a4641]">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="snap-section relative bg-[#2B2118] px-6 py-20 text-white md:py-24 overflow-hidden">
        {/* Animated background gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A227]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f3e7ba]/10 rounded-full blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-3xl font-bold tracking-[-0.05em] md:text-5xl"
          >
            READY TO UNLOCK YOUR POTENTIAL?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            Whether you're developing leaders, strengthening teams, or navigating organisational change, Lumina Advisory is here to help you achieve meaningful and lasting impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <Button 
              href="/contact" 
              variant="primary" 
              className="bg-[#C9A227] px-8 py-4 text-sm font-semibold tracking-[0.18em] hover:bg-[#b8911f] transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(201,162,39,0.3)]"
            >
              SCHEDULE A DISCOVERY CALL
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
