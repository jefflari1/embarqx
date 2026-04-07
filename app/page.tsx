import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PositioningStrip } from "@/components/sections/PositioningStrip";
import { WhatWeCreate } from "@/components/sections/WhatWeCreate";
import { ConceptsCarousel } from "@/components/sections/ConceptsCarousel";
import { WhyEmbarqX } from "@/components/sections/WhyEmbarqX";
import { PlatformDiagram } from "@/components/sections/PlatformDiagram";
import { PartnerTypes } from "@/components/sections/PartnerTypes";
import { ShipsShowcase } from "@/components/sections/ShipsShowcase";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "EmbarqX — Where Themed Worlds Come to Sea",
  description:
    "EmbarqX creates premium themed cruise concepts that unite culture, celebrity, community, luxury, and destination into unforgettable voyages built for scale.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningStrip />
      <WhatWeCreate />
      <ConceptsCarousel />
      <WhyEmbarqX />
      <PlatformDiagram />
      <PartnerTypes />
      <ShipsShowcase />
      <GalleryPreview />
      <FinalCTA />
    </>
  );
}
