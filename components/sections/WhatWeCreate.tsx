"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Layers, Users, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Signature Experiences",
    tagline: "Concepts built to be iconic.",
    description:
      "We design themed voyages around powerful cultural moments — music, gaming, wellness, sports, and beyond. Each concept is built with a distinct identity, programming architecture, and audience in mind.",
    accentColor: "#00C8E0",
    accentGlow: "rgba(0,200,224,0.08)",
    accentBorder: "rgba(0,200,224,0.2)",
    delay: 0,
  },
  {
    icon: Users,
    title: "Strategic Partnerships",
    tagline: "The right people in the right rooms.",
    description:
      "EmbarqX connects cruise operators, celebrity talent, sponsors, and investor capital into a structured, commercially intelligent model. Every partnership is designed to create mutual value at scale.",
    accentColor: "#C9A84C",
    accentGlow: "rgba(201,168,76,0.08)",
    accentBorder: "rgba(201,168,76,0.2)",
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: "Scalable Cruise IP",
    tagline: "Built to repeat. Designed to grow.",
    description:
      "Each concept is engineered as repeatable intellectual property — a branded platform that can scale across multiple sailing seasons, operators, destinations, and audience segments globally.",
    accentColor: "#00C8E0",
    accentGlow: "rgba(0,200,224,0.08)",
    accentBorder: "rgba(0,200,224,0.2)",
    delay: 0.2,
  },
];

export function WhatWeCreate() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="What EmbarqX creates">
      <div className="absolute inset-0 bg-gradient-ocean" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <SectionLabel className="mb-5">What We Create</SectionLabel>
          <h2
            className="heading-section max-w-lg"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            }}
          >
            Three dimensions of premium value.
          </h2>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7, delay: pillar.delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${pillar.accentGlow} 0%, rgba(255,255,255,0.015) 100%)`,
                  border: `1px solid ${i === 1 ? pillar.accentBorder : "rgba(255,255,255,0.07)"}`,
                  boxShadow: "0 1px 1px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${pillar.accentColor}40, transparent)` }}
                />
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-sm mb-8"
                  style={{ background: `${pillar.accentGlow}`, border: `1px solid ${pillar.accentBorder}` }}
                >
                  <Icon size={20} style={{ color: pillar.accentColor }} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-fg-primary text-xl md:text-2xl font-medium mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "-0.01em" }}
                >
                  {pillar.title}
                </h3>
                <p className="mb-4 text-sm font-medium tracking-[0.06em] uppercase" style={{ color: pillar.accentColor }}>
                  {pillar.tagline}
                </p>
                <p className="text-fg-muted text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
