import type {
  ContactDetails,
  NavigationItem,
  SiteHighlight,
  SocialLink,
  StatItem
} from "@/src/types/site";

export const siteConfig = {
  name: "Dumbe Music Awards",
  shortName: "DMA",
  tagline: "Celebrating local sound, recognition, and cultural legacy.",
  description:
    "Dumbe Music Awards is a premium cultural platform dedicated to recognising, celebrating, and elevating musical talent from Dumbe and surrounding communities.",
  region: "Dumbe region and surrounding communities",
  heroEyebrow: "A serious stage for local excellence",
  heroHeadline: "Celebrating Talent. Honouring Legacy. Elevating Dumbe.",
  heroSubheadline:
    "Dumbe Music Awards exists to recognise the artists shaping our sound, expand their visibility, and build a cultural legacy that the region can stand behind with pride.",
  footerStatement:
    "Dumbe Music Awards is more than an event. It is a platform for recognition, aspiration, and long-term cultural impact across Dumbe and the communities around it."
} as const;

export const navigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/ceremonies", label: "Ceremonies" },
  { href: "/gallery", label: "Gallery" },
  { href: "/vision", label: "Vision" },
  { href: "/contact", label: "Contact" }
];

export const footerLinks: NavigationItem[] = [
  ...navigation,
  { href: "/partners", label: "Partners" },
  { href: "/media", label: "Media" }
];

export const heroStats: StatItem[] = [
  {
    value: "4",
    label: "Ceremonies represented",
    description: "A growing archive of recognition for regional talent."
  },
  {
    value: "12+",
    label: "Moments in the gallery",
    description: "Visual memories structured for future growth and media use."
  },
  {
    value: "2026",
    label: "Next awards focus",
    description: "The upcoming edition is positioned for stronger reach and sponsorship."
  }
];

export const featuredHighlights: SiteHighlight[] = [
  {
    title: "Recognition with real weight",
    description:
      "The platform gives local artists public honour, stronger visibility, and a more credible story to carry into the next opportunity.",
    metric: "Artist-first prestige",
    href: "/about"
  },
  {
    title: "Built to outlast one night",
    description:
      "Dumbe Music Awards is designed as a long-term cultural platform, not a once-off event. Each ceremony adds to a growing regional legacy.",
    metric: "Legacy over hype",
    href: "/vision"
  },
  {
    title: "Sponsor-ready from the start",
    description:
      "The brand language, ceremony structure, and public positioning are shaped to earn confidence from partners, media, and the broader public.",
    metric: "Credibility that converts",
    href: "/partners"
  }
];

export const contactDetails: ContactDetails = {
  email: "dumbemusic@gmail.com",
  whatsappDisplay: "0793266276",
  whatsappLink: "https://wa.me/27793266276",
  founder: "Bhekithmba Ngubane",
  location: "Dumbe region, KwaZulu-Natal, South Africa",
  responseTime: "We aim to respond within 24 to 48 hours."
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@dumbemusicawards",
    note: "Channel reserved for official updates and launch-ready content."
  },
  {
    label: "Facebook",
    handle: "Dumbe Music Awards",
    note: "Community news and ceremony announcements placeholder."
  },
  {
    label: "TikTok",
    handle: "@dumbemusicawards",
    note: "Performance snippets and behind-the-scenes content placeholder."
  }
];
