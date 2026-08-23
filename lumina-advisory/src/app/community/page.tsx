"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { COMMUNITY_BENEFITS, SITE } from "@/lib/data";

export default function CommunityPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <>
      <PageHero
        headline="JOIN THE LUMINA COMMUNITY"
        subheading="A growth-focused space for ambitious individuals"
      />

      {/* Community Introduction */}
      <section className="bg-[#f9f7f4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-[-0.05em] text-[#1d1b18] md:text-4xl">
              THE LUMINA PERSONAL DEVELOPMENT COMMUNITY
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#4a4641] md:text-lg">
              <p>
                The Lumina Personal Development Community is a growth-focused space for
                ambitious individuals committed to becoming the next version of themselves.
              </p>
              <p>
                This community was created to support personal and professional growth
                through meaningful conversations, shared experiences, practical resources,
                and intentional development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-[#1d1b18] md:text-4xl">
              WHAT YOU CAN EXPECT
            </h2>
            <p className="text-base text-[#4a4641] md:text-lg">
              Join a vibrant community dedicated to growth and transformation
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="rounded-[1.6rem] border border-[#e7e0d7] bg-[#f9f7f4] p-6 shadow-[0_10px_28px_rgba(35,26,20,0.03)] transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(35,26,20,0.08)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A227]/10">
                  <LucideIcon name={benefit.icon} size={28} className="text-[#C9A227]" />
                </div>
                <h3 className="text-lg font-bold leading-tight text-[#2B2118]">
                  {benefit.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-[#f6f3ee] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-[-0.05em] text-[#1d1b18] md:text-4xl">
              UPCOMING EVENTS
            </h2>
            <div className="rounded-[2rem] border border-[#e7e0d7] bg-white p-8 md:p-12">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]/10">
                  <LucideIcon name="Calendar" size={32} className="text-[#C9A227]" />
                </div>
              </div>
              <p className="mb-2 text-lg font-semibold text-[#2B2118]">
                Events Coming Soon
              </p>
              <p className="text-base leading-relaxed text-[#4a4641]">
                We're planning exciting community events, workshops, and coaching
                sessions. Join the community to be the first to know when events are
                announced!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2B2118] via-[#342820] to-[#2B2118] px-6 py-20 text-white md:py-28">
        {/* Decorative elements */}
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#E0C76C]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#C9A227]/20">
                <LucideIcon name="Users" size={40} className="text-[#C9A227]" />
              </div>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-[-0.05em] md:text-5xl">
              READY TO GROW WITH US?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Growth doesn't have to happen alone. Join a community of ambitious
              individuals committed to personal and professional development. Connect,
              learn, and grow together.
            </p>
            <Button
              href={SITE.whatsapp.communityLink || "#"}
              variant="primary"
              external
              className="bg-[#C9A227] px-8 py-4 text-sm font-semibold tracking-[0.18em] transition-all hover:scale-105 hover:bg-[#b8911f] hover:shadow-[0_20px_40px_rgba(201,162,39,0.3)]"
            >
              JOIN THE COMMUNITY
            </Button>
            <p className="mt-6 text-sm text-white/60">
              Connect with us on WhatsApp and be part of the journey
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
