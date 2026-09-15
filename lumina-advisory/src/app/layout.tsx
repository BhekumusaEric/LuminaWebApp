import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import MobileCallButton from "@/components/layout/MobileCallButton";
import BackToTop from "@/components/ui/BackToTop";
import GlobalBackdrop from "@/components/layout/GlobalBackdrop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  // Base URL used to resolve every relative image/OG path below.
  // Fixes the "using http://localhost:3000" build warning.
  metadataBase: new URL("https://luminalegacy.co.za"),
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
    "Women in Leadership South Africa",
    "MBA Executive Coaching",
    "BBBEE Consultancy Johannesburg",
  ],
  authors: [{ name: "Yolandi Pietersen" }],
  creator: "Lumina Advisory",
  publisher: "Lumina Advisory",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumina Advisory | Leadership & Career Development South Africa",
    description:
      "Growth-focused consultancy supporting individuals and organisations through career, leadership, and personal development.",
    url: "https://luminalegacy.co.za",
    siteName: "Lumina Advisory",
    images: [
      {
        url: "/images/heroes/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Lumina Advisory — Leadership & Career Development",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Advisory | Leadership & Career Development",
    description: "Growth-focused consultancy supporting individuals and organisations.",
    images: ["/images/heroes/home-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

/**
 * Structured data (Schema.org / JSON-LD).
 * Tells Google this is a real professional service based in Johannesburg,
 * with a named founder. Enables knowledge panels, richer SERP snippets,
 * and eligibility for local business features.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://luminalegacy.co.za/#organization",
      name: "Lumina Advisory",
      alternateName: "Lumina Personal Development",
      url: "https://luminalegacy.co.za",
      logo: "https://luminalegacy.co.za/icon.png",
      image: "https://luminalegacy.co.za/images/heroes/home-hero.jpg",
      description:
        "A Level 1 BBBEE boutique advisory and development consultancy focused on people development, strategic facilitation, leadership, and organisational growth.",
      email: "info@luminalegacy.co.za",
      telephone: "+27732960488",
      priceRange: "R",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      areaServed: [
        { "@type": "Country", name: "South Africa" },
        { "@type": "Continent", name: "Africa" },
      ],
      founder: { "@id": "https://luminalegacy.co.za/#founder" },
      knowsAbout: [
        "Leadership Development",
        "Career Coaching",
        "Strategic Facilitation",
        "Personal Development",
        "Organisational Transformation",
        "Women in Leadership",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://luminalegacy.co.za/#founder",
      name: "Yolandi Pietersen",
      jobTitle: "Founder & Managing Director",
      worksFor: { "@id": "https://luminalegacy.co.za/#organization" },
      description:
        "Consultant, facilitator, and leadership development professional with an MBA (Cum Laude) and experience across management consulting, banking, and transformation.",
      image: "https://luminalegacy.co.za/images/founder.png",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MBA (Cum Laude)",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://luminalegacy.co.za/#website",
      url: "https://luminalegacy.co.za",
      name: "Lumina Advisory",
      publisher: { "@id": "https://luminalegacy.co.za/#organization" },
      inLanguage: "en-ZA",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for faster first paint */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload the homepage hero so LCP fires as early as possible */}
        <link
          rel="preload"
          as="image"
          href="/images/heroes/home-hero.jpg"
          fetchPriority="high"
        />
        {/* Local business + founder structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#08060a] text-[#EFEBE3] antialiased">
        {/* Fixed animated backdrop — visible through every transparent section */}
        <GlobalBackdrop />

        {/* Skip to main content link for keyboard users */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative z-0 flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <MobileCallButton />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
