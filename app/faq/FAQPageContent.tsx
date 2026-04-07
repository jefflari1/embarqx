"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is EmbarqX a cruise line?",
    a: "No. EmbarqX is not a cruise line and does not own any vessels. We are a premium platform that originates, packages, and scales themed cruise concepts. We work with established cruise operators to deploy our concepts on their ships, bringing programming, audience, and commercial structure — while operators bring world-class maritime infrastructure."
  },
  {
    q: "Are EmbarqX voyages already confirmed and on sale?",
    a: "EmbarqX is currently in its development and partner-building phase. We are assembling our founding partner network — investors, operators, sponsors, and talent — before announcing specific voyage dates. All information on this site presents the EmbarqX concept, model, and opportunity. Voyage confirmations will be announced through official channels."
  },
  {
    q: "Do you work with cruise operators and charter partners?",
    a: "Yes. Cruise operator and charter partnerships are a core element of the EmbarqX model. We approach operators as programming and audience partners — bringing a structured concept, pre-built demand, and sponsorship architecture to enhance vessel utilization and per-head revenue. We welcome conversations with serious operators interested in this model."
  },
  {
    q: "Can brands sponsor an EmbarqX voyage?",
    a: "Absolutely. Brand sponsorship is a significant commercial layer of every EmbarqX voyage. Unlike standard event sponsorship, an EmbarqX voyage offers category exclusivity, 3–7 days of captive premium audience access, fully integrated brand experience design, and content creation opportunities. We are currently speaking with founding concept sponsors for our first voyages."
  },
  {
    q: "Do you work with celebrities and talent representation?",
    a: "Yes. Celebrity and talent partnerships are integral to several EmbarqX concept categories — particularly Music & Culture Voyages, Sports Icon Voyages, and select Wellness concepts. We approach talent as creative co-authors and commercial partners, not just appearances. Talent representation teams are welcome to reach out through our contact form."
  },
  {
    q: "Can investors participate at the platform or individual event level?",
    a: "EmbarqX welcomes conversations with investors interested in both platform-level participation and individual voyage or concept-level structures. We are building our founding investor network now. All investment conversations are treated with complete confidentiality. Please use the Investor inquiry type on our contact form to start a discussion."
  },
  {
    q: "Are the ship and vessel examples on this site illustrative?",
    a: "Yes, all vessel references and examples shown on the EmbarqX website are illustrative only and represent the caliber and style of vessel environments that can support premium themed cruise programming. They do not imply any confirmed relationship with any specific cruise operator, and should be understood as examples of the scale and type of infrastructure EmbarqX concepts are designed for."
  },
  {
    q: "Is EmbarqX a one-off event company?",
    a: "No. This is a fundamental point of distinction. EmbarqX is designed as a platform — not an event. Each concept is built as repeatable intellectual property with a branded identity, loyal audience, and commercial structure that compounds over multiple sailing seasons. Season two is built into the DNA of every concept from day one."
  },
  {
    q: "What markets and destinations does EmbarqX operate in?",
    a: "EmbarqX is designed to operate globally. Initial concept activation will be focused on established cruise markets, with destination selection driven by concept fit, operator partnership, and audience demand. We are not limited by geography — the platform model is designed to scale across multiple markets and routes."
  },
  {
    q: "How can I start a conversation with EmbarqX?",
    a: "The best way to begin is through our Contact page. Please select the inquiry type that best describes your interest — Investor, Operator, Sponsor, Talent, or Strategic Collaborator — and provide a brief description of your background and interest. A member of the EmbarqX team will follow up within 2 business days. All conversations are treated with complete discretion."
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
    >
      <div
        className="border-b border-border overflow-hidden"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-start justify-between gap-6 py-6 text-left group"
          aria-expanded={open}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
        >
          <span
            className="text-fg-primary text-base leading-snug group-hover:text-cyan-DEFAULT transition-colors duration-200"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.125rem", fontWeight: 500 }}
          >
            {faq.q}
          </span>
          <div
            className="w-7 h-7 rounded-sm flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
            style={{
              background: open ? "rgba(0,200,224,0.1)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${open ? "rgba(0,200,224,0.25)" : "rgba(255,255,255,0.08)"}`,
              color: open ? "#00C8E0" : "var(--fg-muted)",
              transform: open ? "rotate(45deg)" : "none",
            }}
            aria-hidden
          >
            <Plus size={14} />
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="text-fg-muted text-sm leading-relaxed pb-6 pr-12">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQPageContent() {
  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative py-36 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030814] via-bg-base to-bg-deep" />
        <div className="container-premium relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SectionLabel className="mb-6">Frequently Asked Questions</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-5 max-w-3xl">
            The questions that matter.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-fg-secondary text-lg max-w-xl leading-relaxed">
            Clear answers to the most common questions about EmbarqX — what it is, how it works, and how to get involved.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium max-w-4xl">
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Contact prompt */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 p-8 rounded-sm text-center"
            style={{ background: "linear-gradient(135deg, rgba(0,200,224,0.05) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(0,200,224,0.15)" }}>
            <p className="text-fg-secondary text-base mb-2" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem" }}>
              Still have questions?
            </p>
            <p className="text-fg-muted text-sm mb-6">
              We are always happy to speak with serious prospective partners, investors, and collaborators.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
