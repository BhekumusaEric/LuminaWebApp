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

// Order per client (FINAL TWEAKS): Independent Consulting & Advisory moved
// to position 5. Each service has a `shortDescription` (used on the Home
// "Our Expertise" list) and a longer `detailedDescription` (used on the
// full Services page spreads).
export const SERVICES = [
  {
    id: "speaking-moderation",
    icon: "Mic",
    title: "Speaking, Moderation & Programme Direction",
    shortDescription:
      "Delivering engaging keynotes, moderating meaningful conversations and professionally directing corporate events and programmes",
    detailedDescription:
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
      "Helping professionals navigate career growth, transitions and personal development with greater clarity and confidence",
    detailedDescription:
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
      "Designing practical, engaging learning experiences that build capability and support professional growth",
    detailedDescription:
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
      "Designing and facilitating conversations that create clarity, strengthen alignment and move teams towards action",
    detailedDescription:
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
    id: "consulting-advisory",
    icon: "Briefcase",
    title: "Independent Consulting & Advisory",
    shortDescription:
      "Providing strategic insight and practical advisory support to organisations navigating growth, change and transformation",
    detailedDescription:
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
    id: "leadership",
    icon: "Award",
    title: "Leadership Development",
    shortDescription:
      "Developing confident, self-aware and effective leaders equipped to lead people, teams and change",
    detailedDescription:
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

// ────────────────────────────────────────────────────────────
// CODE-AUTHORED ARTICLES (hybrid with the Google Sheet)
// ────────────────────────────────────────────────────────────
// These full-length articles are hosted on-site at /insights/<slug>.
// The Insights list merges these with any articles pulled from the
// connected Google Sheet — sheet articles link out to an external URL,
// these open their on-site page.
//
// Each `body` block is a lightweight structured document:
//   { type: "heading" | "paragraph" | "quote" | "list" | "ordered", ... }
// rendered by src/app/insights/[slug]/page.tsx.
// ────────────────────────────────────────────────────────────

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "ordered"; items: string[] };

export interface CodeArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  publishDate: string;
  image: string;
  featured: boolean;
  body: ArticleBlock[];
}

export const CODE_ARTICLES: CodeArticle[] = [
  {
    id: "intentional-growth",
    slug: "why-intentional-growth-matters",
    category: "Growth & Development",
    title: "Why Intentional Growth Matters in a Fast-Changing Workplace",
    summary:
      "Growth does not happen simply because time passes. In a rapidly evolving workplace, meaningful growth requires intention, clarity and deliberate action.",
    readingTime: "6 min read",
    publishDate: "2026",
    image: "/images/heroes/growth-ambient.jpg",
    featured: true,
    body: [
      { type: "paragraph", text: "Growth does not happen simply because time passes. Meaningful growth requires intention." },
      { type: "paragraph", text: "The workplace continues to evolve at a rapid pace. Technology is changing how we work, organisations are navigating increasingly complex environments, and professionals are being challenged to continuously develop new skills, adapt to change and rethink what effective leadership looks like." },
      { type: "paragraph", text: "In this environment, simply being experienced is no longer enough. Individuals, leaders and organisations need to become more deliberate about how they grow." },
      { type: "paragraph", text: "This is where intentional growth becomes important." },
      { type: "heading", text: "Growth requires more than being busy" },
      { type: "paragraph", text: "It is easy to mistake activity for progress." },
      { type: "paragraph", text: "A full calendar, increasing responsibilities and years of experience can create the impression that development is happening automatically. But meaningful growth requires more than exposure. It requires the ability to reflect on our experiences, identify what they are teaching us and intentionally decide what needs to change next." },
      { type: "paragraph", text: "For professionals, this may mean asking: What skills am I building? What experiences am I gaining? Where do I need to stretch myself?" },
      { type: "paragraph", text: "For leaders, the questions become: How am I evolving as the needs of my team change? Am I creating an environment where people can perform, learn and contribute?" },
      { type: "paragraph", text: "And for organisations: Are we intentionally developing the capabilities our people will need for the future?" },
      { type: "paragraph", text: "These questions move us from passive experience to deliberate development." },
      { type: "heading", text: "Intentional growth starts with clarity" },
      { type: "paragraph", text: "Before deciding where to grow, we need to understand where we are." },
      { type: "paragraph", text: "Self-awareness is therefore an important part of development. Individuals need an honest understanding of their strengths, development areas, ambitions and behaviours. Leaders need to understand not only how they see themselves, but also how their leadership is experienced by others." },
      { type: "paragraph", text: "Organisations need the same clarity. What capabilities already exist within the organisation? Where are the gaps? What behaviours does the culture encourage? What skills will the strategy require in the future?" },
      { type: "paragraph", text: "Without clarity, development can easily become a collection of disconnected initiatives rather than a deliberate investment in growth." },
      { type: "heading", text: "Development must translate into action" },
      { type: "paragraph", text: "Learning is valuable, but learning without application rarely creates lasting transformation." },
      { type: "paragraph", text: "A workshop, leadership programme or training session should therefore not be the end of the development journey. The more important question is: What will we do differently because of what we have learned?" },
      { type: "paragraph", text: "This might mean changing a behaviour, developing a new capability, having a difficult conversation, taking on a stretch opportunity or approaching a familiar challenge differently." },
      { type: "paragraph", text: "Small, intentional actions repeated consistently can ultimately create significant change." },
      { type: "heading", text: "Creating a culture of intentional growth" },
      { type: "paragraph", text: "Organisations also have a role to play." },
      { type: "paragraph", text: "People are more likely to grow when they work in environments where learning, reflection, feedback and experimentation are encouraged." },
      { type: "paragraph", text: "Leaders can support this by creating opportunities for people to stretch themselves, encouraging meaningful career conversations and making development part of everyday work rather than something reserved for formal training programmes." },
      { type: "paragraph", text: "The strongest organisations understand that developing people is not separate from achieving business objectives. The two are connected. When people become more capable, confident and adaptable, organisations strengthen their ability to navigate change and achieve their strategic goals." },
      { type: "heading", text: "Five questions worth asking" },
      { type: "paragraph", text: "Whether you are thinking about your own development, your team or your organisation, consider:" },
      {
        type: "ordered",
        items: [
          "What capability do we need to build next?",
          "What are we doing simply because we have always done it this way?",
          "Where are our people struggling to adapt or grow?",
          "What conversations are we avoiding?",
          "What would meaningful growth look like over the next 12 months?",
        ],
      },
      { type: "paragraph", text: "Growth rarely happens by accident. It happens when we create the space to reflect, the courage to challenge where we are and the discipline to take intentional action towards where we want to go." },
      { type: "quote", text: "At Lumina Advisory, this belief sits at the heart of our work: where ambition meets intentional growth." },
    ],
  },
  {
    id: "strategic-facilitation",
    slug: "the-power-of-strategic-facilitation",
    category: "Facilitation & Strategy",
    title: "The Power of Strategic Facilitation: Why the Right Conversation Can Change a Team",
    summary:
      "Sometimes organisations do not need another meeting. They need a better conversation — one that creates clarity, surfaces different perspectives and connects dialogue to accountability.",
    readingTime: "6 min read",
    publishDate: "2026",
    image: "/images/stock/image10.jpeg",
    featured: false,
    body: [
      { type: "paragraph", text: "Sometimes organisations do not need another meeting. They need a better conversation." },
      { type: "paragraph", text: "Most organisations are not short of meetings. Calendars are filled with strategy sessions, leadership meetings, planning discussions, workshops and team engagements. Yet teams can leave these conversations with the same unresolved issues, different interpretations of what was agreed and very little clarity about what happens next." },
      { type: "paragraph", text: "The challenge is not always a lack of ideas. Sometimes, it is a lack of structure, alignment and meaningful dialogue." },
      { type: "paragraph", text: "That is where strategic facilitation can make a difference." },
      { type: "heading", text: "A meeting and a facilitated conversation are not the same thing" },
      { type: "paragraph", text: "A meeting typically focuses on exchanging information, providing updates or discussing immediate priorities." },
      { type: "paragraph", text: "Strategic facilitation has a different purpose. It intentionally creates an environment where the right people can explore an issue, challenge assumptions, contribute different perspectives, make decisions and move towards a shared outcome." },
      { type: "paragraph", text: "The difference can be thought of simply. A traditional meeting: Updates → Discussion → Next Meeting. A strategically facilitated session: Objective → Exploration → Dialogue → Alignment → Decisions → Ownership → Action." },
      { type: "paragraph", text: "The facilitator's role is not necessarily to provide all the answers. It is to create the conditions in which the people in the room can arrive at better answers together." },
      { type: "heading", text: "Why structure matters" },
      { type: "paragraph", text: "Important organisational conversations can easily become dominated by the loudest voices, distracted by operational issues or constrained by existing hierarchies." },
      { type: "paragraph", text: "A well-designed facilitated session creates structure around the conversation:" },
      {
        type: "list",
        items: [
          "What are we trying to achieve?",
          "What questions do we need to answer?",
          "Whose perspectives need to be heard?",
          "Where do we disagree?",
          "What decisions need to be made?",
          "What happens after we leave the room?",
        ],
      },
      { type: "paragraph", text: "These questions help move a conversation beyond discussion towards meaningful outcomes." },
      { type: "heading", text: "Creating space for different perspectives" },
      { type: "paragraph", text: "One of the most valuable aspects of facilitation is creating an environment where different perspectives can surface." },
      { type: "paragraph", text: "Teams do not always experience the same organisation in the same way. Senior leaders may see a challenge differently from frontline employees. Different functions may have competing priorities. People may also hold valuable insights that never emerge in traditional meetings." },
      { type: "paragraph", text: "Effective facilitation creates space for those perspectives while keeping the conversation focused on the overall objective. The aim is not necessarily for everyone to agree on everything. The aim is to develop enough shared understanding to make informed decisions and move forward together." },
      { type: "heading", text: "When strategic facilitation can help" },
      { type: "paragraph", text: "Strategic facilitation can be particularly valuable when organisations are navigating:" },
      {
        type: "list",
        items: [
          "Strategy development and annual planning",
          "Leadership alignment",
          "Organisational or team change",
          "Team effectiveness and alignment",
          "Stakeholder engagement",
          "Strategy resets and reflection sessions",
          "Complex decisions involving multiple perspectives",
        ],
      },
      { type: "paragraph", text: "In each of these situations, the quality of the conversation can directly influence the quality of the outcome." },
      { type: "heading", text: "From conversation to action" },
      { type: "paragraph", text: "A successful facilitated session should not end when people leave the room. The real value comes from what happens afterwards." },
      { type: "paragraph", text: "Participants should leave understanding what was decided, what actions need to happen, who owns those actions and how progress will be measured. This is why effective facilitation connects conversation with accountability." },
      { type: "paragraph", text: "Without that connection, even an energising workshop can quickly become another session people enjoyed but struggled to translate into meaningful change." },
      { type: "heading", text: "The right conversation can unlock what already exists" },
      { type: "paragraph", text: "Organisations often have significant knowledge, experience and ideas within their own teams. Sometimes the challenge is simply creating the right environment to unlock them." },
      { type: "paragraph", text: "A thoughtful question can challenge an assumption. A different perspective can reveal an overlooked opportunity. An honest conversation can surface an issue that has been limiting a team for months. And a shared decision can create the clarity people need to move forward." },
      { type: "quote", text: "Sometimes organisations do not need another strategy document. They need the right people in the room, asking the right questions, having the right conversation. That is the power of strategic facilitation." },
    ],
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const getImagePath = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("https") || path.startsWith("data:")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (basePath && cleanPath.startsWith(basePath)) return cleanPath;
  return `${basePath}${cleanPath}`;
};
