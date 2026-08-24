"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SERVICES, SITE } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * SERVICES PAGE
 * Each service block renders with alternating image/content layout
 * Images assigned to each service for visual appeal
 */
export default function ServicesPage() {
  // Map services to images
  const serviceImages = [
    "/images/stock/image4.jpeg",  // Career & Personal Development
    "/images/stock/image5.jpeg",  // Training & Skills Development
    "/images/stock/image7.jpeg",  // Programme Direction
    "/images/stock/image8.jpeg",  // Consulting & Advisory
    "/images/stock/image10.jpeg", // Strategic Facilitation
    "/images/stock/image11.jpeg", // Leadership Development
  ];

  return (
    <>
      <PageHero
        headline="SERVICES"
        subheading="Supporting individuals and organisations through intentional development"
      />

      {/* Service Sections — alternating layout */}
      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-white" : "bg-[#f9f7f4]";
        const textColor = isEven ? "text-[#2B2118]" : "text-[#2B2118]";
        const subTextColor = isEven ? "text-[#4a4641]" : "text-[#4a4641]";

        return (
          <section key={service.id} className={`${bgColor} px-6 py-16 md:py-20`}>
            <div className="mx-auto max-w-7xl">
              <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${!isEven ? "lg:col-start-2" : ""}`}
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e7ba] text-[#2B2118]"
                  >
                    <LucideIcon name={service.icon} size={28} />
                  </motion.div>

                  {/* Title */}
                  <h2 className={`mb-4 text-3xl font-bold tracking-[-0.02em] ${textColor} md:text-4xl`}>
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className={`mb-6 text-base leading-relaxed ${subTextColor} md:text-lg`}>
                    {service.shortDescription}
                  </p>

                  {/* What We Offer */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A227]">
                      What We Offer
                    </h3>
                    <ul className="grid gap-3">
                      {service.offerings.map((offering, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className={`flex items-start gap-3 text-sm ${subTextColor}`}
                        >
                          <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#C9A227]/20 text-xs font-bold text-[#C9A227]">
                            ✓
                          </span>
                          <span>{offering}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Button
                      href={`/contact?service=${service.id}`}
                      variant="primary"
                    >
                      Enquire About This Service
                    </Button>
                  </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`relative h-[400px] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(29,27,24,0.1)] md:h-[500px] lg:h-[600px] ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <Image
                    src={serviceImages[index] || "/images/stock/image3.jpeg"}
                    alt={`${service.title} - Professional business setting`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority={index < 2}
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/20 to-transparent" />
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[#2B2118] to-[#342820] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-3xl font-bold tracking-[-0.02em] md:text-4xl"
          >
            Not Sure What Support You Need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg leading-relaxed text-white/80"
          >
            Let's explore together. Book a discovery call and we'll help you find the right path forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href={SITE.calendly} variant="outline" external>
              Book Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
