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
        scrolled ? "bg-wood bg-[#2B2118] shadow-lg" : "bg-wood bg-[#2B2118]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-[#C9A227] font-bold text-xl md:text-2xl tracking-wider font-heading transition-colors duration-200">
            Lumina
          </span>
          <span className="text-white font-light text-xl md:text-2xl tracking-wider font-heading group-hover:text-[#C9A227] transition-colors duration-200">
            Advisory
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#C9A227] font-bold"
                  : "text-white/90 hover:text-[#C9A227] font-semibold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={SITE.calendly} variant="primary" external>
            BOOK A CONSULTATION
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-white transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-wood bg-[#2B2118] border-t border-white/10 px-6 py-6 flex flex-col gap-4 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[#2B2118]/80 z-0" />
            <div className="relative z-10 flex flex-col gap-4">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`block text-sm uppercase tracking-widest py-1 ${
                    pathname === link.href
                      ? "text-[#C9A227] font-bold"
                      : "text-white/90 font-semibold"
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
              <Button href={SITE.calendly} variant="primary" external className="mt-4 w-full">
                BOOK A CONSULTATION
              </Button>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
