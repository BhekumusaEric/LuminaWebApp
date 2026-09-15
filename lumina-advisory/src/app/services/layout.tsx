import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory Services",
  description:
    "Career and personal development coaching, leadership development, strategic facilitation, training, moderation, and independent consulting. Trusted across the South African corporate and public sectors.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Advisory Services | Career, Leadership & Facilitation",
    description:
      "Six practice areas built for individuals and organisations serious about intentional growth.",
    url: "https://luminalegacy.co.za/services/",
    images: ["/images/heroes/services.jpg"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
