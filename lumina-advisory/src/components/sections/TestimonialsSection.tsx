"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { TESTIMONIALS } from "@/lib/data";

/**
 * TestimonialsSection
 * ─────────────────────────────────────────────────────────────
 * Auto-rotating testimonials carousel with manual navigation.
 * Displays client quotes with star ratings.
 * Smooth fade transitions between testimonials.
 * ─────────────────────────────────────────────────────────────
 */
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section 
      className="snap-section bg-gradient-to-br from-[#2B2118] via-[#342820] to-[#2B2118] px-6 py-20 md:py-28 relative overflow-hidden min-h-screen flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E0C76C]/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9A227]">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-white md:text-4xl">
            WHAT OUR CLIENTS SAY
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227]/20">
                  <LucideIcon name="Quote" size={24} className="text-[#C9A227]" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Star Rating */}
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <LucideIcon 
                    key={i} 
                    name="Star" 
                    size={18} 
                    className="fill-[#C9A227] text-[#C9A227]" 
                  />
                ))}
              </div>

              {/* Author */}
              <p className="text-sm font-semibold uppercase tracking-wider text-[#E0C76C]">
                {currentTestimonial.author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <LucideIcon name="ChevronLeft" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#C9A227]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:scale-110"
            aria-label="Next testimonial"
          >
            <LucideIcon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Progress Indicator (optional) */}
        {!isPaused && (
          <motion.div
            className="mx-auto mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-[#C9A227]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              key={currentIndex}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
