"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { concepts } from "@/data/concepts";
import Link from "next/link";

export function ConceptsCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + concepts.length) % concepts.length);
  const next = () => setActive((i) => (i + 1) % concepts.length);

  const concept = concepts[active];

  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-label="Signature concepts"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-elevated" />
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${concept.accentColor}08 0%, transparent 70%)`,
        }}
      />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <SectionLabel className="mb-5">Signature Concepts</SectionLabel>
            <h2
              className="heading-section"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              }}
            >
              Experiences built to
              <br />
              <em className="not-italic" style={{ color: concept.accentColor }}>
                define a category.
              </em>
            </h2>
          </div>

          {/* Nav controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="flex items-center justify-center w-10 h-10 border border-border hover:border-border-strong transition-all duration-200 rounded-sm text-fg-secondary hover:text-fg-primary group"
              aria-label="Previous concept"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-fg-muted text-xs font-medium tabular-nums w-12 text-center">
              {active + 1} / {concepts.length}
            </span>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 border border-border hover:border-border-strong transition-all duration-200 rounded-sm text-fg-secondary hover:text-fg-primary"
              aria-label="Next concept"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex gap-1 flex-wrap mb-10"
          role="tablist"
          aria-label="Concept tabs"
        >
          {concepts.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className="px-4 py-2 text-xs font-medium tracking-[0.08em] uppercase transition-all duration-200 rounded-sm"
              style={
                active === i
                  ? {
                      background: `${c.accentColor}15`,
                      color: c.accentColor,
                      border: `1px solid ${c.accentColor}30`,
                    }
                  : {
                      background: "transparent",
                      color: "var(--fg-muted)",
                      border: "1px solid transparent",
                    }
              }
            >
              {c.title.split(" ")[0]}{" "}
              {c.title.split(" ")[1] === "&" ? `& ${c.title.split(" ")[2]}` : ""}
            </button>
          ))}
        </motion.div>

        {/* Main concept card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={concept.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          >
            {/* Visual panel */}
            <div
              className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] rounded-sm overflow-hidden media-placeholder"
              style={{
                background: `linear-gradient(135deg, ${concept.gradientFrom} 0%, ${concept.gradientTo} 100%)`,
              }}
              role="img"
              aria-label={`Visual representation of ${concept.title}`}
            >
              {/* Overlay glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${concept.accentColor}12 0%, transparent 60%)`,
                }}
              />

              {/* Concept number */}
              <div className="absolute top-6 left-6">
                <span
                  className="font-display text-8xl font-light opacity-10"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: concept.accentColor,
                    lineHeight: 1,
                  }}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TODO: Replace with concept image:
                  <Image src={concept.imageSrc} fill alt={concept.title} className="object-cover" />
              */}

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass p-4 rounded-sm">
                  <p className="label-tag text-xs mb-1" style={{ color: concept.accentColor }}>
                    Target Audience
                  </p>
                  <p className="text-fg-secondary text-sm leading-relaxed">
                    {concept.targetAudience}
                  </p>
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div
              className="relative p-8 md:p-10 rounded-sm flex flex-col"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                border: `1px solid ${concept.accentColor}18`,
                boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Accent line */}
              <div
                className="w-10 h-0.5 mb-8"
                style={{ background: concept.accentColor }}
              />

              <h3
                className="text-fg-primary mb-3 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.01em",
                  fontWeight: 500,
                }}
              >
                {concept.title}
              </h3>

              <p
                className="mb-5 text-sm font-medium italic"
                style={{
                  color: concept.accentColor,
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.1rem",
                }}
              >
                {concept.tagline}
              </p>

              <p className="text-fg-muted text-sm leading-relaxed mb-8 flex-grow">
                {concept.description}
              </p>

              {/* Opportunity angle */}
              <div
                className="p-4 rounded-sm mb-8"
                style={{
                  background: `${concept.accentColor}08`,
                  border: `1px solid ${concept.accentColor}20`,
                }}
              >
                <p className="label-tag text-[0.6rem] mb-2" style={{ color: concept.accentColor }}>
                  Opportunity Angle
                </p>
                <p className="text-fg-secondary text-xs leading-relaxed">
                  {concept.opportunityAngle}
                </p>
              </div>

              {/* Programming preview */}
              <div className="space-y-2 mb-8">
                <p className="label-tag text-[0.6rem] text-fg-muted mb-3">Sample Programming</p>
                {concept.programmingIdeas.slice(0, 3).map((idea) => (
                  <div key={idea} className="flex items-start gap-2.5">
                    <span
                      className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                      style={{ background: concept.accentColor }}
                      aria-hidden
                    />
                    <span className="text-fg-muted text-xs leading-relaxed">{idea}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 text-sm font-medium group"
                style={{ color: concept.accentColor }}
              >
                Explore Full Concept
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-10" role="tablist" aria-label="Concept indicator">
          {concepts.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to concept ${i + 1}: ${c.title}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? "24px" : "6px",
                height: "6px",
                background: active === i ? concept.accentColor : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
