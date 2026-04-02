import type {
  ContactMethod,
  FAQEntry,
  FeatureItem,
  FounderProfile,
  NavigationItem,
  PartnerLogoItem,
  StatItem,
  TestimonialEntry,
  ValueItem
} from "@/lib/site/types";

export const siteNavigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/artist-development", label: "Artist Program" },
  { href: "/partners", label: "Sponsors & Partners" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const socialLinks = [
  { href: "https://wa.me/27614667011", label: "WhatsApp" },
  { href: "mailto:niaptyltd@gmail.com", label: "Email" },
  { href: "tel:+27614667011", label: "Call" }
];

export const siteStats: StatItem[] = [
  { value: "10", label: "Core service lines available through one Nia team" },
  { value: "4", label: "Commercial lanes across bookings, activations, packages, and development" },
  { value: "KZN", label: "Local delivery focus anchored in Vryheid and Zululand" }
];

export const companyHighlights: FeatureItem[] = [
  {
    title: "Professional booking, activation, and creative development support",
    description:
      "Nia provides professional artist booking, brand activation, event entertainment, and creative development services across Zululand with a focus on quality, reliability, and cultural relevance."
  },
  {
    title: "A real bridge between brands, communities, and local talent",
    description:
      "We do more than source performers. We build professional opportunities for musicians, DJs, MCs, dancers, writers, visual artists, and emerging creative entrepreneurs through visible, well-managed platforms."
  },
  {
    title: "Built for KwaZulu-Natal realities",
    description:
      "Our approach is shaped by the practical needs of Vryheid, Zululand, and surrounding communities where strong relationships, visible impact, and dependable execution matter."
  }
];

export const whyChooseNia: FeatureItem[] = [
  {
    title: "Local insight",
    description:
      "We understand the local audience, venues, partners, and logistics needed to make events land well in KwaZulu-Natal communities."
  },
  {
    title: "Premium delivery",
    description:
      "Clean planning systems, considered styling, and strong production coordination help every activation feel intentional and professionally managed."
  },
  {
    title: "Talent-first model",
    description:
      "Our work is designed to create visibility and structured opportunities for local creatives while still meeting commercial objectives."
  },
  {
    title: "Scalable partnerships",
    description:
      "Whether you need a once-off event, a recurring activation series, or a bigger sponsorship conversation, Nia is structured to grow with you."
  }
];

export const aboutContent = {
  story: [
    "Nia Events & Entertainment was founded by Sihle Magagula to bring together two needs that are often separated: professional event delivery and practical opportunity for local talent. The business was built to serve clients who need trusted event support while also opening more doors for artists and creatives across Vryheid, Zululand, and the wider KwaZulu-Natal region.",
    "That vision shows up in both commercial and community-led work. From artist bookings and brand activations to youth-facing initiatives like Ingezo Yezikole, Nia develops experiences that feel polished, credible, culturally relevant, and rooted in visible local impact."
  ],
  mission:
    "To deliver high-impact events, activations, and entertainment experiences while building real opportunities for local talent to grow, perform, collaborate, and be seen.",
  vision:
    "To become one of KwaZulu-Natal's most trusted event and entertainment partners, known for premium execution, strong cultural relevance, and meaningful creative development.",
  whyItExists:
    "Nia exists because talented people deserve structured support, and clients deserve an events partner that can combine strategy, logistics, entertainment value, local insight, and community relevance in one team.",
  values: [
    {
      title: "Professionalism",
      description:
        "We show up prepared, communicate clearly, and treat every project like it matters."
    },
    {
      title: "Opportunity",
      description:
        "We actively create spaces for local artists and creatives to be discovered, developed, and booked."
    },
    {
      title: "Community relevance",
      description:
        "We build concepts that feel aligned to the people, places, and cultural context they serve."
    },
    {
      title: "Execution",
      description:
        "Ideas only matter when they are delivered well, safely, and on time."
    }
  ] satisfies ValueItem[],
  leadershipNote:
    "Nia is currently led by founder Sihle Magagula, with delivery built around trusted collaborators, creative partners, and specialist suppliers who can scale with each brief."
};

export const founderProfile: FounderProfile = {
  name: "Sihle Magagula",
  role: "Founder, Nia Events & Entertainment",
  bio: "Sihle Magagula leads Nia Events & Entertainment with a focus on premium local events, artist booking, youth-facing initiatives, and stronger creative opportunity across Vryheid and the wider Zululand region."
};

export const artistProgramContent = {
  intro:
    "The Local Artist Development Program is designed to support creatives beyond simple event bookings. It exists to help artists become more visible, better prepared, and better connected to real opportunities, activations, and industry-facing support.",
  description: [
    "Nia's artist development work supports musicians, DJs, MCs, dancers, writers, painters, fashion designers, and other creatives who are serious about growing their craft and their professional presence.",
    "The programme includes artist development guidance, SAMRO registration support, access to opportunities and exposure, brand activation participation, networking spaces, and practical career support for creatives who want to move forward with more structure."
  ],
  pillars: [
    "Artist profiling and development support",
    "SAMRO registration guidance and next-step support",
    "Performance, activation, and exposure opportunities",
    "Networking with organisers, collaborators, and partners",
    "Career support for creatives building a professional path"
  ],
  openTo: [
    "Musicians",
    "DJs",
    "MCs",
    "Dancers",
    "Writers",
    "Painters",
    "Fashion designers",
    "Other creatives"
  ]
};

export const partnerContent = {
  intro:
    "Partnering with Nia gives brands, organisations, and institutions a way to show up in culturally relevant spaces while supporting local talent, youth development, and community-facing experiences.",
  reasons: [
    {
      title: "Community impact",
      description:
        "Your brand supports platforms that create visibility, dignity, growth, and practical opportunities for emerging creatives and community-focused youth initiatives in KwaZulu-Natal."
    },
    {
      title: "Meaningful visibility",
      description:
        "Partnerships can include event branding, programme mentions, stage recognition, social media appreciation, and on-site audience engagement opportunities."
    },
    {
      title: "Credible local connection",
      description:
        "Nia is positioned to help brands connect with local audiences in ways that feel visible, personal, and rooted in practical community value."
    }
  ],
  sponsorBenefits: [
    "Direct visibility to learners, families, schools, community members, and local audiences",
    "Association with youth development, hygiene and wellness, dignity, and community upliftment",
    "On-site visibility, stakeholder engagement, and social-media recognition opportunities",
    "Flexible support models across financial, in-kind, service, or collaborative partnership formats"
  ],
  supportModels: [
    "Financial sponsorship for event delivery, prizes, artist fees, or production needs",
    "In-kind support such as product hampers, refreshments, transport, venue support, or equipment",
    "Service partnerships across media, branding, logistics, safety, or activation support",
    "Longer-term collaboration around youth engagement, local talent visibility, and community programmes"
  ]
};

export const partnerLogos: PartnerLogoItem[] = [
  { name: "Municipal and civic stakeholders", category: "Local delivery ecosystem" },
  { name: "Schools and education networks", category: "Youth-facing programmes" },
  { name: "Regional retail and consumer brands", category: "Brand visibility" },
  { name: "Community media platforms", category: "Audience reach" },
  { name: "Creative collectives and promoters", category: "Talent ecosystem" },
  { name: "NGOs and community initiatives", category: "Social-impact partnerships" }
];

export const contactDetails = {
  email: "niaptyltd@gmail.com",
  phone: "+27 61 466 7011",
  whatsapp: "+27 61 466 7011",
  contactPerson: "Sihle Magagula",
  region: "Vryheid, Zululand, KwaZulu-Natal, South Africa",
  hours: [
    "Monday to Friday: 08:00 - 17:30",
    "Saturday: 09:00 - 13:00",
    "Sunday: By prior arrangement"
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Vryheid,+KwaZulu-Natal,+South+Africa&output=embed"
};

export const testimonials: TestimonialEntry[] = [
  {
    quote:
      "Nia brought structure, professionalism, and a strong local understanding to our activation. The team was hands-on, responsive, and easy to work with from planning through delivery.",
    name: "Bongiwe Mthethwa",
    role: "Marketing Coordinator",
    organisation: "Regional retail partner"
  },
  {
    quote:
      "What stood out was the way Nia treated local artists seriously. The platform felt organised, respectful, and growth-focused rather than just another event slot.",
    name: "Sanele Khumalo",
    role: "Performer and creative",
    organisation: "Local Artist Development participant"
  },
  {
    quote:
      "We needed a team that could connect community energy with professional event management. Nia delivered both and made the process far less stressful.",
    name: "Lerato Dlamini",
    role: "Programme lead",
    organisation: "Community stakeholder"
  }
];

export const faqs: FAQEntry[] = [
  {
    question: "Does Nia only work on music events?",
    answer:
      "No. Nia supports corporate functions, public activations, community programmes, artist-led showcases, and broader entertainment production needs."
  },
  {
    question: "Is the Local Artist Development Program only for booked performers?",
    answer:
      "No. The programme is built to support growth, exposure, networking, SAMRO guidance, and development opportunities for a wide mix of creatives."
  },
  {
    question: "Can sponsors and partners collaborate on a once-off campaign?",
    answer:
      "Yes. Nia works on once-off activations, event-specific sponsorships, and partnership conversations that can scale into longer-term programmes."
  }
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" }
];

export const quoteBudgetRanges = [
  "Below R10,000",
  "R10,000 - R25,000",
  "R25,000 - R50,000",
  "R50,000 - R100,000",
  "R100,000+"
];

export const enquiryCategories = [
  "General enquiry",
  "Quote request",
  "Artist development",
  "Sponsorship and partnerships",
  "Event collaboration",
  "Production support"
];

export const quoteEventTypes = [
  "Corporate event",
  "Festival or community event",
  "Concert or live showcase",
  "School activation",
  "Brand activation",
  "Private event",
  "Other"
];

export const creativeTypes = [
  "Musician",
  "DJ",
  "MC",
  "Dancer",
  "Writer",
  "Painter",
  "Fashion designer",
  "Other creative"
];

export const preferredContactMethods: ContactMethod[] = ["Email", "Phone call", "WhatsApp"];
