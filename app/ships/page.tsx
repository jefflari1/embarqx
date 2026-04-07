import type { Metadata } from "next";
import { ShipsPageContent } from "./ShipsPageContent";

export const metadata: Metadata = {
  title: "Ships & Venues — Illustrative Vessel Possibilities",
  description:
    "Explore the caliber of vessel environments EmbarqX concepts are designed for. All examples are illustrative.",
};

export default function ShipsPage() {
  return <ShipsPageContent />;
}
