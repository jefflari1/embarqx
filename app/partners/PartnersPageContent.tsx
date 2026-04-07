"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Link from "next/link";
import { ArrowRight, Anchor, Tag, Mic2, Handshake, Check } from "lucide-react";

const partnerSections = [
  {
    icon: Anchor,
    type: "Cruise Operators & Charter Partners",
    anchor: "operators",
    tagline: "Premium programming that performs.",
    intro: "EmbarqX brings operators what they cannot build alone: a branded, audience-ready, commercially structured themed voyage. We handle the concept, the community, and the commercial architecture. You bring the ship and the operational excellence.",
    whatWeOffer: [
      "Fully structured themed concept with programming design",
      "Pre-built audience demand before departure",
      "Sponsor activation framework and revenue overlay",
      "Marketing and community activation strategy",
      "Multi-season programming relationship",
      "Creative and operational collaboration support",
    ],
    whatWeLookFor: [
      "Premium vessel suitable for the target concept",
      "Commitment to collaborative programming",
      "Appetite for audience-focused differentiation",
      "Multi-season vision",
    ],
    accent: "#00C8E0",
    bg: "rgba(0,200,224,0.04)",
    border: "rgba(0,200,224,0.15)",
  },
  {
    icon: Tag,
    type: "Sponsors & Brand Partners",
    anchor: "sponsors",
    tagline: "Days of immersive access. Not minutes.",
    intro: "A voyage is not a 30-second ad spot. It is 3–7 days of captive access to a premium, self-selected audience that chose to spend thousands of dollars to be there. Every EmbarqX voyage creates a world — brands that live inside it are part of the experience, not an interruption of it.",
    whatWeOffer: [
      "Category exclusivity within the voyage concept",
      "Integrated brand experience design — not logo placement",
      "3–7 day captive access to premium audience",
      "Content creation and media asset opportunities",
      "Custom activation environments onboard",
      "Pre-voyage and post-voyage community access",
    ],
    whatWeLookFor: [
      "Brand alignment with the voyage concept and audience",
      "Appetite for immersive activation vs. standard media",
      "Multi-voyage relationship potential",
      "Premium brand positioning",
    ],
    accent: "#C9A84C",
    bg: "rgba(201,168,76,0.04)",
    border: "rgba(201,168,76,0.15)",
  },
  {
    icon: Mic2,
    type: "Celebrity & Talent Partners",
    anchor: "talent",
    tagline: "The world's most powerful stage — and it moves.",
    intro: "An EmbarqX voyage built around your identity is unlike anything in live entertainment. Your most passionate fans are there, for days, in the most immersive setting imaginable. You co-author the experience. You share in its commercial success. And you own a cultural moment that no touring format can replicate.",
    whatWeOffer: [
      "Full creative co-authorship of the concept and programming",
      "Premium revenue structure above standard touring models",
      "Unprecedented fan intimacy and community access",
      "IP co-ownership opportunities",
      "Multi-year voyage series potential",
      "Brand-building asset at the intersection of culture and luxury",
    ],
    whatWeLookFor: [
      "Established audience with premium travel appetite",
      "Genuine creative partnership intent",
      "Brand alignment with the luxury experience market",
      "Representation open to innovative format discussions",
    ],
    accent: "#00C8E0",
    bg: "rgba(0,200,224,0.04)",
    border: "rgba(0,200,224,0.15)",
  },
  {
    icon: Handshake,
    type: "Strategic Collaborators",
    anchor: "collaborators",
    tagline: "Let's build something that's never existed before.",
    intro: "The EmbarqX model has natural intersection points with many industries — technology, media, community platforms, destination marketing, hospitality, and more. If you see a strategic alignment, we want to explore it.",
    whatWeOffer: [
      "Open and structured collaboration framework",
      "Co-development opportunities for new concept categories",
      "Geographic market expansion partnerships",
      "Technology, media, and platform integration",
      "Commercial upside sharing on collaborative initiatives",
    ],
    whatWeLookFor: [
      "Clear strategic or capability alignment with the EmbarqX model",
      "Serious intent and organizational credibility",
      "Appetite for innovative, first-of-kind partnership structures",
    ],
    accent: "#C9A84C",
    bg: "rgba(201,168,76,0.04)",
    border: "rgba(201,168,76,0.15)",
  },
];

export function PartnersPageContent() {
  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020a14] via-bg-base to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-cyan-glow opacity-30" />
        <div className="container-premium relative z-10 pb-20 pt-36">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel className="mb-6">Partnerships</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-6 max-w-4xl">
            Every seat at this table
            <br />
            <span className="text-cyan-DEFAULT">is designed to win.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fg-secondary text-lg leading-relaxed max-w-2xl">
            EmbarqX is a platform that creates value for every stakeholder. Operators get premium programming. Sponsors get immersive access. Talent gets a world unlike any stage. Every partnership is structured for mutual upside.
          </motion.p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-8 border-b border-border bg-bg-elevated">
        <div className="container-premium">
          <div className="flex flex-wrap gap-3">
            {partnerSections.map((p) => (
              <a key={p.anchor} href={`#${p.anchor}`}
                className="px-4 py-2 rounded-sm text-xs font-medium uppercase tracking-widest transition-all duration-200 text-fg-muted hover:text-fg-secondary"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {p.type.split(" ")[0]} {p.type.split(" ")[1] === "&" ? `& ${p.type.split(" ")[2]}` : ""}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partner sections */}
      {partnerSections.map((p, i) => {
        const Icon = p.icon;
        return (
          <section key={p.anchor} id={p.anchor} className="section-padding" style={{ background: i % 2 === 0 ? "var(--bg-deep)" : "var(--bg-elevated)" }}>
            <div className="container-premium">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: p.bg, border: `1px solid ${p.border}` }}>
                      <Icon size={18} style={{ color: p.accent }} strokeWidth={1.5} />
                    </div>
                    <SectionLabel accent={i % 2 === 0 ? "cyan" : "gold"}>{p.type.split(" ").slice(0, 2).join(" ")}</SectionLabel>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 500, letterSpacing: "-0.015em" }} className="text-fg-primary mb-4">
                    {p.tagline}
                  </h2>
                  <p className="text-fg-muted text-sm leading-relaxed mb-8">{p.intro}</p>
                  <Link href={`/contact?type=${p.anchor === "operators" ? "operator" : p.anchor === "sponsors" ? "sponsor" : p.anchor === "talent" ? "talent" : "collaborator"}`}
                    className="btn-primary" style={{ background: p.accent, color: "#030508" }}>
                    Start the Conversation
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-5">
                  <div className="p-6 rounded-sm" style={{ background: p.bg, border: `1px solid ${p.border}` }}>
                    <p className="label-tag text-[0.6rem] mb-4" style={{ color: p.accent }}>What EmbarqX Offers</p>
                    <ul className="space-y-2.5">
                      {p.whatWeOffer.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check size={11} style={{ color: p.accent }} className="mt-0.5 shrink-0" aria-hidden />
                          <span className="text-fg-secondary text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 rounded-sm" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="label-tag text-[0.6rem] text-fg-muted mb-4">Ideal Partner Profile</p>
                    <ul className="space-y-2.5">
                      {p.whatWeLookFor.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="w-1 h-1 rounded-full mt-2 bg-fg-subtle shrink-0" aria-hidden />
                          <span className="text-fg-muted text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <FinalCTA />
    </div>
  );
}
