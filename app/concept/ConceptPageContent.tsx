"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Link from "next/link";
import { ArrowRight, RefreshCw, Layers, TrendingUp, Users, Globe, Zap } from "lucide-react";

const flywheel = [
  { icon: Zap, label: "Concept", desc: "EmbarqX develops and owns the branded concept IP" },
  { icon: Users, label: "Community", desc: "Pre-built audiences activate around the concept" },
  { icon: Globe, label: "Partnership", desc: "Talent, operator, and sponsor assembly" },
  { icon: RefreshCw, label: "Voyage", desc: "The branded experience comes to sea" },
  { icon: TrendingUp, label: "Scale", desc: "Season two launches with stronger equity and demand" },
];

const stakeholders = [
  {
    who: "Cruise Operators",
    value: "Guaranteed programming demand, higher cabin revenue, sponsor activation upside, multi-season relationship.",
    color: "#00C8E0",
  },
  {
    who: "Investors",
    value: "Platform-level exposure, capital-light model, repeatable IP, multiple revenue streams, growing brand equity.",
    color: "#C9A84C",
  },
  {
    who: "Sponsors",
    value: "Days of immersive brand access to a captive premium audience, category exclusivity, content creation.",
    color: "#00C8E0",
  },
  {
    who: "Talent Partners",
    value: "Unprecedented fan intimacy, premium revenue above touring, co-authorship of a truly iconic experience.",
    color: "#C9A84C",
  },
  {
    who: "Guests",
    value: "An experience they cannot get anywhere else. Days at sea with the culture, community, and brand they love most.",
    color: "#00C8E0",
  },
];

export function ConceptPageContent() {
  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020a14] via-bg-base to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-cyan-glow opacity-40" />
        <div className="container-premium relative z-10 pb-20 pt-36">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel className="mb-6">The Concept</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-6 max-w-4xl"
          >
            Not a cruise company.
            <br />
            <span className="text-cyan-DEFAULT">A platform for experiences.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fg-secondary text-lg leading-relaxed max-w-2xl"
          >
            EmbarqX does not own ships. We create what fills them — themed concepts with brand identity, programming depth, audience demand, and commercial structure built in from day one.
          </motion.p>
        </div>
      </section>

      {/* What EmbarqX Is */}
      <section className="section-padding bg-bg-elevated border-y border-border">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionLabel className="mb-5">What EmbarqX Is</SectionLabel>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: "1.05" }} className="text-fg-primary mb-6">
                The creator, packager, and scaler of premium themed cruise concepts.
              </h2>
              <div className="space-y-5 text-fg-muted text-sm leading-relaxed">
                <p>EmbarqX occupies a unique position in the live entertainment and hospitality industries: we are the platform between the audience that wants an iconic experience and the infrastructure that can deliver it at sea.</p>
                <p>We develop the concept. We build the brand identity. We assemble the talent, operator, sponsors, and community. And then we sail — repeatedly, with compounding brand value at every step.</p>
                <p>Think of EmbarqX the way you would think of a premium festival brand — except the venue is a world-class ship, the production quality is unmatched, and the commercial architecture is built to scale beyond a single event.</p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "IP Owner", desc: "We own the concept. The brand. The audience relationship." },
                { label: "Concept Originator", desc: "We identify the cultural moment and build around it." },
                { label: "Partner Assembler", desc: "We bring the right operator, talent, and sponsors together." },
                { label: "Commercial Architect", desc: "Revenue structure, pricing, and monetization is built in." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-sm"
                  style={{ background: "rgba(0,200,224,0.04)", border: "1px solid rgba(0,200,224,0.12)" }}
                >
                  <p className="text-cyan-DEFAULT text-xs font-semibold uppercase tracking-widest mb-2">{item.label}</p>
                  <p className="text-fg-muted text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Themed Cruises */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SectionLabel accent="gold" className="mb-5">Why Themed Cruises</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, letterSpacing: "-0.015em" }} className="text-fg-primary max-w-xl">
              The most powerful live experience format in the world.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Unparalleled Captivity", body: "A cruise guest is present for 3–7 days. No competing venues. No walkaway. Every moment of the experience is yours to program, brand, and monetize. No live entertainment format achieves this.", color: "#00C8E0" },
              { title: "Community Identity", body: "Themed voyages don't just attract attendees — they attract communities. People who identify with the concept bring friends, return every season, and become brand advocates for life.", color: "#C9A84C" },
              { title: "Premium By Design", body: "The price of participation is naturally selective. Themed cruise guests are high-intent, premium-spending, and deeply engaged — the exact demographic every sponsor and partner seeks.", color: "#00C8E0" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-7 rounded-sm" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-8 h-0.5 mb-5" style={{ background: item.color }} />
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", fontWeight: 500, color: "var(--fg-primary)" }} className="mb-3">{item.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="section-padding bg-bg-elevated">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <SectionLabel className="mb-5">The EmbarqX Flywheel</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary">
              A model built to compound.
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {flywheel.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-sm min-w-[160px]"
                  style={{ background: i % 2 === 0 ? "rgba(0,200,224,0.05)" : "rgba(201,168,76,0.05)", border: `1px solid ${i % 2 === 0 ? "rgba(0,200,224,0.15)" : "rgba(201,168,76,0.15)"}` }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: i % 2 === 0 ? "rgba(0,200,224,0.12)" : "rgba(201,168,76,0.12)", color: i % 2 === 0 ? "#00C8E0" : "#C9A84C" }}>
                    {i + 1}
                  </div>
                  <Icon size={20} style={{ color: i % 2 === 0 ? "#00C8E0" : "#C9A84C" }} strokeWidth={1.5} />
                  <p className="text-fg-primary text-sm font-semibold text-center">{step.label}</p>
                  <p className="text-fg-muted text-xs text-center leading-snug">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-fg-muted text-sm mt-10 leading-relaxed max-w-xl mx-auto">
            Each voyage strengthens the next. Brand equity compounds. Audience loyalty deepens. Sponsor demand grows. The platform model means EmbarqX becomes more valuable with every sailing — not just more experienced.
          </p>
        </div>
      </section>

      {/* Stakeholder value */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <SectionLabel accent="gold" className="mb-5">Value Creation</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary max-w-xl">
              How every seat at the table wins.
            </h2>
          </motion.div>
          <div className="space-y-3">
            {stakeholders.map((s, i) => (
              <motion.div key={s.who} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col md:flex-row gap-5 p-6 rounded-sm items-start"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="shrink-0 min-w-[140px]">
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: s.color }}>{s.who}</p>
                </div>
                <div className="w-px self-stretch bg-border hidden md:block" aria-hidden />
                <p className="text-fg-secondary text-sm leading-relaxed">{s.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
