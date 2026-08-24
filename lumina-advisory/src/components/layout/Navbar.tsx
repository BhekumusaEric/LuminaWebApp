"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";

/**
 * Navbar
 * ─────────────────────────────────────────────────────────────
 * Sticky after scroll. Mobile hamburger menu included.
 * Nav links live in src/lib/data.ts — add/remove links there.
 * The CTA button points to SITE.calendly (also in data.ts).
 * ─────────────────────────────────────────────────────────────
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#000000]/98 shadow-[0_12px_34px_rgba(0,0,0,0.4)] backdrop-blur-md" : "bg-[#000000]/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20">
        <Link href="/" className="group flex flex-col leading-none">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[#E0C76C] text-lg font-semibold tracking-[0.18em] transition-colors duration-200 sm:text-xl md:text-2xl">
              LUMINA
            </span>
            <span className="text-white text-lg font-light tracking-[0.18em] transition-colors duration-200 group-hover:text-[#E0C76C] sm:text-xl md:text-2xl">
              ADVISORY
            </span>
          </div>
          <span className="mt-1.5 text-[7px] uppercase tracking-[0.16em] text-white/70 sm:text-[8px] md:text-[9px]">
            WHERE AMBITION MEETS INTENTIONAL GROWTH
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#E0C76C] font-semibold"
                  : "text-white/80 hover:text-[#E0C76C] font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={SITE.calendly} variant="primary" external className="px-5 py-2.5 text-[10px] tracking-[0.18em] hover:brightness-110">
            BOOK A CONSULTATION
          </Button>
        </div>

        {/* Mobile Hamburger - Animated X */}
        <button
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop overlay - click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" as const }}
              className="md:hidden bg-[#000000] border-t border-white/10 px-6 py-6 flex flex-col gap-4 relative z-40"
            >
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-sm uppercase tracking-widest py-3 px-2 rounded-lg transition-colors ${
                        pathname === link.href
                          ? "text-[#C9A227] font-bold bg-[#C9A227]/10"
                          : "text-white/90 font-semibold hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                >
                  <Button 
                    href={SITE.calendly} 
                    variant="primary" 
                    external 
                    className="mt-4 w-full py-4 text-sm"
                  >
                    BOOK A CONSULTATION
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
