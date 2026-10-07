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
    // ────────────────────────────────────────────────────────────
    // GOOGLE SHEET CONNECTION
    // ────────────────────────────────────────────────────────────
    // 1. Open the Google Sheet in your browser
    // 2. Share it as: "Anyone with the link — Viewer"
    // 3. Copy the sheet ID from the URL bar:
    //    docs.google.com/spreadsheets/d/[THIS_IS_THE_ID]/edit#gid=0
    // 4. Paste it below.
    //
    // Each tab (worksheet) has its own `gid` in the URL — look at
    // the URL when a tab is selected: `#gid=1234567890`. Copy the
    // number and paste it as articlesGid or eventsGid below.
    //
    // See SHEETS_SETUP.md at the repo root for full owner-facing docs.
    // ────────────────────────────────────────────────────────────
    spreadsheetId: "2PACX-1vR1LcScz_C6XnwFVPPZjkGPXtz9tTy9x4Dsby0lC8mhOFB56vU8DtN7GK9X5qWz-rxwTZ0CIzJbcVAT",
    articlesGid: "0",     // GID of the Articles / Insights tab
    eventsGid: "",        // GID of the Events tab — leave empty to hide upcoming events
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "consulting-advisory",
    icon: "Briefcase",
    title: "Independent Consulting & Advisory",
    shortDescription:
      "We partner with organisations to solve business challenges, navigate change and turn strategic priorities into practical action. Our advisory support combines structured problem-solving, stakeholder insight and practical recommendations to drive meaningful and sustainable outcomes.",
    offerings: [
      "Strategy & Business Advisory",
      "Transformation & Change Support",
      "Programme & Project Advisory",
      "Customer Experience Improvement",
      "Product & Service Development",
      "Stakeholder Engagement",
    ],
  },
  {
    id: "speaking-moderation",
    icon: "Mic",
    title: "Speaking, Moderation & Programme Direction",
    shortDescription:
      "We bring insight, energy and meaningful engagement to conferences, corporate events and professional conversations. From keynote speaking and panel moderation to programme direction and hosting, we create experiences that connect with audiences and leave a lasting impression.",
    offerings: [
      "Keynote Speaking",
      "Programme Direction & MC Services",
      "Panel Moderation",
      "Fireside Chats & Executive Conversations",
      "Conferences & Corporate Events",
      "Internal Broadcasts & Corporate Hosting",
    ],
  },
  {
    id: "career-development",
    icon: "Target",
    title: "Career & Professional Development",
    shortDescription:
      "We support professionals in navigating career decisions, transitions and growth with greater clarity, confidence and intention. Through tailored career advisory and development support, we help individuals strengthen their professional positioning and take practical steps towards their career goals.",
    offerings: [
      "Career Strategy Sessions",
      "Career Transition Support",
      "CV & Professional Profile Development",
      "LinkedIn & Personal Branding",
      "Interview Preparation",
      "Career Development Workshops",
    ],
  },
  {
    id: "training-skills",
    icon: "BookOpen",
    title: "Training & Skills Development",
    shortDescription:
      "We design engaging, practical learning experiences that strengthen capability and equip people with skills they can apply in the workplace. Our programmes can be tailored to organisational needs, from graduate and early-career development to professional skills and personal effectiveness.",
    offerings: [
      "Professional Skills Workshops",
      "Graduate & Early-Career Development",
      "Communication & Presentation Skills",
      "Career Readiness Programmes",
      "Personal Effectiveness Workshops",
      "Custom Learning Programmes",
    ],
  },
  {
    id: "facilitation",
    icon: "Users",
    title: "Strategic Facilitation",
    shortDescription:
      "We design and facilitate purposeful sessions that help leaders and teams create clarity, strengthen alignment and make meaningful decisions. From strategy workshops to team alignment sessions, we turn productive conversations into clear actions and shared accountability.",
    offerings: [
      "Strategy & Planning Workshops",
      "Leadership Alignment Sessions",
      "Team Alignment & Effectiveness Sessions",
      "Stakeholder Engagement Workshops",
      "Reflection & Strategy Reset Sessions",
    ],
  },
  {
    id: "leadership",
    icon: "Award",
    title: "Leadership Development",
    shortDescription:
      "We develop confident, self-aware and effective leaders equipped to navigate complexity, lead people and drive meaningful change. Our leadership interventions combine practical tools, reflection and real-world application to strengthen leadership capability at every stage.",
    offerings: [
      "Leadership Development Workshops",
      "Emerging Leader Programmes",
      "Women in Leadership Sessions",
      "Leading Through Change",
      "High-Performance Team Development",
    ],
  },
];

export const TRUST_INDICATORS = [
  { label: "Level 1 BBBEE Consultancy" },
  { label: "MBA Cum Laude Leadership Expertise" },
  { label: "Corporate & Public Sector Experience" },
  { label: "Johannesburg, South Africa" },
];

export const QUICK_FACTS = [
  {
    icon: "Users",
    title: "100% Black South African Female-Owned",
    description: "A purpose-led consultancy built on inclusion and impact.",
  },
  {
    icon: "Briefcase",
    title: "9+ Years Corporate & Consulting Experience",
    description: "Deep expertise across management consulting, banking, and transformation.",
  },
  {
    icon: "Award",
    title: "MBA Cum Laude Digital Transformation",
    description: "Academic excellence combined with practical industry experience.",
  },
  {
    icon: "Building2",
    title: "BBBEE Level 1 Consultancy",
    description: "Trusted partner across government and corporate sectors.",
  },
];

export const WHY_LUMINA = [
  {
    icon: "HeartHandshake",
    title: "People-Centred",
    description:
      "We combine strategy and human insight to create sustainable outcomes.",
  },
  {
    icon: "Briefcase",
    title: "Consulting Expertise",
    description:
      "Drawing on experience across management consulting, banking, transformation, and organisational development.",
  },
  {
    icon: "Target",
    title: "Practical Solutions",
    description:
      "Providing recommendations that are actionable, measurable, and aligned to organisational goals.",
  },
];

// "The values that guide us" — About page's 3-value section.
// Distinct from WHY_LUMINA (still used by Home's "Our Approach" section) —
// see design.md for why these are kept as two separate arrays.
export const CORE_VALUES = [
  {
    icon: "HeartHandshake",
    title: "People-Centred",
    description:
      "We put people at the heart of every solution, recognising that meaningful transformation starts with understanding human needs.",
  },
  {
    icon: "TrendingUp",
    title: "Intentional Growth",
    description:
      "We believe sustainable growth is deliberate, grounded in clarity, purpose and meaningful action.",
  },
  {
    icon: "Target",
    title: "Practical Impact",
    description:
      "We create solutions that are actionable, relevant and designed to deliver meaningful, measurable outcomes.",
  },
];

// "Trusted By" — logo strip on the About page.
// TODO: Replace `logo` paths with real logo assets once supplied by the client.
export const TRUSTED_BY = [
  { name: "FNB", logo: "/images/logos/fnb.svg" },
  { name: "NWU", logo: "/images/logos/nwu.svg" },
  { name: "UJ", logo: "/images/logos/uj.svg" },
  { name: "UNISA", logo: "/images/logos/unisa.svg" },
  { name: "Daily Theta", logo: "/images/logos/daily-theta.svg" },
];

// Per the client's "In Their Words" draft for the About page, only these
// 3 testimonials are specified. The former "Career Coaching Client" and
// "Community Member" quotes are dropped here — the latter referenced the
// now-removed Community page and would read as stale.
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "The session was professionally facilitated, highly engaging, and left the team with clear outcomes and next steps. A truly valuable experience.",
    author: "Corporate Workshop Client",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The interview preparation session was incredibly valuable. I felt more prepared, more confident, and ultimately performed much better than I would have on my own.",
    author: "Young Professional",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Yolandi brings energy, professionalism, and authenticity to every engagement. She connects with audiences in a way that inspires action.",
    author: "Event Attendee",
    rating: 5,
  },
];

export const FOUNDER = {
  name: "Yolandi Pietersen",
  title: "Founder & Managing Director",
  qualifications: "MBA Cum Laude",
  shortBio:
    "Yolandi Pietersen (MBA) is the Founder and Managing Director of Lumina Advisory, a strategist, consultant, facilitator and speaker with over eight years of experience across management consulting and financial services.",
  detailedBio: [
    "Yolandi Pietersen (MBA) is the Founder and Managing Director of Lumina Advisory, a strategist, consultant, facilitator and speaker with over eight years of experience across management consulting and financial services.",
    "Her career spans management consulting, banking, strategy, transformation, customer experience and digital innovation, giving her a strong foundation in solving complex business challenges, facilitating strategic conversations and supporting meaningful organisational growth.",
    "Yolandi holds an MBA, which she completed Cum Laude. Her academic achievements, combined with practical industry experience, have shaped her belief that meaningful growth happens when strategy, leadership and people come together.",
    "As the Founder of Lumina Advisory, Yolandi is committed to creating transformative experiences that empower professionals, leaders and organisations to grow with clarity, confidence and purpose. Through consulting, facilitation, training, coaching and thought leadership, she helps turn ambition into meaningful action and lasting impact.",
    "Her mission is simple: to help people become the most confident, capable and purposeful versions of themselves.",
  ],
  timeline: [
    "Management Consulting",
    "Banking",
    "Transformation",
    "Leadership Development",
    "Lumina Advisory",
  ],
  image: "/images/stock/image9.png",
};

export const MISSION_VISION = {
  mission:
    "To create transformative development experiences that empower individuals and organisations to grow with clarity, confidence, and purpose.",
  vision:
    "To become a trusted partner for career, leadership, and personal development across Africa and beyond.",
  whoWeAre: [
    "Lumina Advisory is a Level 1 B-BBEE boutique advisory and development consultancy focused on people development, strategic facilitation, leadership, and organisational growth. We partner with organisations, professionals, and emerging leaders to deliver practical, people-centred solutions across consulting and advisory, leadership development, training, facilitation, career development, and programme direction. Drawing on experience across management consulting, financial services, transformation, and people development, we combine strategic insight with practical expertise to create meaningful and sustainable outcomes.",
  ],
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
