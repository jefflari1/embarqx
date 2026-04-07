export interface Concept {
  id: string;
  title: string;
  tagline: string;
  description: string;
  targetAudience: string;
  opportunityAngle: string;
  sponsorPotential: string;
  programmingIdeas: string[];
  idealVessel: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export const concepts: Concept[] = [
  {
    id: "music-culture",
    title: "Music & Culture Voyages",
    tagline: "Where the world's most powerful sounds meet the open sea.",
    description:
      "A multi-day voyage built around genre-defining artists, DJ culture, live performance, and cultural community. Curated lineups, exclusive sets, day parties, and intimate artist experiences at sea.",
    targetAudience: "Music enthusiasts, festival culture, brand-conscious 25–45 demographic, streaming-native audiences",
    opportunityAngle: "High-repeat audience loyalty, premium ticket pricing, artist partnership opportunities, sponsorship from audio, spirits, and lifestyle brands.",
    sponsorPotential: "Streaming platforms, premium audio brands, spirits & lifestyle, apparel, travel platforms",
    programmingIdeas: [
      "Main stage performances under the stars",
      "Intimate artist cabin sessions",
      "Producer masterclasses",
      "Cultural panel discussions",
      "DJ pool parties and sunrise sets",
    ],
    idealVessel: "Large entertainment-class vessel with multiple performance decks, capacity 2,000–4,000 guests",
    accentColor: "#00C8E0",
    gradientFrom: "#0a0f1e",
    gradientTo: "#050a14",
  },
  {
    id: "poker-gaming",
    title: "Poker & Gaming Voyages",
    tagline: "The world's most exclusive floating tournament.",
    description:
      "A sophisticated gaming voyage featuring high-stakes poker tournaments, casino programming, strategy sessions, celebrity pros, and premium hospitality in a world-class maritime environment.",
    targetAudience: "High-net-worth gaming enthusiasts, poker circuit regulars, luxury lifestyle players, affluent male 30–55 demographic",
    opportunityAngle: "Premium pricing, high disposable income demographic, natural sponsorship from gaming, fintech, spirits, and luxury brands.",
    sponsorPotential: "Casino platforms, luxury watchmakers, premium spirits, financial services, gaming technology",
    programmingIdeas: [
      "Main tournament events with prize pools",
      "Celebrity pro-am sessions",
      "Strategy masterclasses with champions",
      "Side game rooms and private tables",
      "VIP casino programming",
    ],
    idealVessel: "Premium mid-size vessel with dedicated gaming spaces, suites, and VIP club environments",
    accentColor: "#C9A84C",
    gradientFrom: "#140c04",
    gradientTo: "#0a0703",
  },
  {
    id: "wellness-consciousness",
    title: "Wellness & Consciousness Voyages",
    tagline: "Deep rest, deep sea. A voyage for the inner world.",
    description:
      "A transformational retreat at sea combining world-class wellness programming, mindfulness leaders, plant-based nutrition, movement, breathwork, and consciousness exploration in a premium oceanic environment.",
    targetAudience: "Affluent wellness-conscious adults, spiritual community leaders, premium retreat seekers, high-performance professionals",
    opportunityAngle: "Fastest-growing luxury vertical, deeply loyal community, repeat voyage potential, crossover with mental health and performance culture.",
    sponsorPotential: "Premium wellness brands, functional nutrition, luxury skincare, meditation apps, high-performance apparel",
    programmingIdeas: [
      "Morning movement and sunrise breathwork sessions",
      "World-renowned teachers and practitioners",
      "Plant-based fine dining experiences",
      "Silence and reflection programming",
      "Consciousness workshops and immersive ceremonies",
    ],
    idealVessel: "Boutique luxury vessel or dedicated deck charter with spa facilities, yoga spaces, and premium suites",
    accentColor: "#7ECACC",
    gradientFrom: "#04110f",
    gradientTo: "#020a07",
  },
  {
    id: "sports-icon",
    title: "Sports Icon Voyages",
    tagline: "Compete. Connect. Celebrate. At sea with the legends.",
    description:
      "An immersive sports-culture voyage built around iconic athletes, competition programming, fan engagement, and premium hospitality. A space where legends and their most dedicated communities come together.",
    targetAudience: "Serious sports fans, premium fan communities, athlete brand followers, affluent sports culture enthusiasts",
    opportunityAngle: "Massive addressable fanbase, unrivaled access as a differentiator, natural brand alignment with sportswear, equipment, and nutrition.",
    sponsorPotential: "Sportswear brands, equipment manufacturers, sports nutrition, sports media, betting platforms, automotive",
    programmingIdeas: [
      "Q&A and meet-and-greet sessions with icons",
      "Onboard sports competitions and games",
      "Training sessions led by athletes",
      "Sports culture panels and documentary screenings",
      "Athlete curated entertainment programming",
    ],
    idealVessel: "Large-scale vessel with sports courts, fitness facilities, amphitheater, and entertainment spaces",
    accentColor: "#E85D2A",
    gradientFrom: "#130800",
    gradientTo: "#070400",
  },
  {
    id: "brand-charter",
    title: "Brand & Corporate Charter Concepts",
    tagline: "The most immersive brand experience in the world.",
    description:
      "Private charter programming designed for brands, agencies, and corporations seeking a wholly owned, premium floating event environment. From incentive trips to product launches to client experiences — at sea.",
    targetAudience: "Fortune 500 brands, premium agencies, luxury corporate clients, high-value incentive trip buyers",
    opportunityAngle: "Highest per-head spend, full brand ownership of environment, white-label scalability, premium B2B positioning.",
    sponsorPotential: "Full brand ownership — no sponsors required, or co-branded luxury partnership models",
    programmingIdeas: [
      "Exclusive product launch experiences",
      "Premium incentive reward voyages",
      "Leadership retreats and executive programs",
      "Client hospitality experiences",
      "Brand-world immersion at scale",
    ],
    idealVessel: "Full ship or mega-yacht charter depending on scale and brand aesthetic requirements",
    accentColor: "#C9A84C",
    gradientFrom: "#0d0d0a",
    gradientTo: "#060604",
  },
];

export const conceptStats = [
  { value: "5+", label: "Signature Concepts" },
  { value: "$12B+", label: "Themed Experience Market" },
  { value: "360°", label: "Immersive Programming" },
  { value: "∞", label: "Scalable Platform" },
];
