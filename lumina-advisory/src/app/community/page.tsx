"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { COMMUNITY_BENEFITS, SITE } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/**
 * COMMUNITY PAGE — editorial dark treatment
 * ─────────────────────────────────────────────────────────────
 * 1. PageHero
 * 2. Intro — centered editorial statement about the community
 * 3. What You Can Expect — 6 benefits as image-backed cards with
 *    icon-inline titles (kept the visual richness of images here
 *    because the community page is where imagery genuinely helps)
 * 4. Upcoming Events — placeholder dark-glass card
 * 5. Final CTA — floating glass, WhatsApp Join button
 * ───────────────────────────────────────────────────────────── */
export default function CommunityPage() {
  const benefitImages = [
    "/images/stock/image3.jpeg",
    "/images/stock/image6.jpeg",
    "/images/stock/image9.jpeg",
    "/images/stock/image10.jpeg",
    "/images/stock/image5.jpeg",
    "/images/stock/image11.jpeg",
  ];

  return (
    <>
      <PageHero
        headline="JOIN THE LUMINA COMMUNITY"
        subheading="A growth-focused space for ambitious individuals."
        backgroundImage="/images/heroes/community.jpg"
      />

      {/* ─── COMMUNITY INTRO ─── */}
      <section className="lumina-section">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: EASE }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                The Community
              </span>
              <span className="h-px w-12 bg-[#C8A24C]/60" />
            </div>

            <h2 className="mb-10 text-center text-3xl font-bold uppercase leading-[1.1] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              A growth-focused space for those becoming their{" "}
              <span className="lumina-shimmer">next</span> version.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/80 md:text-lg">
              <p className="text-balance-justify">
                The Lumina Personal Development Community is a growth-focused space for
                ambitious individuals committed to becoming the next version of themselves.
              </p>
              <p className="text-balance-justify">
                This community was created to support personal and professional growth
                through meaningful conversations, shared experiences, practical resources,
                and intentional development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT YOU CAN EXPECT ─── */}
      <section className="lumina-section">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                What To Expect
              </span>
            </div>
            <h2 className="text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Six ways we grow together.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_BENEFITS.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_14px_48px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#C8A24C]/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={benefitImages[index]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                  />
                  {/* Warm dark wash */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08060a]/95 via-[#08060a]/70 to-[#08060a]/35" />
                </div>

                {/* Content — icon + title inline at bottom */}
                <div className="relative z-10 flex min-h-[260px] items-end p-6">
                  <div className="flex w-full items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C8A24C]/25 text-[#D8B96F] backdrop-blur-sm transition-colors group-hover:bg-[#C8A24C]/35">
                      <LucideIcon name={benefit.icon} size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]/80">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-base font-bold uppercase leading-tight tracking-[-0.01em] text-white md:text-lg">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─── */}
      <section className="lumina-section">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Upcoming Events
              </span>
              <span className="h-px w-12 bg-[#C8A24C]/60" />
            </div>

            <div className="lumina-glass-dark p-10 text-center md:p-14">
              <div className="mb-6 inline-flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8A24C]/15 text-[#D8B96F]">
                  <LucideIcon name="Calendar" size={22} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-[-0.02em] text-white md:text-3xl">
                  Events Coming Soon
                </h3>
              </div>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                We&apos;re planning workshops, coaching sessions, and community gatherings.
                Join the community below to be the first to know when the calendar opens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="lumina-section flex items-center">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE }}
            className="lumina-glass-dark mx-auto max-w-3xl px-8 py-14 text-center md:px-14 md:py-20"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              Join Us
            </p>
            <div className="mb-5 inline-flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8A24C]/15 text-[#D8B96F]">
                <LucideIcon name="Users" size={22} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-[-0.02em] text-white md:text-4xl">
                Ready to <span className="lumina-shimmer">grow</span> with us?
              </h2>
            </div>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Growth doesn&apos;t have to happen alone. Join a community of ambitious
              individuals committed to becoming their next version.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button
                href={SITE.whatsapp.communityLink || SITE.whatsapp.link}
                variant="primary"
                external
              >
                Join the Community
              </Button>
              <Link
                href="/contact"
                className="mt-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60 transition-colors hover:text-[#D8B96F]"
              >
                Or send us a message →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
