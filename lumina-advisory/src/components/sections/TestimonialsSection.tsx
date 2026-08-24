"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { TESTIMONIALS } from "@/lib/data";

/**
 * TestimonialsSection
 * ─────────────────────────────────────────────────────────────
 * Sliding testimonials carousel with background images.
 * Auto-scrolls horizontally with smooth animations.
 * Professional client images for visual appeal.
 * ─────────────────────────────────────────────────────────────
 */
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  // Assign beautiful, professional background images to each testimonial
  const testimonialImages = [
    "/images/stock/image3.jpeg",  // Career Coaching - Professional setting
    "/images/stock/image6.jpeg",  // Corporate Workshop - Business environment
    "/images/stock/image11.jpeg", // Young Professional - Career growth
    "/images/stock/image12.jpeg", // Event Attendee - Conference/speaking
    "/images/stock/image9.jpeg",  // Community Member - Community/connection
  ];

  // Auto-slide every 8 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section 
      className="snap-section relative overflow-hidden bg-[#f9f7f4] px-6 py-20 md:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9A227]">
          CLIENT SUCCESS STORIES
        </p>
        <h2 className="mb-3 text-3xl font-bold tracking-[-0.05em] text-[#2B2118] md:text-4xl">
          WHAT OUR CLIENTS SAY
        </h2>
        <p className="text-base text-[#4a4641] md:text-lg">
          Hear from professionals, leaders, and organisations we've partnered with
        </p>
      </motion.div>

      {/* Testimonials Slider */}
      <div className="mx-auto max-w-6xl">
        <div className="relative h-[500px] md:h-[550px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              {/* Testimonial Card */}
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-[#e7e0d7] shadow-[0_20px_60px_rgba(29,27,24,0.12)]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={testimonialImages[currentIndex]}
                    alt={`${TESTIMONIALS[currentIndex].author} testimonial`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover transition-transform duration-[8000ms] ease-linear"
                    priority={currentIndex === 0}
                    style={{ transform: isPaused ? 'scale(1)' : 'scale(1.05)' }}
                  />
                  {/* Gradient Overlay - Lighter to show more of the beautiful image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/95 via-[#2B2118]/70 to-[#2B2118]/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12 lg:p-16">
                  {/* Quote Icon */}
                  <div className="mb-6 flex">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]/90 backdrop-blur-sm">
                      <LucideIcon name="Quote" size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 text-xl font-medium leading-relaxed text-white md:text-2xl lg:text-3xl">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </blockquote>

                  {/* Rating & Author */}
                  <div className="flex items-center gap-4">
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                        <LucideIcon 
                          key={i} 
                          name="Star" 
                          size={18} 
                          className="fill-[#C9A227] text-[#C9A227]" 
                        />
                      ))}
                    </div>

                    <span className="h-1 w-1 rounded-full bg-white/40" />

                    {/* Author */}
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#E0C76C]">
                      {TESTIMONIALS[currentIndex].author}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2B2118]/20 text-[#2B2118] transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white hover:scale-110"
            aria-label="Previous testimonial"
          >
            <LucideIcon name="ChevronLeft" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? "h-3 w-10 bg-[#C9A227]"
                    : "h-3 w-3 bg-[#2B2118]/20 hover:bg-[#2B2118]/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2B2118]/20 text-[#2B2118] transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white hover:scale-110"
            aria-label="Next testimonial"
          >
            <LucideIcon name="ChevronRight" size={24} />
          </button>
        </div>

        {/* Progress Bar (when auto-playing) */}
        {!isPaused && (
          <motion.div
            className="mx-auto mt-6 h-1 w-64 overflow-hidden rounded-full bg-[#2B2118]/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-[#C9A227]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear" }}
              key={currentIndex}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
