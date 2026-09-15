"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { LucideIcon } from "@/components/ui/LucideIcon";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/lib/data";

/**
 * CONTACT PAGE — editorial dark treatment
 * ─────────────────────────────────────────────────────────────
 * Left column: contact channels as hairline-separated rows
 * (Phone / Email / Location / LinkedIn) + WhatsApp CTA anchored
 * at bottom.
 * Right column: dark-glass form (ContactForm component).
 * Both columns match height and sit on the shared backdrop.
 * ───────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const channels: Array<{
    label: string;
    value: string;
    icon: string;
    href?: string;
    external?: boolean;
  }> = [
    { label: "Phone", value: SITE.phone, icon: "Phone", href: SITE.phoneLink },
    { label: "Email", value: SITE.email, icon: "Mail", href: `mailto:${SITE.email}` },
    { label: "Location", value: SITE.location, icon: "MapPin" },
    {
      label: "LinkedIn",
      value: "Lumina Advisory on LinkedIn",
      icon: "Globe",
      href: SITE.linkedin,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        headline="Let's Connect"
        subheading="Whether you're looking for our contact details or want to send us a message — we're one step away."
        backgroundImage="/images/heroes/contact.jpg"
      />

      <section className="lumina-section">
        <div className="lumina-container">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A24C]/50" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Get In Touch
              </span>
            </div>
            <h2 className="mb-5 text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Choose the path that works for you.
            </h2>
            <p className="text-balance-justify text-base leading-relaxed text-white/70 md:text-lg">
              Reach out directly using the details below, or drop us a message and we'll
              get back to you shortly.
            </p>
          </motion.div>

          {/* Two-column: details / form */}
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
            {/* LEFT — contact channels */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col"
            >
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Contact Channels
              </p>

              {/* Hairline-separated rows, editorial style */}
              <ul className="border-t border-white/10">
                {channels.map((c, i) => {
                  const RowInner = (
                    <div className="flex items-center gap-5 py-5 transition-colors group-hover:text-white">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C8A24C]/12 text-[#D8B96F] transition-colors group-hover:bg-[#C8A24C]/22">
                        <LucideIcon name={c.icon} size={18} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A24C]">
                          {c.label}
                        </p>
                        <p className="truncate text-sm text-white/85 md:text-base">
                          {c.value}
                        </p>
                      </div>
                      {c.href && (
                        <LucideIcon
                          name="ArrowUpRight"
                          size={16}
                          className="shrink-0 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D8B96F]"
                        />
                      )}
                    </div>
                  );

                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 + i * 0.08,
                        duration: 0.7,
                        ease: "easeOut" as const,
                      }}
                      className="group border-b border-white/10"
                    >
                      {c.href ? (
                        <a
                          href={c.href}
                          {...(c.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="block"
                        >
                          {RowInner}
                        </a>
                      ) : (
                        RowInner
                      )}
                    </motion.li>
                  );
                })}
              </ul>

              {/* WhatsApp CTA — anchored to the bottom of the left column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mt-auto pt-10"
              >
                <div className="rounded-2xl border border-[#25D366]/25 bg-[#25D366]/[0.06] p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/25 text-[#25D366]">
                      <LucideIcon name="MessageCircle" size={18} />
                    </span>
                    <p className="text-sm font-semibold text-white">Prefer WhatsApp?</p>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-white/70">
                    Chat directly with us — we typically respond within a few hours.
                  </p>
                  <a
                    href={SITE.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#1ebe5b] hover:shadow-[0_8px_20px_rgba(37,211,102,0.35)]"
                  >
                    Chat on WhatsApp
                    <LucideIcon name="ArrowRight" size={14} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — form (glass panel) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
