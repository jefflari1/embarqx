"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Repeat, DollarSign } from "lucide-react";

const thesis = [
  { icon: TrendingUp, title: "Market Tailwind", body: "The premium live experience economy is structurally growing. Consumers are allocating more spend to memorable experiences over material goods — and themed cruises sit at the premium intersection of travel, entertainment, and community." },
  { icon: Shield, title: "Capital-Light Model", body: "EmbarqX does not own ships. We own concepts. This means minimal physical asset risk, no depreciation liabilities, and pure value creation through intellectual property, programming, and partnerships." },
  { icon: Repeat, title: "Repeatable IP", body: "Each voyage is not a one-off. It is season one of a franchise. The EmbarqX model is built to compound — brand equity, audience loyalty, and sponsor demand all increase with every sailing." },
  { icon: DollarSign, title: "Multiple Revenue Streams", body: "Charter fees, ticket sales, sponsorship packages, merchandise, exclusive experiences, and content rights. Every voyage activates multiple revenue channels simultaneously." },
];

const monetization = [
  { stream: "Charter / Programming Fee", description: "EmbarqX charges cruise operators a programming fee for the concept, IP, and audience delivery." },
  { stream: "Ticket Revenue Share", description: "A structured share of ticket revenue reflects EmbarqX's role in audience development and concept ownership." },
  { stream: "Sponsorship Packages", description: "Category-exclusive sponsorships and brand activations priced at a significant premium to standard events." },
  { stream: "Merchandise & Exclusives", description: "Limited-edition voyage merchandise, NFT collectibles, and onboard exclusive experience upsells." },
  { stream: "Content & IP Licensing", description: "Voyage content, photography, and brand IP licensed for media, streaming, and marketing use." },
  { stream: "Season Two+ Premiums", description: "Returning voyages command higher pricing across all revenue streams as brand equity compounds." },
];

export function InvestorsPageContent() {
  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#100800] via-bg-base to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-gold-glow opacity-50" />
        <div className="container-premium relative z-10 pb-20 pt-36">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel accent="gold" className="mb-6">Investor Relations</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-6 max-w-4xl"
          >
            A platform built for
            <br />
            <span className="text-gold-DEFAULT">compounding returns.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fg-secondary text-lg leading-relaxed max-w-2xl">
            EmbarqX offers a rare opportunity: exposure to the fast-growing premium experience economy through a capital-light model with repeatable IP, multiple revenue streams, and clear platform-level upside.
          </motion.p>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-padding bg-bg-elevated border-y border-border">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SectionLabel accent="gold" className="mb-5">Investment Thesis</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary max-w-xl">
              Why now. Why EmbarqX. Why this model.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {thesis.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div key={t.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-7 rounded-sm"
                  style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(201,168,76,0.15)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                      <Icon size={16} style={{ color: "#C9A84C" }} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 500 }} className="text-fg-primary">{t.title}</h3>
                  </div>
                  <p className="text-fg-muted text-sm leading-relaxed">{t.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SectionLabel className="mb-5">Revenue Architecture</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary max-w-xl">
              Multiple streams. One platform.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monetization.map((m, i) => (
              <motion.div key={m.stream} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-sm"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-6 h-0.5 bg-cyan-DEFAULT mb-4" />
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 500 }} className="text-fg-primary mb-2">{m.stream}</h3>
                <p className="text-fg-muted text-xs leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform vs Event */}
      <section className="section-padding bg-bg-elevated">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <SectionLabel accent="gold" className="mb-5">Platform vs. Event</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary max-w-xl">
              This is not a single event investment.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-sm" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="label-tag text-[0.6rem] text-fg-muted mb-5">Standard Event Investment</p>
              {["One-time execution risk", "Single revenue event", "No brand equity accumulation", "Audience built once, not retained", "Sponsor dollars compete with event cost", "Success not repeatable by design"].map((item) => (
                <div key={item} className="flex items-start gap-2.5 mb-3">
                  <span className="w-1 h-1 rounded-full bg-fg-subtle mt-1.5 shrink-0" aria-hidden />
                  <span className="text-fg-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-sm" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(0,200,224,0.03) 100%)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="label-tag text-[0.6rem] text-gold-DEFAULT mb-5">EmbarqX Platform Investment</p>
              {["Repeatable model with compounding equity", "Multi-stream revenue per voyage", "Brand IP grows in value with each sailing", "Loyal audience carries season to season", "Sponsors compete to be included", "Designed from day one for Season 2, 3, and beyond"].map((item) => (
                <div key={item} className="flex items-start gap-2.5 mb-3">
                  <span className="w-1 h-1 rounded-full bg-gold-DEFAULT mt-1.5 shrink-0" aria-hidden />
                  <span className="text-fg-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-deep border-t border-border">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel className="mb-6">Start the Conversation</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 500 }} className="text-fg-primary mb-5">
              The founding partner window is open.
            </h2>
            <p className="text-fg-muted text-base leading-relaxed mb-10 max-w-xl">
              EmbarqX is currently building its founding investor and partner network. We are structured, serious, and selective. If you see the opportunity in what we are building, we want to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?type=investor" className="btn-primary">
                Request Investor Discussion
                <ArrowRight size={14} />
              </Link>
              <Link href="/concept" className="btn-secondary">
                Read the Full Concept
              </Link>
            </div>
            <p className="mt-8 text-fg-subtle text-xs">
              All investor conversations are treated with complete confidentiality. No unsolicited materials will be shared.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
