"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { concepts } from "@/data/concepts";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ExperiencesPageContent() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030a1a] via-bg-base to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-cyan-glow opacity-30" />
        <div className="container-premium relative z-10 pb-20 pt-36">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel className="mb-6">Signature Experiences</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-6 max-w-4xl"
          >
            Experiences built to
            <br />
            <span className="text-cyan-DEFAULT">define a category.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fg-secondary text-lg leading-relaxed max-w-2xl"
          >
            Each EmbarqX concept is engineered around a specific cultural moment, community, and commercial opportunity. These are not generic cruise themes — they are premium branded worlds at sea.
          </motion.p>
        </div>
      </section>

      {/* Concepts */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <div className="space-y-5">
            {concepts.map((concept, i) => (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <div
                  className="rounded-sm overflow-hidden cursor-pointer transition-all duration-300"
                  style={{
                    background: active === concept.id
                      ? `linear-gradient(135deg, ${concept.accentColor}08 0%, rgba(255,255,255,0.02) 100%)`
                      : "rgba(255,255,255,0.02)",
                    border: active === concept.id
                      ? `1px solid ${concept.accentColor}25`
                      : "1px solid rgba(255,255,255,0.07)",
                  }}
                  onClick={() => setActive(active === concept.id ? null : concept.id)}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between p-7">
                    <div className="flex items-center gap-6">
                      <span
                        className="font-display text-4xl font-light opacity-30"
                        style={{ fontFamily: "var(--font-cormorant)", color: concept.accentColor, lineHeight: 1 }}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2
                          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 500, letterSpacing: "-0.01em" }}
                          className="text-fg-primary"
                        >
                          {concept.title}
                        </h2>
                        <p className="text-fg-muted text-sm mt-0.5 italic" style={{ fontFamily: "var(--font-cormorant)", color: concept.accentColor }}>
                          {concept.tagline}
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: active === concept.id ? `${concept.accentColor}15` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${active === concept.id ? concept.accentColor + "30" : "rgba(255,255,255,0.08)"}`,
                        color: active === concept.id ? concept.accentColor : "var(--fg-muted)",
                        transform: active === concept.id ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </div>
                  </div>

                  {/* Expanded content */}
                  {active === concept.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-border pt-7">
                        {/* Description */}
                        <div className="lg:col-span-2">
                          <p className="label-tag text-[0.6rem] text-fg-muted mb-3">The Experience</p>
                          <p className="text-fg-secondary text-sm leading-relaxed mb-6">{concept.description}</p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <p className="label-tag text-[0.6rem] text-fg-muted mb-3">Target Audience</p>
                              <p className="text-fg-muted text-xs leading-relaxed">{concept.targetAudience}</p>
                            </div>
                            <div>
                              <p className="label-tag text-[0.6rem] text-fg-muted mb-3">Sponsor Potential</p>
                              <p className="text-fg-muted text-xs leading-relaxed">{concept.sponsorPotential}</p>
                            </div>
                          </div>
                        </div>

                        {/* Programming */}
                        <div>
                          <p className="label-tag text-[0.6rem] text-fg-muted mb-3">Sample Programming</p>
                          <ul className="space-y-2 mb-6">
                            {concept.programmingIdeas.map((idea) => (
                              <li key={idea} className="flex items-start gap-2">
                                <Check size={10} style={{ color: concept.accentColor }} className="mt-1 shrink-0" aria-hidden />
                                <span className="text-fg-muted text-xs leading-relaxed">{idea}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="p-3 rounded-sm" style={{ background: `${concept.accentColor}08`, border: `1px solid ${concept.accentColor}20` }}>
                            <p className="label-tag text-[0.55rem] mb-2" style={{ color: concept.accentColor }}>Ideal Vessel Profile</p>
                            <p className="text-fg-muted text-xs leading-relaxed">{concept.idealVessel}</p>
                          </div>
                        </div>

                        {/* Opportunity full */}
                        <div className="lg:col-span-3 pt-4 border-t border-border">
                          <p className="label-tag text-[0.6rem] text-fg-muted mb-2">Opportunity Angle</p>
                          <p className="text-fg-secondary text-sm leading-relaxed mb-5">{concept.opportunityAngle}</p>
                          <Link href="/contact" className="btn-ghost pl-0" style={{ color: concept.accentColor }}>
                            Discuss this concept with us <ArrowRight size={12} className="inline ml-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-12 border-y border-border bg-bg-elevated">
        <div className="container-premium text-center">
          <p className="text-fg-muted text-sm leading-relaxed max-w-2xl mx-auto">
            The concepts shown represent EmbarqX&apos;s current portfolio of themed voyage frameworks. Each concept is available for partnership, co-development, or licensing discussion. Additional concept categories are in development.
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
