"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "$12B+", label: "Global themed experience market", description: "A fast-growing intersection of live entertainment, luxury travel, and community culture." },
  { value: "78%", label: "Repeat voyage intention rate", description: "Themed cruise guests return at dramatically higher rates than standard cruise passengers." },
  { value: "3–4×", label: "Revenue premium vs. standard charter", description: "Premium branded programming commands significantly higher per-head value across all revenue streams." },
  { value: "365", label: "Days of scalable programming potential", description: "A platform model means the EmbarqX concept calendar can run year-round across multiple vessels." },
];

const reasons = [
  { number: "01", heading: "Intersection of four industries.", body: "EmbarqX sits where entertainment, hospitality, community culture, and commerce converge — creating value that no single industry can capture alone." },
  { number: "02", heading: "IP over event.", body: "We build branded concepts — repeatable intellectual property that compounds in value, audience loyalty, and sponsor appeal with every sailing." },
  { number: "03", heading: "Operator-ready from day one.", body: "EmbarqX is designed to work within established cruise infrastructure. No vessels to own. Pure value creation through programming, partnerships, and platform." },
  { number: "04", heading: "The audience is already there.", body: "Every concept targets a defined community with established demand. We don't create audiences — we serve ones that have been waiting for this experience." },
];

export function WhyEmbarqX() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Why EmbarqX">
      <div className="absolute inset-0 bg-bg-deep" />
      <div className="absolute inset-0 bg-gradient-gold-glow opacity-50" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <SectionLabel accent="gold" className="mb-5">Why EmbarqX</SectionLabel>
          <h2
            className="heading-section mb-6"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            The intersection of entertainment,
            <br />
            <span className="text-gold">hospitality, and community.</span>
          </h2>
          <p className="text-fg-muted text-base leading-relaxed">
            We design experiences people do not just attend. They identify with.
            EmbarqX is positioned at the exact point where premium culture meets premium travel — a space no other platform fully occupies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — reasons */}
          <div className="space-y-10">
            {reasons.map((r, i) => (
              <motion.div
                key={r.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 group"
              >
                <div className="shrink-0 pt-1">
                  <span
                    className="font-display text-4xl font-light opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ fontFamily: "var(--font-cormorant)", color: "#C9A84C", lineHeight: 1 }}
                  >
                    {r.number}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-fg-primary text-lg mb-2"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, letterSpacing: "-0.01em" }}
                  >
                    {r.heading}
                  </h3>
                  <p className="text-fg-muted text-sm leading-relaxed">{r.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-sm relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(255,255,255,0.015) 100%)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="font-display text-3xl md:text-4xl font-medium mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#C9A84C", lineHeight: 1.1 }}
                >
                  {s.value}
                </div>
                <p className="text-fg-secondary text-xs font-semibold uppercase tracking-[0.08em] mb-3">{s.label}</p>
                <p className="text-fg-muted text-xs leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
