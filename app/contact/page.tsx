import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation",
  description:
    "Reach out to EmbarqX. Whether you are an investor, operator, sponsor, talent partner, or collaborator — the conversation starts here.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
