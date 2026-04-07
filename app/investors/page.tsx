import type { Metadata } from "next";
import { InvestorsPageContent } from "./InvestorsPageContent";

export const metadata: Metadata = {
  title: "Investor Relations — Platform Opportunity",
  description:
    "EmbarqX offers investors exposure to the premium experience economy through a capital-light, IP-driven, scalable platform. Explore the investment thesis.",
};

export default function InvestorsPage() {
  return <InvestorsPageContent />;
}
