import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Founder Yolandi Pietersen",
  description:
    "Meet the founder behind Lumina Advisory. Yolandi Pietersen, MBA (Cum Laude), brings a decade of management consulting, banking, and transformation experience to career, leadership, and organisational development.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Lumina Advisory | Founder Yolandi Pietersen",
    description:
      "Consultant, facilitator, and leadership development professional. Learn about the story and mission behind Lumina Advisory.",
    url: "https://luminalegacy.co.za/about/",
    images: ["/images/heroes/about.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
