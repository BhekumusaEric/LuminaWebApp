import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

/**
 * HeroSection
 * Home page hero. Full-height navy background with gold accents.
 * - Primary CTA: Book Free Discovery Call → Calendly
 * - Secondary CTA: Work With Us → /services
 * - Image placeholder: replace the div with an <Image> component
 *   once the founder photo is available in /public/images/founder.jpg
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

        {/* Founder Image Placeholder */}
        {/* TODO: Replace with:
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image src="/images/founder.jpg" alt="Yolandi Pietersen" fill className="object-cover" priority />
          </div>
        */}
        <div className="hidden md:flex items-center justify-center bg-white/5 rounded-2xl h-[480px] border border-white/10">
          <p className="text-white/30 text-sm">[ Founder Photo ]</p>
        </div>
      </div>
    </section>
  );
}
