import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Stories | Real Results From Lumina Advisory",
  description:
    "Career coaching clients, corporate workshop participants, and young professionals share how Lumina Advisory helped them grow with clarity, confidence, and purpose.",
  alternates: { canonical: "/testimonials/" },
  openGraph: {
    title: "Client Stories | Real Results From Lumina Advisory",
    description:
      "Real reflections from career coaching clients, workshop participants, and community members.",
    url: "https://luminalegacy.co.za/testimonials/",
    images: ["/images/heroes/testimonials.jpg"],
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
