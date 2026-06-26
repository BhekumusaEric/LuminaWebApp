/**
 * SITE DATA
 * ─────────────────────────────────────────────────────────────
 * All static content for the Lumina Advisory website lives here.
 * To update copy, testimonials, services, or contact details,
 * edit this file only — no need to touch individual components.
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "Lumina Advisory",
  tagline: "Where ambition meets intentional growth.",
  domain: "https://luminalegacy.co.za",
  email: "info@luminalegacy.co.za",
  phone: "073 296 0488",
  phoneLink: "tel:+27732960488",
  location: "Johannesburg, South Africa",
  linkedin: "#", // TODO: Replace with real LinkedIn URL
  whatsapp: {
    link: "https://wa.me/27732960488?text=Hi%20Lumina%20Advisory%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services.",
    communityLink: "#", // TODO: Replace with WhatsApp Community invite link
  },
  calendly: "#", // TODO: Replace with Calendly booking URL
  web3forms: {
    accessKey: "", // TODO: Add Web3Forms access key from web3forms.com
  },
  googleSheets: {
    spreadsheetId: "2PACX-1vR1LcScz_C6XnwFVPPZjkGPXtz9tTy9x4Dsby0lC8mhOFB56vU8DtN7GK9X5qWz-rxwTZ0CIzJbcVAT", // Linked to user's Google Sheet
    articlesGid: "0",     // GID of the Insights tab
    eventsGid: "",      // TODO: Add GID of the Events tab when created
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Community", href: "/community" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "career-development",
    icon: "Target",
    title: "Career & Personal Development",
    shortDescription:
      "Supporting individuals in navigating growth intentionally both personally and professionally.",
    offerings: [
      "Career strategy sessions",
      "Personal development coaching",
      "Confidence and growth workshops",
      "Professional development support",
    ],
  },
  {
    id: "training-skills",
    icon: "BookOpen",
    title: "Training & Skills Development",
    shortDescription:
      "Delivering engaging and practical learning experiences designed for growth and capability building.",
    offerings: [
      "Training programmes",
      "Graduate development sessions",
      "Skills development workshops",
      "Early-career professional programmes",
    ],
  },
  {
    id: "programme-direction",
    icon: "Mic",
    title: "Programme Direction, Moderation & Hosting",
    shortDescription:
      "Professional moderation and facilitation for impactful events and conversations.",
    offerings: [
      "Corporate events (Speaker, Host & Programme Director)",
      "Panel discussions",
      "Conferences",
      "Internal broadcasts and hosting",
    ],
  },
  {
    id: "consulting-advisory",
    icon: "Briefcase",
    title: "Independent Consulting & Advisory",
    shortDescription:
      "Providing strategic consulting and advisory support to organisations.",
    offerings: [
      "Strategy advisory",
      "Programme and project support",
      "Business transformation",
      "People advisory",
      "Customer experience improvement",
      "Product development",
      "Stakeholder engagement",
      "Change and implementation support",
    ],
  },
  {
    id: "facilitation",
    icon: "Users",
    title: "Strategic Facilitation",
    shortDescription:
      "Facilitating impactful conversations that drive alignment, clarity, collaboration, and team effectiveness.",
    offerings: [
      "Leadership alignment sessions",
      "Strategy workshops",
      "Team effectiveness facilitation",
    ],
  },
  {
    id: "leadership",
    icon: "Award",
    title: "Leadership Development",
    shortDescription:
      "Developing confident, self-aware, and high-performing leaders.",
    offerings: [
      "Leadership workshops",
      "Women in leadership sessions",
      "High-performance team development",
      "Organisational culture conversations",
    ],
  },
];

export const TRUST_INDICATORS = [
  { label: "Level 1 BBBEE Consultancy" },
  { label: "MBA Cum Laude Leadership Expertise" },
  { label: "Corporate & Public Sector Experience" },
  { label: "Johannesburg, South Africa" },
];

export const WHY_LUMINA = [
  {
    icon: "Briefcase",
    title: "Consulting Expertise",
    description:
      "Drawing on experience across management consulting, banking, transformation, and organisational development.",
  },
  {
    icon: "Sparkles",
    title: "Practical Solutions",
    description:
      "Providing recommendations that are actionable, measurable, and aligned to organisational goals.",
  },
  {
    icon: "HeartHandshake",
    title: "People-Centred Approach",
    description:
      "Combining strategy and human insight to create sustainable outcomes.",
  },
];

export const CORE_VALUES = [
  { icon: "TrendingUp", title: "Intentional Growth" },
  { icon: "Award", title: "Leadership" },
  { icon: "RefreshCw", title: "Transformation" },
  { icon: "Sparkles", title: "Excellence" },
  { icon: "Heart", title: "Human Connection" },
];

export const COMMUNITY_BENEFITS = [
  { icon: "MessageSquare", title: "Career Development Conversations" },
  { icon: "Target", title: "Live Coaching Sessions" },
  { icon: "Award", title: "Leadership Discussions" },
  { icon: "Globe", title: "Networking Opportunities" },
  { icon: "Compass", title: "Reflection Prompts" },
  { icon: "Layers", title: "Growth Resources" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Yolandi helped me see my career from a completely different perspective. I left our session with clarity, confidence, and a practical action plan for my next steps.",
    author: "Career Coaching Client",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The session was professionally facilitated, highly engaging, and left the team with clear outcomes and next steps. A truly valuable experience.",
    author: "Corporate Workshop Client",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The interview preparation session was incredibly valuable. I felt more prepared, more confident, and ultimately performed much better than I would have on my own.",
    author: "Young Professional",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Yolandi brings energy, professionalism, and authenticity to every engagement. She connects with audiences in a way that inspires action.",
    author: "Event Attendee",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Being part of the Lumina community has reminded me that growth doesn't have to happen alone. The conversations, resources, and support have been invaluable.",
    author: "Community Member",
    rating: 5,
  },
];

export const FOUNDER = {
  name: "Yolandi Pietersen",
  title: "Founder & Managing Director",
  qualifications: "MBA Cum Laude",
  shortBio:
    "Yolandi Pietersen is a consultant, facilitator, leadership development professional, and entrepreneur with a passion for helping individuals and organisations unlock their full potential. Throughout her career, she has advised organisations across the public and private sectors on strategy, transformation, leadership, and digital growth initiatives.",
  detailedBio: [
    "Yolandi Pietersen is a consultant, facilitator, leadership development professional, and entrepreneur with a passion for helping individuals and organisations unlock their full potential.",
    "With a career spanning management consulting, banking, leadership development, and strategic transformation, Yolandi brings a unique combination of corporate expertise and people-centred development to every engagement. Throughout her career, she has advised organisations across the public and private sectors on strategy, transformation, organisational effectiveness, leadership development, digital transformation, and business growth initiatives.",
    "Yolandi holds an MBA, which she completed Cum Laude. Her academic achievements, combined with practical industry experience, have shaped her belief that meaningful growth happens when strategy, leadership, and personal development come together.",
    "As the founder of Lumina Advisory, Yolandi is committed to creating transformative development experiences that empower professionals, leaders, and organisations to grow with clarity, confidence, and purpose. Through facilitation, training, coaching, and thought leadership, she aims to inspire intentional growth and lasting impact.",
    "Her mission is simple: To help people become the most confident, capable, and purposeful versions of themselves."
  ],
  timeline: [
    "Management Consulting",
    "Banking",
    "Transformation",
    "Leadership Development",
    "Lumina Advisory",
  ],
  image: "/images/stock/image9.jpeg",
};

export const MISSION_VISION = {
  mission:
    "To create transformative development experiences that empower individuals and organisations to grow with clarity, confidence, and purpose.",
  vision:
    "To become a trusted partner for career, leadership, and personal development across Africa and beyond.",
};

// TODO: Replace with real articles once content is ready
export const ARTICLES: {
  id: number;
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  publishDate: string;
  image: string;
  featured: boolean;
}[] = [];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const getImagePath = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("https") || path.startsWith("data:")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (basePath && cleanPath.startsWith(basePath)) return cleanPath;
  return `${basePath}${cleanPath}`;
};
