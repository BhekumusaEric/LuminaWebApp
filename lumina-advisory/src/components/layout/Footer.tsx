import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";

/**
 * Footer
 * ─────────────────────────────────────────────────────────────
 * Warm-dark editorial treatment. Contact details, quick links,
 * and brand identity — matches the site's overall dark palette.
 * ─────────────────────────────────────────────────────────────
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06050a] px-6 pb-12 pt-20 text-white">
      {/* Subtle warm glow accent, matches the site's shared backdrop */}
      <div
        className="pointer-events-none absolute -left-[8%] top-0 h-[420px] w-[420px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(184,144,32,0.10) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[6%] bottom-0 h-[380px] w-[380px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,171,86,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {/* Brand column */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-1.5">
              <span className="text-xl font-bold uppercase tracking-[0.18em] text-[#D8B96F]">
                Lumina
              </span>
              <span className="text-xl font-light uppercase tracking-[0.18em] text-white transition-colors group-hover:text-[#D8B96F]">
                Advisory
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Quick Links
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[#D8B96F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C8A24C]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
                Contact
              </span>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a
                  href={SITE.phoneLink}
                  className="transition-colors hover:text-[#D8B96F]"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-[#D8B96F]"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="text-white/60">{SITE.location}</li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#D8B96F]"
                >
                  LinkedIn →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Lumina Advisory. All rights reserved.
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/30">
            Where Ambition Meets Intentional Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
