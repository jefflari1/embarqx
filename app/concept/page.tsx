import type { Metadata } from "next";
import { ConceptPageContent } from "./ConceptPageContent";

export const metadata: Metadata = {
  title: "The Concept — What EmbarqX Is",
  description:
    "EmbarqX is a premium platform for originating, packaging, and scaling themed cruise experiences. Understand the model, the flywheel, and the opportunity.",
};

export default function ConceptPage() {
  return <ConceptPageContent />;
}
