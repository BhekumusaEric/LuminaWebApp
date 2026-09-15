"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { TESTIMONIALS } from "@/lib/data";

/**
 * TestimonialsSection
 * ─────────────────────────────────────────────────────────────
 * Editorial-style testimonial spread. One story per slide,
 * auto-advancing every 15s. Full-bleed portrait image on one
 * side, quote + attribution on the other — reads like a
 * profile page in a magazine, not a marketing carousel.
 *
 * Everything sits on the shared dark backdrop, so no per-section
 * background fights the rest of the site.
 * ───────────────────────────────────────────────────────────── */
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const testimonialImages = [
    "/images/stock/image3.jpeg",
    "/images/stock/image6.jpeg",
    "/images/stock/image11.jpeg",
    "/images/stock/image12.jpeg",
    "/images/stock/image9.jpeg",
  ];

  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[currentIndex];
  const img = testimonialImages[currentIndex % testimonialImages.length];

  // Auto-advance every 15s
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 15000);
    return () => clearInterval(id);
  }, [isPaused, total]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % total);
  };
  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + total) % total);
  };
  const goToSlide = (i: number) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <section
      className="snap-section lumina-section relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="lumina-container w-full">
        {/* Section header — matches the services page eyebrow rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C8A24C]/50" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
            Hear from the people we've partnered with.
          </h2>
        </motion.div>

        {/* Slide container — grid puts image + quote side by side. Full-width. */}
        <div className="relative w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.article
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
            >
              {/* Portrait — subtly framed, warm border */}
              <div className="relative min-h-[420px] w-full overflow-hidden rounded-[1.5rem] border border-[#C8A24C]/15 shadow-[0_20px_60px_rgba(0,0,0,0.4)] lg:min-h-[560px]">
                <Image
                  src={img}
                  alt={`${t.author} — client of Lumina Advisory`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={currentIndex === 0}
                  className="object-cover"
                  style={{ transform: isPaused ? "scale(1)" : "scale(1.03)", transition: "transform 15s ease-out" }}
                />
                {/* Warm dark wash — keeps image restrained */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#08060a]/70 via-[#08060a]/25 to-transparent" />

                {/* Slide index label, bottom-left */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/85">
                  <span className="text-[#C8A24C]">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-white/40" />
                  <span>of {String(total).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Quote column */}
              <div className="flex flex-col justify-center py-4 lg:py-8">
                {/* Rating */}
                <div className="mb-8 flex items-center gap-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <LucideIcon
                      key={i}
                      name="Star"
                      size={16}
                      className="fill-[#C8A24C] text-[#C8A24C]"
                    />
                  ))}
                </div>

                {/* Quote — the star of the slide */}
                <blockquote className="mb-10 text-2xl font-medium leading-[1.35] tracking-[-0.015em] text-white md:text-3xl lg:text-[2.15rem]">
                  <span className="mr-1 text-[#C8A24C]" aria-hidden>&ldquo;</span>
                  {t.quote}
                  <span className="ml-1 text-[#C8A24C]" aria-hidden>&rdquo;</span>
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#C8A24C]/60" />
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D8B96F]">
                    {t.author}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Controls — prev / dots / next, restrained editorial style */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <button
            onClick={goToPrev}
            className="group flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70 transition-colors hover:text-white"
            aria-label="Previous testimonial"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-[#C8A24C] group-hover:bg-[#C8A24C]/10">
              <LucideIcon name="ChevronLeft" size={18} />
            </span>
            Prev
          </button>

          {/* Dots */}
          <div className="flex gap-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-[2px] rounded-full transition-all ${
                  i === currentIndex
                    ? "w-10 bg-[#C8A24C]"
                    : "w-6 bg-white/15 hover:bg-white/35"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="group flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70 transition-colors hover:text-white"
            aria-label="Next testimonial"
          >
            Next
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-[#C8A24C] group-hover:bg-[#C8A24C]/10">
              <LucideIcon name="ChevronRight" size={18} />
            </span>
          </button>
        </div>

        {/* Progress bar */}
        {!isPaused && (
          <motion.div
            className="mx-auto mt-6 h-[2px] w-full overflow-hidden bg-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              key={currentIndex}
              className="h-full bg-[#C8A24C]/70"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 15, ease: "linear" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
