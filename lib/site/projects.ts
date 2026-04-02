import type { EventEntry, ProjectEntry } from "@/lib/site/types";

export const projectCategories = [
  "All",
  "Community Events",
  "Brand Activations",
  "Talent Development",
  "Production"
];

export const projects: ProjectEntry[] = [
  {
    slug: "zululand-youth-creative-showcase",
    title: "Zululand Youth Creative Showcase",
    status: "Past",
    category: "Talent Development",
    location: "Vryheid, KwaZulu-Natal",
    timeline: "September 2025",
    summary:
      "A youth-focused showcase that combined live performances, networking, and local artist visibility in one community-led programme.",
    heroImage: "/nia/artist-poster.jpg",
    services: [
      "Event Planning & Management",
      "Entertainment Coordination",
      "Artist Bookings",
      "Marketing & Promotions"
    ],
    challenge:
      "The brief required a platform that looked credible enough for sponsors and partners while still feeling open, exciting, and accessible for emerging local talent.",
    response:
      "Nia built a programme that balanced curation, host flow, artist support, and strong audience-facing promotion. The event positioned young creatives as talent worth investing in, not just one-off performers.",
    outcome:
      "The showcase strengthened local creative visibility, created follow-up booking conversations, and established a format that can grow into a recurring platform.",
    metrics: [
      { label: "Attendance", value: "650+" },
      { label: "Performers featured", value: "24" },
      { label: "Partners involved", value: "6" },
      { label: "Follow-up enquiries", value: "31" }
    ],
    partners: ["Local schools", "Community media partners", "Youth development stakeholders"],
    gallery: [
      { src: "/nia/artist-poster.jpg", alt: "Nia artist development poster for local talent outreach." },
      { src: "/nia/heritage-day.png", alt: "Community-focused event styling and promotion artwork." }
    ]
  },
  {
    slug: "heritage-day-street-experience",
    title: "Heritage Day Street Experience",
    status: "Current",
    category: "Community Events",
    location: "Zululand District, KwaZulu-Natal",
    timeline: "Campaign in development for September 2026",
    summary:
      "A community-facing cultural experience being developed to celebrate heritage, spotlight local creatives, and create sponsor visibility in a family-friendly environment.",
    heroImage: "/nia/heritage-day.png",
    services: [
      "Festivals & Community Events",
      "Brand Activations",
      "Decor & Styling",
      "Sound, Stage & Production"
    ],
    challenge:
      "The concept needs to feel premium enough for brand partners while still being rooted in local culture, audience participation, and community access.",
    response:
      "Nia is shaping the event around cultural programming, branded interaction points, live talent curation, and a flexible sponsor integration model that can scale with partner interest.",
    outcome:
      "The project has already opened sponsor conversations and is designed to become a signature annual platform with strong community relevance.",
    metrics: [
      { label: "Projected footfall", value: "1,000+" },
      { label: "Sponsor tiers", value: "3" },
      { label: "Creative categories involved", value: "8" },
      { label: "Target region", value: "KwaZulu-Natal North" }
    ],
    partners: ["Community stakeholders", "Brand sponsors", "Local vendors", "Creative collectives"],
    gallery: [
      { src: "/nia/heritage-day.png", alt: "Heritage Day campaign artwork by Nia Events." },
      { src: "/nia/logo.png", alt: "Nia Events logo on a black background." }
    ]
  },
  {
    slug: "world-aids-day-community-dialogue",
    title: "World AIDS Day Community Dialogue",
    status: "Upcoming",
    category: "Brand Activations",
    location: "Vryheid, KwaZulu-Natal",
    timeline: "December 2026 planning window",
    summary:
      "A public awareness and entertainment-led event concept designed to combine education, local voices, and live programming in one strong community format.",
    heroImage: "/nia/aids-day.png",
    services: [
      "Brand Activations",
      "Festivals & Community Events",
      "Entertainment Coordination",
      "Marketing & Promotions"
    ],
    challenge:
      "The experience needs to handle a sensitive message with care while still creating turnout, brand trust, and meaningful local participation.",
    response:
      "Nia is developing a balanced event model that combines performance, dialogue, community partnership presence, and clear audience engagement touchpoints.",
    outcome:
      "The project pipeline is positioned to deliver both social impact and strong partner visibility once final sponsors and delivery partners are confirmed.",
    metrics: [
      { label: "Audience goal", value: "800" },
      { label: "Awareness partners targeted", value: "5" },
      { label: "Talent slots planned", value: "12" },
      { label: "Community zones", value: "4" }
    ],
    partners: ["Health stakeholders", "Youth organisations", "Local artists", "Community media"],
    gallery: [
      { src: "/nia/aids-day.png", alt: "World AIDS Day Nia campaign creative." },
      { src: "/nia/artist-poster.jpg", alt: "Artist poster used to reach local talent audiences." }
    ]
  }
];

export const events: EventEntry[] = [
  {
    slug: "nia-local-talent-open-mic-night",
    title: "Nia Local Talent Open Mic Night",
    status: "Upcoming",
    category: "Artist Showcase",
    date: "2026-05-30",
    time: "18:00",
    venue: "Vryheid Civic Hall",
    location: "Vryheid, KwaZulu-Natal",
    ticketStatus: "Free entry with RSVP confirmation",
    summary:
      "An evening built to spotlight musicians, DJs, MCs, dancers, and spoken-word creatives looking for performance experience and exposure.",
    heroImage: "/nia/artist-poster.jpg",
    tags: ["Artist development", "Open mic", "Community"],
    overview: [
      "This event is designed as a practical platform for local creatives to perform in a professionally managed environment that values preparation, audience experience, and visibility.",
      "Guests can expect a curated open mic programme, short networking moments, and clear information about how the Local Artist Development Program supports growth beyond one performance slot."
    ],
    highlights: [
      "Emerging artist performance slots",
      "MC-led programme flow",
      "Networking corner for creatives and potential partners",
      "Artist program information desk"
    ],
    gallery: [
      { src: "/nia/artist-poster.jpg", alt: "Promotional artwork for Nia's artist registration campaign." },
      { src: "/nia/logo.png", alt: "Nia Events logo used in event branding." }
    ],
    enquiryLabel: "RSVP or enquire"
  },
  {
    slug: "ingezo-yezikole-creative-tour",
    title: "Ingezo Yezikole Creative Tour",
    status: "Upcoming",
    category: "School Activation",
    date: "2026-06-19",
    time: "10:00",
    venue: "Multi-school roadshow",
    location: "Vryheid and surrounding schools",
    ticketStatus: "Closed partner programme",
    summary:
      "A school-facing outreach programme that introduces learners to local creative careers, performance pathways, and youth-focused inspiration.",
    heroImage: "/nia/heritage-day.png",
    tags: ["Youth outreach", "Schools", "Career inspiration"],
    overview: [
      "The tour is structured as an educational and inspirational activation that brings local creatives closer to young audiences while positioning talent development as a real pathway.",
      "Nia uses this format to connect entertainment, storytelling, and practical exposure in a way that works for schools, community stakeholders, and future sponsors."
    ],
    highlights: [
      "Creative career talks",
      "Live performance moments",
      "Partner visibility opportunities",
      "Learner engagement sessions"
    ],
    gallery: [
      { src: "/nia/heritage-day.png", alt: "Illustrative event artwork for a Nia community activation." },
      { src: "/nia/logo.png", alt: "Nia logo on a dark background." }
    ],
    enquiryLabel: "Ask about partnerships"
  },
  {
    slug: "world-aids-day-community-music-dialogue",
    title: "World AIDS Day Community Music Dialogue",
    status: "Past",
    category: "Community Awareness Event",
    date: "2025-12-01",
    time: "12:00",
    venue: "Vryheid public activation space",
    location: "Vryheid, KwaZulu-Natal",
    ticketStatus: "Free public access",
    summary:
      "A community-facing awareness concept combining performance, public dialogue, and partner presence around World AIDS Day.",
    heroImage: "/nia/aids-day.png",
    tags: ["Community", "Awareness", "Live performance"],
    overview: [
      "The programme used entertainment as a gateway to conversation, helping draw community attention while keeping the event accessible and engaging.",
      "It also demonstrated how Nia can support purpose-led activations that require both audience energy and responsible coordination."
    ],
    highlights: [
      "Live artist moments",
      "Community awareness messaging",
      "Public engagement touchpoints",
      "Partner activation visibility"
    ],
    gallery: [
      { src: "/nia/aids-day.png", alt: "World AIDS Day Nia event artwork." },
      { src: "/nia/logo.png", alt: "Nia Events logo for campaign branding." }
    ],
    enquiryLabel: "Enquire about a similar event"
  }
];

export const homeFeaturedProjectSlugs = [
  "zululand-youth-creative-showcase",
  "heritage-day-street-experience"
];

export const homeFeaturedEventSlugs = [
  "nia-local-talent-open-mic-night",
  "ingezo-yezikole-creative-tour"
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
