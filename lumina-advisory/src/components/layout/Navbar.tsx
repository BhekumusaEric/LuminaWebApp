"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
        scrolled ? "bg-[#0F172A] shadow-lg" : "bg-[#0F172A]/95"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#C9A227] font-bold text-xl tracking-wide font-[family-name:var(--font-playfair)]">
            Lumina
          </span>
          <span className="text-white font-light text-xl tracking-wide font-[family-name:var(--font-playfair)]">
            Advisory
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#C9A227] font-semibold"
                  : "text-white/80 hover:text-[#C9A227]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={SITE.calendly} variant="primary" external>
            Book Discovery Call
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
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base py-1 ${
                pathname === link.href
                  ? "text-[#C9A227] font-semibold"
                  : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href={SITE.calendly} variant="primary" external className="mt-2 w-full">
            Book Discovery Call
          </Button>
        </div>
      )}
    </header>
  );
}
