"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Check if video exists
  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/videos/growth-tree.mp4';
    video.onerror = () => setVideoError(true);
    video.onloadeddata = () => setVideoLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#2B2118] pt-20 md:min-h-[760px]">
      {/* Video Background - with fallback to SVG */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 h-full w-full object-cover opacity-[0.32] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-[0.32]' : 'opacity-0'
          }`}
          onError={() => setVideoError(true)}
        >
          <source src="/videos/growth-tree.mp4" type="video/mp4" />
          <source src="/videos/growth-tree.webm" type="video/webm" />
        </video>
      )}
      
      {/* Fallback SVG Background */}
      {(videoError || !videoLoaded) && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.32]"
          style={{
            backgroundImage: 'url("/images/hero-growth.svg")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
      )}
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,15,12,0.82),rgba(19,15,12,0.66),rgba(19,15,12,0.52))]" />

      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-[1200px] items-center px-4 py-20 sm:px-6 md:min-h-[760px]">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E7D79C] sm:text-xs"
          >
            WHERE AMBITION MEETS INTENTIONAL GROWTH
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
            className="mb-6 text-4xl font-bold leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl md:text-7xl lg:text-[5.2rem]"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              DEVELOPING PEOPLE.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block"
            >
              STRENGTHENING LEADERS.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-block"
            >
              TRANSFORMING ORGANISATIONS.
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-4 max-w-xl text-base text-white/90 md:text-lg font-medium"
          >
            Lumina Advisory, a growth-focused consultancy partnering with individuals, teams, and organisations to unlock potential, develop people, strengthen leadership, and drive meaningful transformation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            <Button 
              href="/contact" 
              variant="primary" 
              className="px-6 py-3.5 text-[10px] tracking-[0.18em] sm:text-[11px] shadow-[0_20px_35px_rgba(201,162,39,0.28)] transition-transform hover:scale-105"
            >
              CONTACT US
            </Button>
            <Button 
              href="/services" 
              variant="outline" 
              className="border border-white/35 bg-white/5 px-6 py-3.5 text-[10px] tracking-[0.18em] text-white hover:bg-white hover:text-[#2B2118] sm:text-[11px] transition-all hover:scale-105"
            >
              EXPLORE SERVICES
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
