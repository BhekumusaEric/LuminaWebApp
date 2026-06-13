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
      className={`w-full px-6 py-16 md:py-24 ${
        dark ? "bg-[#0F172A] text-white" : "bg-[#F8F7F4] text-[#0F172A]"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
