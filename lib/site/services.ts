import type { ServiceCategory } from "@/lib/site/types";

export const services: ServiceCategory[] = [
  {
    slug: "event-planning-management",
    title: "Event Planning & Management",
    icon: "calendar",
    shortIntro:
      "End-to-end planning support for events that need structure, flow, and dependable execution.",
    summary:
      "We shape your concept, coordinate suppliers, manage the run sheet, and keep the moving parts aligned so your event feels smooth from setup to close-out.",
    benefits: [
      "Clear timelines and production planning",
      "Single team coordinating logistics and supplier communication",
      "Less stress for hosts, stakeholders, and on-site teams"
    ],
    deliverables: [
      "Concept planning and scope alignment",
      "Venue and supplier coordination",
      "Run-of-show scheduling",
      "On-site event management and post-event close-out"
    ],
    featured: true
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    icon: "briefcase",
    shortIntro:
      "Professional experiences for launches, internal gatherings, conferences, and client-facing moments.",
    summary:
      "Nia helps businesses create corporate events that reflect their standards, strengthen relationships, and communicate their message with confidence.",
    benefits: [
      "Professional presentation that builds trust",
      "Stronger guest and stakeholder experience",
      "Flexible support for intimate and medium-scale business events"
    ],
    deliverables: [
      "Program planning and event flow",
      "Supplier and speaker coordination",
      "Venue styling and branding support",
      "Guest experience and on-the-day logistics"
    ],
    featured: true
  },
  {
    slug: "festivals-community-events",
    title: "Festivals & Community Events",
    icon: "users",
    shortIntro:
      "Culturally aware public events built for engagement, excitement, and safe coordination.",
    summary:
      "From heritage celebrations to school and youth-focused experiences, we help bring people together through events that feel vibrant and locally grounded.",
    benefits: [
      "Programming designed for community participation",
      "Stronger local visibility for partners and sponsors",
      "Coordination support for complex public-facing activities"
    ],
    deliverables: [
      "Concept and programme development",
      "Stakeholder and community liaison",
      "Stage and entertainment scheduling",
      "Operational support across the event day"
    ],
    featured: true
  },
  {
    slug: "artist-bookings",
    title: "Artist Bookings",
    icon: "mic",
    shortIntro:
      "Booking support for artists, DJs, MCs, and performers suited to your audience and event goals.",
    summary:
      "We help match the right talent to the right platform while keeping communication, performance expectations, and logistics professionally managed.",
    benefits: [
      "Better-fit talent recommendations",
      "Professional coordination between client and artist",
      "Reduced booking risk and confusion"
    ],
    deliverables: [
      "Talent sourcing and curation",
      "Booking coordination and communication",
      "Performance scheduling",
      "Artist liaison before and during the event"
    ],
    featured: true
  },
  {
    slug: "entertainment-coordination",
    title: "Entertainment Coordination",
    icon: "sparkles",
    shortIntro:
      "Full entertainment flow planning so every performance moment lands with impact.",
    summary:
      "Nia coordinates entertainment segments, transitions, technical cues, and performer support to keep energy levels high and programmes professionally paced.",
    benefits: [
      "Smoother show flow and transitions",
      "Better audience engagement throughout the programme",
      "More confidence for performers and hosts on the day"
    ],
    deliverables: [
      "Programme sequencing and set timing",
      "Host and performer cue sheets",
      "Backstage and performance coordination",
      "Technical alignment with production teams"
    ],
    featured: true
  },
  {
    slug: "brand-activations",
    title: "Brand Activations",
    icon: "radio",
    shortIntro:
      "Experiential activations that help brands show up with relevance, visibility, and local connection.",
    summary:
      "We develop activation concepts that turn brand presence into interaction, community engagement, and memorable on-the-ground exposure.",
    benefits: [
      "Higher audience interaction and recall",
      "Stronger local market visibility",
      "Creative concepts that can scale into campaigns"
    ],
    deliverables: [
      "Activation concept development",
      "Audience engagement mechanics",
      "Talent and promoter coordination",
      "On-site activation staffing support"
    ],
    featured: true
  },
  {
    slug: "decor-styling",
    title: "Decor & Styling",
    icon: "palette",
    shortIntro:
      "Visual finishing that makes a venue feel elevated, cohesive, and event-ready.",
    summary:
      "From stage dressing to table layouts and focal moments, we help shape spaces that feel intentional and aligned to the event brief.",
    benefits: [
      "More polished visual presentation",
      "Stronger event identity and guest impression",
      "Styling decisions aligned to budget and theme"
    ],
    deliverables: [
      "Styling concepts and mood direction",
      "Decor sourcing and setup planning",
      "Feature area styling",
      "On-site finishing support"
    ],
    featured: false
  },
  {
    slug: "sound-stage-production",
    title: "Sound, Stage & Production",
    icon: "speaker",
    shortIntro:
      "Technical support planning for events that depend on strong sound, staging, and live delivery.",
    summary:
      "We coordinate production requirements so performances, speeches, and event moments are heard clearly and experienced with confidence.",
    benefits: [
      "More reliable technical execution",
      "Clearer planning for sound and stage needs",
      "Better performer and presenter experience"
    ],
    deliverables: [
      "Production requirement planning",
      "Sound and staging coordination",
      "Cue support with performers and hosts",
      "Technical run sheet alignment"
    ],
    featured: false
  },
  {
    slug: "marketing-promotions",
    title: "Marketing & Promotions",
    icon: "megaphone",
    shortIntro:
      "Pre-event and event-day promotional support that helps audiences show up and engage.",
    summary:
      "Nia supports visibility through local campaign planning, artist and partner amplification, and practical communication that keeps audiences informed.",
    benefits: [
      "Improved audience awareness before launch",
      "Stronger event and artist visibility",
      "More consistent messaging across touchpoints"
    ],
    deliverables: [
      "Promotional messaging support",
      "Basic campaign rollout planning",
      "Audience communication assets",
      "Partner and community amplification guidance"
    ],
    featured: false
  },
  {
    slug: "talent-development-support",
    title: "Talent Development Support",
    icon: "star",
    shortIntro:
      "Structured support for artists and creatives who need development, exposure, and better opportunities.",
    summary:
      "This service extends beyond bookings. We help connect local talent to guidance, activation opportunities, industry readiness, and professional visibility.",
    benefits: [
      "Better readiness for live opportunities",
      "Improved visibility to brands and event organisers",
      "Practical support around career-building steps"
    ],
    deliverables: [
      "Artist guidance and profiling support",
      "Opportunity matching and activation inclusion",
      "Career support conversations and referrals",
      "SAMRO registration support guidance"
    ],
    featured: false
  }
];

export const featuredServiceSlugs = services
  .filter((service) => service.featured)
  .map((service) => service.slug);

export const serviceOptionList = services.map((service) => service.title);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
