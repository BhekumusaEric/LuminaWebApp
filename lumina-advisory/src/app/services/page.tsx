"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SERVICES, SITE } from "@/lib/data";

/**
 * SERVICES PAGE — editorial full-bleed layout
 * ─────────────────────────────────────────────────────────────
 * Each service = a full-viewport-height section with the
 * service image bleeding to the edges (like a McKinsey / BCG
 * magazine spread). Content column alternates left / right so
 * consecutive services feel like turning a page.
 *
 * Typography does the heavy lifting: an oversized service
 * title, a numbered eyebrow, a tight description, then a
 * calm "What we offer" list with hairline dividers. No cards
 * fighting the image — the image is the atmosphere.
 * ───────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  const serviceImages = [
    "/images/stock/image4.jpeg",  // Career & Personal Development
    "/images/stock/image5.jpeg",  // Training & Skills Development
    "/images/stock/image7.jpeg",  // Programme Direction
    "/images/stock/image8.jpeg",  // Consulting & Advisory
    "/images/stock/image10.jpeg", // Strategic Facilitation
    "/images/stock/image11.jpeg", // Leadership Development
  ];

  const total = SERVICES.length;

  return (
    <>
      <PageHero
        headline="SERVICES"
        subheading="Supporting individuals and organisations through intentional development."
        backgroundImage="/images/heroes/services.jpg"
      />

      {/* One editorial spread per service */}
      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            className="relative isolate flex min-h-[100vh] items-center overflow-hidden"
          >
            {/* Full-bleed background image — sits at low opacity, serves as atmosphere */}
            <div className="absolute inset-0" aria-hidden>
              <Image
                src={serviceImages[index] || "/images/stock/image3.jpeg"}
                alt=""
                fill
                sizes="100vw"
                priority={index < 2}
                className="object-cover"
              />
            </div>

            {/* Dark warm wash — content-side heavier so text is always legible.
                Alternates per service so we're always darkening the content column. */}
            <div
              className="absolute inset-0"
              aria-hidden
              style={{
                background: isEven
                  ? "linear-gradient(90deg, rgba(8,6,10,0.96) 0%, rgba(8,6,10,0.86) 35%, rgba(8,6,10,0.55) 65%, rgba(8,6,10,0.35) 100%)"
                  : "linear-gradient(270deg, rgba(8,6,10,0.96) 0%, rgba(8,6,10,0.86) 35%, rgba(8,6,10,0.55) 65%, rgba(8,6,10,0.35) 100%)",
              }}
            />

            {/* Extra top/bottom vignette so the image doesn't fight adjacent sections */}
            <div
              className="absolute inset-0"
              aria-hidden
              style={{
                background:
                  "linear-gradient(180deg, rgba(6,5,6,0.6) 0%, transparent 15%, transparent 85%, rgba(6,5,6,0.6) 100%)",
              }}
            />

            {/* Content column — alternates left/right */}
            <div className="lumina-container relative z-10 py-24 md:py-28">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className={`max-w-xl md:max-w-[560px] ${isEven ? "" : "ml-auto"}`}
              >
                {/* Numbered eyebrow — the McKinsey signature move */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-[0.32em] text-[#C8A24C]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-[#C8A24C]/50" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#EFEBE3]/60">
                    Service {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* Massive service title */}
                <h2 className="mb-8 text-4xl font-bold uppercase leading-[0.98] tracking-[-0.04em] text-white md:text-5xl lg:text-[3.75rem]">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-balance-justify mb-12 text-lg leading-relaxed text-[#EFEBE3]/85 md:text-xl">
                  {service.shortDescription}
                </p>

                {/* "What we offer" — hairline-separated list, editorial style */}
                <div className="mb-14">
                  <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                    What we offer
                  </p>
                  <ul className="border-t border-white/10">
                    {service.offerings.map((offering, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.15 + idx * 0.08,
                          duration: 0.6,
                          ease: "easeOut" as const,
                        }}
                        className="group flex items-baseline gap-6 border-b border-white/10 py-4 text-base text-[#EFEBE3]/85 transition-colors hover:text-white md:text-lg"
                      >
                        <span className="text-xs font-mono tabular-nums text-[#C8A24C]/60 group-hover:text-[#C8A24C]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1">{offering}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button href={`/contact?service=${service.id}`} variant="outline">
                  Enquire About This Service
                </Button>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Closing CTA — floating dark glass, matches homepage's final CTA */}
      <section className="lumina-section flex items-center">
        <div className="lumina-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" as const }}
            className="lumina-glass-dark mx-auto max-w-3xl px-8 py-14 text-center md:px-14 md:py-20"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              STILL DECIDING?
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
              Not Sure What <span className="lumina-shimmer">Support</span> You Need?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#EFEBE3]/80 md:text-lg">
              Let's explore together. Book a discovery call and we'll help you find the right
              path forward.
            </p>
            <Button href={SITE.calendly} variant="primary" external>
              Book Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
