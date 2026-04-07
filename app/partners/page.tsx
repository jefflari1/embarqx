import type { Metadata } from "next";
import { PartnersPageContent } from "./PartnersPageContent";

export const metadata: Metadata = {
  title: "Partner With EmbarqX",
  description:
    "Operators, sponsors, talent, and strategic collaborators: explore how to partner with EmbarqX and the unique value each partnership delivers.",
};

export default function PartnersPage() {
  return <PartnersPageContent />;
}
