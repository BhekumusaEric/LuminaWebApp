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
    icon: "🎯",
    title: "Career & Personal Development",
    shortDescription:
      "Empowering individuals to take ownership of their career journey with clarity and confidence.",
    offerings: [
      "Career strategy sessions",
      "Personal development coaching",
      "Confidence and growth workshops",
      "Professional development support",
    ],
  },
  {
    id: "training-skills",
    icon: "📚",
    title: "Training & Skills Development",
    shortDescription:
      "Building capability through structured programmes for professionals at every stage.",
    offerings: [
      "Training programmes",
      "Graduate development sessions",
      "Skills development workshops",
      "Early-career professional programmes",
    ],
  },
  {
    id: "programme-direction",
    icon: "🎙️",
    title: "Programme Direction & Hosting",
    shortDescription:
      "Delivering polished, purposeful events that leave a lasting impression.",
    offerings: [
      "Corporate events",
      "Panel discussions",
      "Conferences",
      "Internal broadcasts and hosting",
    ],
  },
  {
    id: "consulting-advisory",
    icon: "💼",
    title: "Independent Consulting & Advisory",
    shortDescription:
      "Strategic advisory support that drives measurable organisational impact.",
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
    icon: "🤝",
    title: "Strategic Facilitation",
    shortDescription:
      "Creating the conditions for teams and leaders to think clearly and move forward together.",
    offerings: [
      "Leadership alignment sessions",
      "Strategy workshops",
      "Team effectiveness facilitation",
    ],
  },
  {
    id: "leadership",
    icon: "⭐",
    title: "Leadership Development",
    shortDescription:
      "Growing the next generation of confident, conscious leaders.",
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
    icon: "🏛️",
    title: "Consulting Expertise",
    description:
      "Drawing on experience across management consulting, banking, transformation, and organisational development.",
  },
  {
    icon: "⚡",
    title: "Practical Solutions",
    description:
      "Providing recommendations that are actionable, measurable, and aligned to organisational goals.",
  },
  {
    icon: "❤️",
    title: "People-Centred Approach",
    description:
      "Combining strategy and human insight to create sustainable outcomes.",
  },
];

export const CORE_VALUES = [
  { icon: "🌱", title: "Intentional Growth" },
  { icon: "👑", title: "Leadership" },
  { icon: "🔄", title: "Transformation" },
  { icon: "✨", title: "Excellence" },
  { icon: "🤍", title: "Human Connection" },
];

export const COMMUNITY_BENEFITS = [
  { icon: "💬", title: "Career Development Conversations" },
  { icon: "🎯", title: "Live Coaching Sessions" },
  { icon: "👑", title: "Leadership Discussions" },
  { icon: "🌐", title: "Networking Opportunities" },
  { icon: "🪞", title: "Reflection Prompts" },
  { icon: "📦", title: "Growth Resources" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Yolandi helped me gain clarity on my career direction. Her approach is both strategic and deeply human.",
    author: "— Client Name", // TODO: Replace with real testimonial
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Professionally facilitated strategy session that aligned our leadership team in a way we hadn't achieved before.",
    author: "— Client Name", // TODO: Replace with real testimonial
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The leadership development programme was transformative. Highly recommend Lumina Advisory.",
    author: "— Client Name", // TODO: Replace with real testimonial
    rating: 5,
  },
];

export const FOUNDER = {
  name: "Yolandi Pietersen",
  title: "Founder & Managing Director",
  qualifications: "MBA Cum Laude",
  shortBio:
    "Yolandi Pietersen is a seasoned consultant and facilitator with deep experience across management consulting, banking, and transformation. She founded Lumina Advisory to bring intentional, human-centred growth experiences to individuals and organisations across Africa.",
  timeline: [
    "Management Consulting",
    "Banking",
    "Transformation",
    "Leadership Development",
    "Lumina Advisory",
  ],
  image: "/images/founder.jpg", // TODO: Replace with real image
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
