"use client";

import { motion } from "framer-motion";

export function PositioningStrip() {
  return (
    <section
      className="relative py-14 md:py-20 overflow-hidden border-y border-border"
      aria-label="EmbarqX positioning"
    >
      <div className="absolute inset-0 bg-bg-elevated" />
      <div className="absolute inset-0 bg-gradient-cyan-glow opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/10 to-transparent" />

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <p
            className="text-fg-secondary text-xl md:text-2xl lg:text-3xl leading-snug font-light"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Not a one-off event.{" "}
            <span className="text-fg-primary not-italic font-medium">
              A platform for premium themed cruise experiences.
            </span>
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
            style={{ transformOrigin: "center" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-fg-muted text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            EmbarqX originates, packages, and scales themed cruise concepts —
            bringing together talent, operators, sponsors, and communities to
            create experiences that people don&apos;t just attend. They identify with.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
