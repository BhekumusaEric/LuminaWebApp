"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS, SITE } from "@/lib/data";

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Assign beautiful images to testimonials
  const testimonialImages = [
    "/images/stock/image3.jpeg",  // Career Coaching
    "/images/stock/image6.jpeg",  // Corporate Workshop
    "/images/stock/image11.jpeg", // Young Professional
    "/images/stock/image12.jpeg", // Event Attendee
    "/images/stock/image9.jpeg",  // Community Member
  ];

  // Auto-rotate every 8 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);

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
        headline="WHAT PEOPLE ARE SAYING"
        subheading="Stories of growth, transformation, and impact"
      />

      {/* Featured Testimonial Carousel */}
      <section 
        className="relative overflow-hidden bg-gradient-to-br from-[#2B2118] via-[#342820] to-[#2B2118] px-6 py-20 md:py-28"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Decorative elements */}
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#E0C76C]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Testimonial Carousel */}
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-center text-white"
              >
                {/* Quote Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A227]/20">
                    <LucideIcon name="Quote" size={28} className="text-[#C9A227]" />
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mb-10 text-xl leading-relaxed text-white/90 md:text-2xl">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Star Rating */}
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <LucideIcon 
                      key={i} 
                      name="Star" 
                      size={20} 
                      className="fill-[#C9A227] text-[#C9A227]" 
                    />
                  ))}
                </div>

                {/* Author */}
                <p className="text-base font-semibold uppercase tracking-wider text-[#E0C76C]">
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
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:scale-110 hover:border-[#C9A227] hover:bg-[#C9A227]/10"
              aria-label="Previous testimonial"
            >
              <LucideIcon name="ChevronLeft" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-10 bg-[#C9A227]"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:scale-110 hover:border-[#C9A227] hover:bg-[#C9A227]/10"
              aria-label="Next testimonial"
            >
              <LucideIcon name="ChevronRight" size={24} />
            </button>
          </div>

          {/* Progress Indicator */}
          {!isPaused && (
            <motion.div
              className="mx-auto mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/10"
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

      {/* All Testimonials Grid */}
      <section className="bg-[#f9f7f4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-[#1d1b18] md:text-4xl">
              CLIENT SUCCESS STORIES
            </h2>
            <p className="text-base text-[#4a4641] md:text-lg">
              Hear from professionals, leaders, and organisations we've partnered with
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#e7e0d7] shadow-[0_10px_28px_rgba(35,26,20,0.04)] transition-all duration-300 hover:shadow-[0_18px_38px_rgba(35,26,20,0.12)]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={testimonialImages[index]}
                    alt={`${testimonial.author} testimonial`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/96 via-[#2B2118]/85 to-[#2B2118]/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex min-h-[320px] flex-col justify-end p-8">
                  {/* Quote Icon */}
                  <div className="mb-4 flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]/90 backdrop-blur-sm">
                      <LucideIcon name="Quote" size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 text-base leading-relaxed text-white">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Star Rating & Author */}
                  <div className="flex items-center gap-3">
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <LucideIcon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className="fill-[#C9A227] text-[#C9A227]" 
                        />
                      ))}
                    </div>

                    <span className="h-1 w-1 rounded-full bg-white/40" />

                    {/* Author */}
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#E0C76C]">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Lumina */}
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
              WHY WORK WITH LUMINA?
            </h2>
            <p className="text-base text-[#4a4641] md:text-lg">
              Combining expertise, practical solutions, and people-centered approach
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 - Consulting Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[#e7e0d7] shadow-[0_10px_28px_rgba(35,26,20,0.04)] transition-all duration-300 hover:shadow-[0_18px_38px_rgba(35,26,20,0.12)]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/stock/image4.jpeg"
                  alt="Consulting expertise"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/95 via-[#2B2118]/75 to-[#2B2118]/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]/90 backdrop-blur-sm">
                  <LucideIcon name="Briefcase" size={24} className="text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Consulting Expertise
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  Drawing on experience across management consulting, banking,
                  transformation, and organisational development.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Practical Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[#e7e0d7] shadow-[0_10px_28px_rgba(35,26,20,0.04)] transition-all duration-300 hover:shadow-[0_18px_38px_rgba(35,26,20,0.12)]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/stock/image7.jpeg"
                  alt="Practical solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/95 via-[#2B2118]/75 to-[#2B2118]/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]/90 backdrop-blur-sm">
                  <LucideIcon name="Target" size={24} className="text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Practical Solutions
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  Providing recommendations that are actionable, measurable, and aligned
                  to organisational goals.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - People-Centered Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[#e7e0d7] shadow-[0_10px_28px_rgba(35,26,20,0.04)] transition-all duration-300 hover:shadow-[0_18px_38px_rgba(35,26,20,0.12)]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/stock/image10.jpeg"
                  alt="People-centered approach"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/95 via-[#2B2118]/75 to-[#2B2118]/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]/90 backdrop-blur-sm">
                  <LucideIcon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  People-Centered Approach
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  Combining strategy and human insight to create sustainable outcomes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2B2118] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-[-0.05em] md:text-5xl">
              READY TO BEGIN YOUR JOURNEY?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Join the professionals and organisations who have transformed their
              leadership, careers, and teams with Lumina Advisory.
            </p>
            <Button
              href="/contact"
              variant="primary"
              className="bg-[#C9A227] px-8 py-4 text-sm font-semibold tracking-[0.18em] transition-all hover:scale-105 hover:bg-[#b8911f] hover:shadow-[0_20px_40px_rgba(201,162,39,0.3)]"
            >
              GET IN TOUCH
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
