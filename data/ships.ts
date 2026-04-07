export interface ShipClass {
  id: string;
  class: string;
  descriptor: string;
  description: string;
  headline: string;
  features: string[];
  capacity: string;
  venues: string[];
  gradient: string;
  note: string;
}

export const shipClasses: ShipClass[] = [
  {
    id: "flagship",
    class: "Flagship Entertainment Class",
    descriptor: "Icon-Level Scale",
    headline: "The stage is the ocean.",
    description:
      "The world's largest cruise environments offer unmatched infrastructure for themed programming — multi-deck venues, grand theaters, open-air stages, and the capacity to host thousands. These vessels represent the top tier of what's possible at sea.",
    features: [
      "Capacity 4,000–6,000+ guests",
      "Multi-deck entertainment venues",
      "Grand theater — 1,400+ seats",
      "Open-air amphitheater decks",
      "5+ premium dining environments",
      "Multiple pool and deck zones",
      "VIP suite and loft categories",
      "Full casino and gaming floor",
      "Full media production infrastructure",
    ],
    capacity: "4,000–6,000+",
    venues: ["Grand Theater", "Open-Air Stage Deck", "Casino", "VIP Lounge", "Sky Pool", "Multi-Level Nightclub"],
    gradient: "from-[#020a1a] to-[#030508]",
    note: "Illustrative vessel class examples used for scale reference only. No confirmed operator relationships are implied.",
  },
  {
    id: "premium-entertainment",
    class: "Premium Entertainment Class",
    descriptor: "Premium Intimacy at Scale",
    headline: "Luxury that moves with the experience.",
    description:
      "Mid-to-large entertainment vessels deliver exceptional programming flexibility, intimate guest experiences, and a premium social environment. The ideal format for themed cruise concepts that prioritize atmosphere and brand coherence.",
    features: [
      "Capacity 2,000–4,000 guests",
      "Theater — 700–1,000 seats",
      "Dedicated nightlife venues",
      "Multiple pool environments",
      "Premium dining — 4+ concepts",
      "Adults-only deck options",
      "Spa and wellness facilities",
      "Casino and gaming programming",
    ],
    capacity: "2,000–4,000",
    venues: ["Theater", "Supper Club", "Rooftop Pool Deck", "Nightclub", "Casino", "Wellness Spa"],
    gradient: "from-[#0a0c03] to-[#050603]",
    note: "Illustrative vessel class examples used for scale reference only. No confirmed operator relationships are implied.",
  },
  {
    id: "modern-social",
    class: "Modern Social Class",
    descriptor: "Design-Forward Energy",
    headline: "Where social culture sets sail.",
    description:
      "A new generation of visually stunning vessels purpose-built for a younger premium traveler. Clean design language, bold social spaces, cutting-edge entertainment programming, and a modern luxury aesthetic.",
    features: [
      "Capacity 3,500–5,000 guests",
      "Signature restaurant collections",
      "Premium outdoor social spaces",
      "Theater and live entertainment",
      "Modern casino environments",
      "Multi-level pool complex",
      "Rooftop lounge and bar",
      "Broadcast-ready media spaces",
    ],
    capacity: "3,500–5,000",
    venues: ["Rooftop Social Deck", "Theater", "Signature Restaurants", "Multi-Level Casino", "VIP Lounge", "Outdoor Stage"],
    gradient: "from-[#0a0314] to-[#050208]",
    note: "Illustrative vessel class examples used for scale reference only. No confirmed operator relationships are implied.",
  },
];
