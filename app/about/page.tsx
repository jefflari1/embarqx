import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About EmbarqX — Vision, Philosophy & Story",
  description:
    "The story, vision, and philosophy behind EmbarqX — and why the platform exists at this moment in time.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
