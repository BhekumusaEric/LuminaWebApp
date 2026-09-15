import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Book a Consultation",
  description:
    "Get in touch about coaching, leadership development, or advisory work. Based in Johannesburg, serving South Africa and Africa. Call, WhatsApp, or send a message.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Lumina Advisory | Book a Consultation",
    description: "Start the conversation about your next chapter of growth.",
    url: "https://luminalegacy.co.za/contact/",
    images: ["/images/heroes/contact.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
