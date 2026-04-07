import type { Metadata } from "next";
import { FAQPageContent } from "./FAQPageContent";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About EmbarqX",
  description:
    "Answers to the most common questions about EmbarqX — what it is, how it works, and how to get involved.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}
