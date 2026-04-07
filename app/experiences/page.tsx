import type { Metadata } from "next";
import { ExperiencesPageContent } from "./ExperiencesPageContent";

export const metadata: Metadata = {
  title: "Signature Experiences",
  description:
    "Explore the full range of premium themed cruise concepts EmbarqX creates — from music voyages to wellness retreats, gaming tournaments to sports icon experiences.",
};

export default function ExperiencesPage() {
  return <ExperiencesPageContent />;
}
