import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";

/**
 * Footer
 * ─────────────────────────────────────────────────────────────
 * Update contact details and links in src/lib/data.ts.
 * LinkedIn URL is set via SITE.linkedin in data.ts.
 * ─────────────────────────────────────────────────────────────
 */
export default function Footer() {
  return (
    <footer className="bg-wood bg-[#2B2118] text-white px-6 py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2B2118]/80 z-0" />
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-1.5 mb-3 group inline-flex">
            <span className="text-[#C9A227] font-bold text-xl tracking-wider font-heading">
              Lumina
            </span>
            <span className="text-white font-light text-xl tracking-wider font-heading group-hover:text-[#C9A227] transition-colors duration-200">
              Advisory
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            {SITE.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-sm font-semibold text-[#C9A227] uppercase tracking-wider mb-4">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 text-sm hover:text-[#C9A227] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold text-[#C9A227] uppercase tracking-wider mb-4">
            Contact
          </p>
          <ul className="flex flex-col gap-2 text-white/70 text-sm">
            <li>
              <a href={SITE.phoneLink} className="hover:text-[#C9A227] transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-[#C9A227] transition-colors">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.location}</li>
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9A227] transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Lumina Advisory. All rights reserved.
      </div>
    </footer>
  );
}
