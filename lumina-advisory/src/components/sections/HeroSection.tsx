import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE, FOUNDER } from "@/lib/data";

/**
 * HeroSection
 * Home page hero. Full-height navy background with gold accents.
 * - Primary CTA: Book Free Discovery Call → Calendly
 * - Secondary CTA: Work With Us → /services
 */
export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0F172A] text-white flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-[#C9A227] font-semibold uppercase tracking-widest text-sm mb-4">
            Lumina Advisory
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Where ambition meets intentional growth.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
            A growth-focused consultancy supporting individuals and organisations
            through career growth, strategic advisory, leadership development,
            facilitation, and meaningful transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={SITE.calendly} variant="primary" external>
              Book Free Discovery Call
            </Button>
            <Button href="/services" variant="outline">
              Work With Us
            </Button>
          </div>
        </div>

        {/* Founder Image */}
        <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 hidden md:block">
          <Image
            src={FOUNDER.image}
            alt={FOUNDER.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
