import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Community",
  description:
    "Join a growth-focused community for ambitious professionals. Career development conversations, live coaching sessions, leadership discussions, and upcoming events.",
  alternates: { canonical: "/community/" },
  openGraph: {
    title: "The Lumina Community | Growth-Focused Space",
    description:
      "Career growth doesn't have to happen alone. A community for professionals becoming their next version.",
    url: "https://luminalegacy.co.za/community/",
    images: ["/images/heroes/community.jpg"],
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
