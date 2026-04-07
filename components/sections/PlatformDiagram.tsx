"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Users, Mic2, Anchor, Tag, MapPin, Sparkles } from "lucide-react";

const nodes = [
  { icon: Users, label: "Audience", description: "Passionate communities ready to sail", color: "#00C8E0" },
  { icon: Mic2, label: "Talent", description: "Celebrity and cultural anchors", color: "#C9A84C" },
  { icon: Anchor, label: "Operator", description: "World-class cruise infrastructure", color: "#00C8E0" },
  { icon: Tag, label: "Sponsor", description: "Brands seeking immersive access", color: "#C9A84C" },
  { icon: MapPin, label: "Destination", description: "Aspirational global routes", color: "#00C8E0" },
  { icon: Sparkles, label: "Programming", description: "Curated experiences that define the voyage", color: "#C9A84C" },
];

const steps = [
  { step: "01", title: "Concept Development", body: "EmbarqX identifies a cultural moment and community. We architect the experience concept, programming framework, and commercial structure." },
  { step: "02", title: "Partner Assembly", body: "We bring together the right operator, talent partner, sponsors, and destination. Every relationship is structured for mutual value." },
  { step: "03", title: "Pre-Sale & Community", body: "Targeted pre-sale activations build the audience. Community programming creates momentum and identity before day one." },
  { step: "04", title: "The Voyage", body: "An immersive, premium, fully programmed experience. Guests live the brand. Partners realize their value. The concept earns its reputation." },
  { step: "05", title: "Repeat & Scale", body: "Each voyage strengthens the IP. Season two launches with a warmed audience, stronger sponsor appetite, and growing brand equity." },
];

export function PlatformDiagram() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="How the EmbarqX platform works">
      <div className="absolute inset-0 bg-bg-elevated" />
      <div className="absolute inset-0 bg-gradient-cyan-glow opacity-30" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <SectionLabel className="mb-5">Platform Architecture</SectionLabel>
          <h2
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 500 }}
            className="text-fg-primary mb-5"
          >
            How the platform works.
          </h2>
          <p className="text-fg-muted text-base leading-relaxed max-w-xl mx-auto">
            EmbarqX combines six essential ingredients into a single premium voyage platform.
          </p>
        </motion.div>

        {/* Platform equation */}
        <div className="mb-20">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              const isLast = i === nodes.length - 1;
              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 md:gap-4"
                >
                  <div
                    className="flex flex-col items-center gap-2 p-5 rounded-sm min-w-[120px] group transition-all duration-300 hover:-translate-y-1"
                    style={{ background: `${node.color}08`, border: `1px solid ${node.color}20`, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
                  >
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: `${node.color}12`, border: `1px solid ${node.color}25` }}>
                      <Icon size={16} style={{ color: node.color }} strokeWidth={1.5} />
                    </div>
                    <span className="text-fg-primary text-xs font-semibold tracking-[0.08em] uppercase">{node.label}</span>
                    <span className="text-fg-muted text-[0.6rem] text-center leading-tight hidden md:block">{node.description}</span>
                  </div>
                  {!isLast && <span className="text-fg-subtle text-xl font-light" aria-hidden>+</span>}
                </motion.div>
              );
            })}

            {/* Equals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 pl-2"
            >
              <span className="text-fg-subtle text-2xl font-light" aria-hidden>=</span>
              <div
                className="flex flex-col items-center gap-2 p-5 rounded-sm min-w-[140px]"
                style={{ background: "linear-gradient(135deg, rgba(0,200,224,0.08) 0%, rgba(201,168,76,0.06) 100%)", border: "1px solid rgba(0,200,224,0.25)", boxShadow: "0 0 30px rgba(0,200,224,0.08)" }}
              >
                <span className="font-display text-xl font-medium text-cyan" style={{ fontFamily: "var(--font-cormorant)" }}>EmbarqX</span>
                <span className="text-fg-secondary text-[0.65rem] text-center uppercase tracking-widest">Premium Themed Voyage</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process steps */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center label-tag text-fg-muted mb-12"
        >
          From concept to voyage
        </motion.h3>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,224,0.2), rgba(201,168,76,0.2), rgba(0,200,224,0.2), transparent)" }}
            aria-hidden
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 rounded-sm"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center mb-5 text-[0.6rem] font-bold"
                  style={{ background: "rgba(0,200,224,0.12)", color: "#00C8E0", border: "1px solid rgba(0,200,224,0.25)" }}>
                  {s.step}
                </div>
                <h4 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, letterSpacing: "-0.01em" }} className="text-fg-primary text-base mb-3">{s.title}</h4>
                <p className="text-fg-muted text-xs leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
