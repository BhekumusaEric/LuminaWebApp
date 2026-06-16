import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lumina Advisory | Leadership & Career Development South Africa",
    template: "%s | Lumina Advisory",
  },
  description:
    "Lumina Advisory is a growth-focused consultancy supporting individuals and organisations through career growth, leadership development, strategic facilitation, and meaningful transformation.",
  keywords: [
    "Leadership Development South Africa",
    "Career Coaching Johannesburg",
    "Strategic Facilitation South Africa",
    "Personal Development Consultancy",
    "Executive Coaching Johannesburg",
  ],
  openGraph: {
    title: "Lumina Advisory | Leadership & Career Development South Africa",
    description:
      "Growth-focused consultancy supporting individuals and organisations through career, leadership, and personal development.",
    url: "https://luminalegacy.co.za",
    siteName: "Lumina Advisory",
    locale: "en_ZA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-navy antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
