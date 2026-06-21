import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

/**
 * SectionWrapper
 * Wraps every page section with consistent padding and max-width.
 * Use `dark` prop for navy background sections.
 */
export function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full px-6 py-20 md:py-32 border-t ${
        dark ? "bg-wood bg-[#2B2118] text-white border-white/5" : "bg-[#F8F7F4] text-[#2D2D2D] border-[#2B2118]/5"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
