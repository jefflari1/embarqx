"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero — EmbarqX platform introduction"
    >
      {/* Video / Media Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {/* Premium ocean placeholder — replace with actual video */}
        <div className="absolute inset-0 media-placeholder">
          {/* Placeholder ocean gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#020a1a] via-[#030810] to-[#030508]" />

          {/* Simulated depth layers */}
          <div className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0,80,140,0.3) 0%, transparent 60%),
                radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0,40,80,0.2) 0%, transparent 60%)
              `
            }}
          />

          {/* Subtle wave shimmer */}
          <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
            style={{
              backgroundImage: "linear-gradient(180deg, transparent 0%, rgba(0,200,224,0.05) 70%, rgba(0,200,224,0.02) 100%)"
            }}
          />

          {/* TODO: Replace with <video> element:
              <video
                autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/video/hero-ocean.mp4"
                poster="/assets/images/hero-poster.jpg"
              />
          */}
        </div>

        {/* Hero gradient overlay */}
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/70 via-transparent to-bg-deep/30 z-10" />
      </motion.div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-DEFAULT/5 blur-[100px] pointer-events-none z-10 animate-blob" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gold-DEFAULT/4 blur-[80px] pointer-events-none z-10 animate-blob" style={{ animationDelay: "3s" }} />

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container-premium pb-24 md:pb-32"
      >
        <div className="max-w-5xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-6 h-px bg-cyan-DEFAULT opacity-70" aria-hidden />
            <span className="label-tag text-cyan-DEFAULT tracking-[0.2em]">
              Premium Themed Cruise Platform
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
              lineHeight: "0.92",
              letterSpacing: "-0.02em",
            }}
          >
            Where themed
            <br />
            <em className="not-italic text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #F0F2F8 0%, rgba(240,242,248,0.7) 100%)"
              }}
            >
              worlds come
            </em>
            <br />
            <span className="text-cyan-DEFAULT">to sea.</span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-fg-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-12"
          >
            EmbarqX creates premium themed cruise concepts that unite culture,
            celebrity, community, luxury, and destination into unforgettable
            voyages built for scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/concept" className="btn-primary">
              Explore the Concept
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Partner With EmbarqX
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="label-tag text-fg-subtle text-[0.6rem] tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-fg-subtle" />
        </motion.div>
      </motion.div>
    </section>
  );
}
