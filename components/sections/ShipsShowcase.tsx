"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { shipClasses } from "@/data/ships";
import { Users, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ShipsShowcase() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Illustrative vessel possibilities">
      <div className="absolute inset-0 bg-bg-elevated" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <SectionLabel accent="gold" className="mb-5">Illustrative Vessel Possibilities</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2
              className="heading-section max-w-xl"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              The scale of what&apos;s
              <br />
              <span className="text-gold">possible at sea.</span>
            </h2>
            <p className="text-fg-muted text-sm leading-relaxed max-w-sm text-right hidden md:block">
              These represent the caliber of vessel environments that can support premium themed cruise programming. All examples are illustrative only.
            </p>
          </div>
        </motion.div>

        {/* Ships grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          {shipClasses.map((ship, i) => (
            <motion.div
              key={ship.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}
            >
              {/* Visual */}
              <div
                className={`relative h-52 bg-gradient-to-br ${ship.gradient} overflow-hidden media-placeholder`}
                role="img"
                aria-label={`Illustrative image of ${ship.class}`}
              >
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,80,140,0.3) 0%, transparent 70%)" }} />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="label-tag text-[0.6rem] px-3 py-1.5" style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.25)" }}>
                    {ship.descriptor}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5 flex items-center gap-1.5 glass px-3 py-1.5 rounded-sm">
                  <Users size={11} className="text-fg-muted" />
                  <span className="text-fg-secondary text-[0.6rem] font-medium">{ship.capacity} guests</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-fg-primary text-lg mb-1 leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, letterSpacing: "-0.01em" }}>
                  {ship.class}
                </h3>
                <p className="text-gold text-xs font-medium italic mb-4" style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.95rem" }}>
                  {ship.headline}
                </p>
                <p className="text-fg-muted text-xs leading-relaxed mb-5">{ship.description}</p>
                <div className="space-y-1.5 mb-5">
                  <p className="label-tag text-[0.55rem] text-fg-subtle mb-2">Key Venues & Spaces</p>
                  {ship.venues.slice(0, 4).map((v) => (
                    <div key={v} className="flex items-center gap-2">
                      <Check size={10} className="text-cyan shrink-0" aria-hidden />
                      <span className="text-fg-muted text-xs">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-fg-subtle text-[0.6rem] leading-relaxed italic border-t border-border pt-4">{ship.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/ships" className="btn-ghost">
            Explore Ships & Venues
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
