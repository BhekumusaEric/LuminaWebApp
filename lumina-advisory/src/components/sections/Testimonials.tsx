import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TESTIMONIALS } from "@/lib/data";

/**
 * Testimonials
 * 3-column grid on desktop, single column on mobile.
 * Update testimonials in src/lib/data.ts → TESTIMONIALS array.
 * TODO: Add a carousel on mobile using a lightweight library (e.g. embla-carousel)
 *       when real testimonials are confirmed.
 */
export default function Testimonials() {
  return (
    <SectionWrapper dark>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What People Are Saying
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
          >
            {/* Star rating */}
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-[#C9A227]">★</span>
              ))}
            </div>
            <p className="text-white/80 text-sm leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            <p className="text-[#C9A227] text-sm font-semibold mt-auto">
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
