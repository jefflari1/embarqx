"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  { title: "Vision over velocity.", body: "We are not moving fast to look impressive. We are moving deliberately to build something extraordinary. Every decision is made with the platform in mind — not just the next event." },
  { title: "Taste as a competitive advantage.", body: "In premium experience design, taste is not decoration. It is the core product differentiator. EmbarqX exists because taste matters and most of the market has abandoned it." },
  { title: "Partnerships that create, not just transact.", body: "Every partner in an EmbarqX voyage should feel that the relationship made them better — not just richer. We structure for mutual value, not extraction." },
  { title: "Culture first, commerce second.", body: "The commercial opportunity in themed cruises is real and significant. But the reason guests come back is because the culture is authentic and the community is genuine. Culture leads. Commerce follows." },
];

export function AboutPageContent() {
  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050a18] via-bg-base to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-cyan-glow opacity-25" />
        <div className="container-premium relative z-10 pb-20 pt-36">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel className="mb-6">About EmbarqX</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-6 max-w-4xl">
            Built at the intersection of
            <br />
            <span className="text-cyan-DEFAULT">culture, commerce, and sea.</span>
          </motion.h1>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding bg-bg-elevated border-y border-border">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel className="mb-8">The Story</SectionLabel>
            <div className="space-y-6 text-fg-secondary text-base leading-relaxed">
              <p>EmbarqX was born from a simple but powerful observation: the world&apos;s most passionate communities do not have a premium, repeatable, iconic way to come together at sea.</p>
              <p>There are generic cruises. There are one-off celebrity charters. There are festival boats that feel like concerts on a ship. But there is no premium platform that takes a specific cultural community — music lovers, gaming enthusiasts, wellness seekers, sports fanatics — and creates a branded, fully immersive, commercially serious voyage built for them and for scale.</p>
              <p>That gap is the EmbarqX opportunity.</p>
              <p>We are building the platform that turns cultural moments into premium voyages — and turns those voyages into repeatable, growing, brand-defining experiences that people look forward to every year.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionLabel accent="gold" className="mb-6">Our Vision</SectionLabel>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 500, letterSpacing: "-0.015em" }} className="text-fg-primary mb-6">
                To become the defining platform for premium themed voyages globally.
              </h2>
              <p className="text-fg-muted text-sm leading-relaxed mb-6">
                A world where every major cultural community — music, sports, wellness, gaming, luxury — has an EmbarqX concept designed specifically for it. Where the best operators, the most iconic talent, and the most engaged brands compete to be part of our platform.
              </p>
              <p className="text-fg-muted text-sm leading-relaxed">
                Where EmbarqX is not just a voyage brand — it is the standard for what a premium themed cruise experience looks, feels, and delivers.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="p-8 rounded-sm" style={{ background: "linear-gradient(135deg, rgba(0,200,224,0.06) 0%, rgba(201,168,76,0.04) 100%)", border: "1px solid rgba(0,200,224,0.15)" }}>
                <p className="text-fg-primary text-xl leading-relaxed mb-6" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.5rem" }}>
                  &ldquo;We design experiences people do not just attend. They identify with.&rdquo;
                </p>
                <div className="divider-subtle mb-6" />
                <p className="text-fg-muted text-sm">
                  This is the core philosophy behind every EmbarqX concept. An experience that is merely enjoyable is not enough. We build experiences that become part of someone&apos;s identity — the story they tell for years, the community they come back to.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-elevated">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SectionLabel className="mb-5">Philosophy</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary max-w-xl">
              The principles we build by.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-7 rounded-sm" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-6 h-0.5 bg-cyan-DEFAULT mb-5" />
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 500, letterSpacing: "-0.01em" }} className="text-fg-primary mb-3">{v.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <SectionLabel accent="gold" className="mb-5">Leadership</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary max-w-xl">
              The team building EmbarqX.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { role: "Founder & CEO", bio: "Leadership bio and background coming soon. EmbarqX is led by experienced professionals with backgrounds in premium entertainment, hospitality, and brand development." },
              { role: "Head of Partnerships", bio: "Partnership leadership bio coming soon. Focused on operator, sponsor, and talent relationship development." },
              { role: "Creative Director", bio: "Creative leadership bio coming soon. Responsible for concept design, visual identity, and experience architecture." },
            ].map((person, i) => (
              <motion.div key={person.role} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-sm" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {/* Photo placeholder */}
                <div className="w-full aspect-square rounded-sm mb-5 media-placeholder flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(0,200,224,0.04) 0%, rgba(255,255,255,0.01) 100%)" }}>
                  <span className="text-fg-subtle text-xs">Photo Coming Soon</span>
                  {/* TODO: Replace with <Image> */}
                </div>
                <p className="text-cyan-DEFAULT label-tag text-[0.6rem] mb-1">{person.role}</p>
                <p className="text-fg-muted text-xs leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-fg-subtle text-xs text-center">Full team profiles and bios will be published as EmbarqX approaches its founding partner announcement.</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 border-t border-border bg-bg-elevated">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }} className="text-fg-primary mb-5">
              Interested in what we&apos;re building?
            </h2>
            <p className="text-fg-muted text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              EmbarqX is actively engaging with investors, operators, sponsors, and strategic collaborators. All conversations are confidential and treated with discretion.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
