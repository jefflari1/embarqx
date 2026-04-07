"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight, TrendingUp, Anchor, Tag, Mic2, Handshake } from "lucide-react";

const partners = [
  {
    icon: TrendingUp,
    type: "Investors",
    tagline: "A platform built for capital efficiency and returns.",
    description: "EmbarqX offers exposure to the growing premium experience economy through a capital-light, scalable platform model. Invest in IP, not inventory.",
    value: ["Platform-level returns vs. single-event exposure", "Repeatable model with compounding brand equity", "Multiple monetization streams per voyage", "Managed execution risk through operator partnerships"],
    cta: "Explore Investment Opportunity",
    href: "/investors",
    accent: "#C9A84C",
    glow: "rgba(201,168,76,0.06)",
    border: "rgba(201,168,76,0.2)",
  },
  {
    icon: Anchor,
    type: "Cruise Operators",
    tagline: "Premium programming that fills ships and drives spend.",
    description: "EmbarqX brings fully structured, audience-ready themed concepts to operators seeking differentiated programming without building it in-house.",
    value: ["Pre-sold audience demand before sailing", "Higher per-cabin revenue from themed programming", "Sponsor activation revenue overlay", "Multi-season programming relationships"],
    cta: "Explore Operator Partnership",
    href: "/partners",
    accent: "#00C8E0",
    glow: "rgba(0,200,224,0.06)",
    border: "rgba(0,200,224,0.2)",
  },
  {
    icon: Tag,
    type: "Sponsors & Brands",
    tagline: "Immersive brand access inside a premium world.",
    description: "A branded EmbarqX voyage delivers the most immersive sponsorship environment in live entertainment — a captive, premium audience for multiple days at sea.",
    value: ["Captive premium audience for 3–7 days", "Category exclusivity within the voyage", "Fully integrated brand experience design", "Content creation and media asset opportunities"],
    cta: "Explore Brand Partnership",
    href: "/partners",
    accent: "#C9A84C",
    glow: "rgba(201,168,76,0.06)",
    border: "rgba(201,168,76,0.2)",
  },
  {
    icon: Mic2,
    type: "Celebrity & Talent",
    tagline: "The world's most powerful stage — and it moves.",
    description: "An EmbarqX concept built around your identity creates direct access to your most loyal fans in the most immersive setting imaginable. At sea, for days.",
    value: ["Unparalleled fan engagement and intimacy", "Premium revenue above standard touring", "Full creative co-authorship of the experience", "Brand-building asset at the intersection of culture and luxury"],
    cta: "Explore Talent Partnership",
    href: "/partners",
    accent: "#00C8E0",
    glow: "rgba(0,200,224,0.06)",
    border: "rgba(0,200,224,0.2)",
  },
  {
    icon: Handshake,
    type: "Strategic Collaborators",
    tagline: "Let's build something that's never existed before.",
    description: "If you see an opportunity in the EmbarqX model — from concept co-development to market expansion to capability partnership — we want to talk.",
    value: ["Co-development of new concept categories", "Geographic market expansion", "Technology and platform capabilities", "Community and media partnerships"],
    cta: "Start a Conversation",
    href: "/contact",
    accent: "#C9A84C",
    glow: "rgba(201,168,76,0.06)",
    border: "rgba(201,168,76,0.2)",
  },
];

export function PartnerTypes() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Partner types">
      <div className="absolute inset-0 bg-bg-deep" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-18"
        >
          <SectionLabel className="mb-5">Partnership Opportunities</SectionLabel>
          <h2
            className="heading-section max-w-xl"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Every seat at this table
            <br />
            <span className="text-cyan">is designed to win.</span>
          </h2>
        </motion.div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.type}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-7 rounded-sm transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{ background: `linear-gradient(135deg, ${p.glow} 0%, rgba(255,255,255,0.01) 100%)`, border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}
              >
                <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: `1px solid ${p.border}` }} />

                <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm mb-6 shrink-0" style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}25` }}>
                  <Icon size={18} style={{ color: p.accent }} strokeWidth={1.5} />
                </div>

                <div className="mb-1">
                  <span className="label-tag text-[0.6rem]" style={{ color: p.accent }}>{p.type}</span>
                </div>

                <h3 className="text-fg-primary text-lg mb-3 leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, letterSpacing: "-0.01em", fontSize: "1.25rem" }}>
                  {p.tagline}
                </h3>

                <p className="text-fg-muted text-sm leading-relaxed mb-6 flex-grow">{p.description}</p>

                <ul className="space-y-2 mb-7">
                  {p.value.map((v) => (
                    <li key={v} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: p.accent }} aria-hidden />
                      <span className="text-fg-muted text-xs leading-relaxed">{v}</span>
                    </li>
                  ))}
                </ul>

                <Link href={p.href} className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] group/link transition-all duration-200" style={{ color: p.accent }}>
                  {p.cta}
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
