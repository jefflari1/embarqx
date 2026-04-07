"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Call to action — partner with EmbarqX"
    >
      <div className="absolute inset-0 bg-bg-elevated" />
      <div className="absolute inset-0 bg-gradient-cyan-glow opacity-40" />
      <div className="absolute inset-0 bg-gradient-gold-glow opacity-30" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,200,224,0.05) 0%, transparent 70%)" }} aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/25 to-transparent" />

      <div className="container-premium relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="label-tag text-cyan tracking-[0.18em]">The Opportunity</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="heading-section mb-6 mx-auto"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.8rem, 6vw, 5rem)", maxWidth: "800px" }}
        >
          Let&apos;s build the next
          <br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #00C8E0 0%, #C9A84C 100%)" }}>
            iconic voyage.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-fg-secondary text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Whether you are an investor, operator, brand, or talent partner —
          EmbarqX is where serious conversations begin. The platform is being
          built now. The right partners will help shape it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact" className="btn-primary">
            Start a Conversation
            <ArrowRight size={15} />
          </Link>
          <Link href="/investors" className="btn-secondary">
            Investor Information
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-fg-subtle text-xs"
        >
          EmbarqX is actively building its founding partner network. Conversations are confidential.
        </motion.p>
      </div>
    </section>
  );
}
