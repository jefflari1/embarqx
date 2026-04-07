"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { shipClasses } from "@/data/ships";
import { Check, Users } from "lucide-react";

const venueTypes = [
  { name: "Grand Theater", desc: "700–1,400+ seat venues capable of world-class live productions, award ceremonies, and headline performances.", icon: "🎭" },
  { name: "Open-Air Stage Decks", desc: "Large outdoor performance environments with ocean backdrops — the defining visual of a themed cruise experience.", icon: "🌊" },
  { name: "VIP Lounges & Clubs", desc: "Premium social environments designed for elevated experiences, private access, and exclusive programming.", icon: "🥂" },
  { name: "Casino & Gaming Floors", desc: "Dedicated gaming environments capable of tournament-class setups, private tables, and premium gaming programming.", icon: "♠️" },
  { name: "Multiple Pool Complexes", desc: "Day party environments, poolside performances, wellness activation spaces, and social gathering zones.", icon: "🌅" },
  { name: "Fine Dining Collections", desc: "4–10 distinct dining environments per vessel — from signature restaurants to private chef experiences.", icon: "🍽️" },
  { name: "Broadcast & Media Spaces", desc: "Infrastructure capable of supporting streaming, content creation, media production, and live broadcast.", icon: "📹" },
  { name: "Wellness & Spa Facilities", desc: "Full spa, fitness, and wellness infrastructure for programming-led wellness voyage concepts.", icon: "🧘" },
];

export function ShipsPageContent() {
  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030a14] via-bg-base to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-gold-glow opacity-40" />
        <div className="container-premium relative z-10 pb-20 pt-36">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel accent="gold" className="mb-6">Ships & Venues</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-6 max-w-4xl">
            The scale of what&apos;s
            <br />
            <span className="text-gold-DEFAULT">possible at sea.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fg-secondary text-lg leading-relaxed max-w-2xl">
            Premium themed cruise concepts require premium environments. The following vessel classes illustrate the caliber of infrastructure EmbarqX concepts are designed to activate. All examples are illustrative.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-5 inline-block px-4 py-2 rounded-sm text-xs" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            All vessel references are illustrative. No confirmed operator partnerships are implied.
          </motion.div>
        </div>
      </section>

      {/* Ship classes */}
      <section className="section-padding bg-bg-elevated">
        <div className="container-premium">
          <div className="space-y-8">
            {shipClasses.map((ship, i) => (
              <motion.div key={ship.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-sm overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
                {/* Visual */}
                <div className={`relative lg:col-span-2 min-h-[280px] bg-gradient-to-br ${ship.gradient} media-placeholder flex items-end p-7`}
                  role="img" aria-label={`Illustrative vessel class: ${ship.class}`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,80,140,0.4) 0%, transparent 70%)" }} />
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1.5 rounded-sm mb-3 label-tag text-[0.6rem]"
                      style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.25)" }}>
                      {ship.descriptor}
                    </div>
                    <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-sm">
                      <Users size={11} className="text-fg-muted" />
                      <span className="text-fg-secondary text-xs">{ship.capacity} guests</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 bg-bg-card">
                  <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 500, letterSpacing: "-0.01em" }} className="text-fg-primary mb-1">
                    {ship.class}
                  </h2>
                  <p className="text-gold-DEFAULT text-base italic mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>{ship.headline}</p>
                  <p className="text-fg-muted text-sm leading-relaxed mb-6">{ship.description}</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-5">
                    {ship.features.slice(0, 8).map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check size={10} className="text-cyan-DEFAULT mt-1 shrink-0" aria-hidden />
                        <span className="text-fg-muted text-xs leading-relaxed">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="label-tag text-[0.55rem] text-fg-muted mb-2">Key Programming Venues</p>
                    <div className="flex flex-wrap gap-2">
                      {ship.venues.map((v) => (
                        <span key={v} className="px-2.5 py-1 rounded-sm text-[0.65rem] text-fg-muted"
                          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue types */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SectionLabel className="mb-5">Programming Environments</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary max-w-xl">
              Every space is a programming opportunity.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {venueTypes.map((v, i) => (
              <motion.div key={v.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-5 rounded-sm" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-xs font-semibold text-fg-primary uppercase tracking-[0.08em] mb-2">{v.name}</p>
                <p className="text-fg-muted text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-fg-subtle text-xs">
            All imagery and descriptions are illustrative only. Actual vessel configuration varies by operator and charter agreement.
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
