"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const platformStats = [
  { label: "Platform Model", sub: "Not an event company" },
  { label: "IP-Driven", sub: "Scalable branded concepts" },
  { label: "Capital-Light", sub: "No vessel ownership" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], ["0%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero — EmbarqX platform introduction"
    >
      {/* ── BACKGROUND SYSTEM ─────────────────────────────────── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* 1. Base — deep oceanic */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(155deg, #020813 0%, #030B1A 25%, #030A14 55%, #030508 100%)",
          }}
        />

        {/* 2. Ocean depth pools */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 65% at 5% 95%, rgba(0,55,130,0.28) 0%, transparent 55%),
              radial-gradient(ellipse 60% 45% at 85% 15%, rgba(0,30,80,0.14) 0%, transparent 50%),
              radial-gradient(ellipse 55% 40% at 55% 55%, rgba(0,70,150,0.08) 0%, transparent 48%)
            `,
          }}
        />

        {/* 3. Horizon glow line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "40%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,200,224,0.1) 15%, rgba(0,200,224,0.28) 50%, rgba(0,200,224,0.1) 85%, transparent 100%)",
          }}
        />

        {/* 4. Horizon glow spread */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "37%",
            height: "140px",
            background:
              "radial-gradient(ellipse 75% 100% at 50% 0%, rgba(0,200,224,0.045) 0%, transparent 100%)",
          }}
        />

        {/* 5. Top cyan crown */}
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: "55%",
            background:
              "radial-gradient(ellipse 65% 55% at 62% 0%, rgba(0,200,224,0.055) 0%, transparent 68%)",
          }}
        />

        {/* 6. Right warmth — gold tint */}
        <div
          className="absolute inset-y-0 right-0"
          style={{
            width: "55%",
            background:
              "radial-gradient(ellipse 85% 55% at 100% 45%, rgba(201,168,76,0.035) 0%, transparent 58%)",
          }}
        />

        {/* 7. Premium scan-line texture */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.022,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,1) 3px, rgba(255,255,255,1) 4px)",
          }}
        />

        {/* 8. Readability overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,5,8,0.05) 0%, rgba(3,5,8,0.15) 45%, rgba(3,5,8,0.88) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(3,5,8,0.65) 0%, rgba(3,5,8,0.28) 55%, rgba(3,5,8,0.08) 100%)",
          }}
        />
      </motion.div>

      {/* Ambient blobs */}
      <div
        className="absolute pointer-events-none z-[1] animate-blob"
        style={{
          top: "20%",
          left: "30%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,224,0.055) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute pointer-events-none z-[1] animate-blob"
        style={{
          bottom: "20%",
          right: "20%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
          animationDelay: "3.5s",
        }}
      />

      {/* ── HERO CONTENT ──────────────────────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="container-premium w-full" style={{ paddingTop: "clamp(6rem, 12vw, 9rem)", paddingBottom: "clamp(5rem, 10vw, 8rem)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-20 items-center">

            {/* ── LEFT: Content ─────────────────────────────── */}
            <div className="lg:col-span-3 flex flex-col">

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-10"
              >
                <span
                  className="w-8 h-px shrink-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,200,224,0.9), rgba(0,200,224,0.15))",
                  }}
                  aria-hidden
                />
                <span className="label-tag text-cyan tracking-[0.22em]">
                  Premium Themed Cruise Platform
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 52, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.25, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="heading-display mb-8"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(3.8rem, 8.5vw, 7.5rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                }}
              >
                Where themed
                <br />
                <em
                  className="not-italic"
                  style={{ color: "rgba(240,242,248,0.65)" }}
                >
                  worlds come
                </em>
                <br />
                <span
                  className="text-cyan"
                  style={{
                    textShadow:
                      "0 0 40px rgba(0,200,224,0.35), 0 0 100px rgba(0,200,224,0.12)",
                  }}
                >
                  to sea.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
                className="text-fg-secondary leading-relaxed mb-10"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                  maxWidth: "500px",
                }}
              >
                EmbarqX creates premium themed cruise concepts that unite
                culture, celebrity, community, and luxury into iconic voyages —
                built to scale, repeat, and define a category.
              </motion.p>

              {/* Platform credibility strip */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-stretch mb-10"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                }}
              >
                {platformStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex-1"
                    style={{
                      paddingLeft: i === 0 ? 0 : "clamp(12px, 2vw, 24px)",
                      paddingRight: i === platformStats.length - 1 ? 0 : "clamp(12px, 2vw, 24px)",
                      borderLeft:
                        i === 0 ? "none" : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <p
                      className="text-fg-primary mb-0.5"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1rem",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="text-fg-subtle"
                      style={{ fontSize: "0.625rem", letterSpacing: "0.07em" }}
                    >
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/concept" className="btn-primary">
                  Explore the Concept
                  <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Partner With EmbarqX
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT: Atmospheric Visual Panel ───────────── */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 hidden lg:flex items-center justify-center lg:justify-end"
              aria-hidden="true"
            >
              <div
                className="relative w-full"
                style={{ maxWidth: "360px", aspectRatio: "3/4" }}
              >
                {/* Outer atmospheric glow */}
                <div
                  className="absolute rounded-sm"
                  style={{
                    inset: "-24px",
                    background:
                      "radial-gradient(ellipse 75% 75% at 50% 50%, rgba(0,200,224,0.07) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />

                {/* Main panel */}
                <div
                  className="relative w-full h-full rounded-sm overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(160deg, #04101F 0%, #030C18 40%, #020810 70%, #020608 100%)",
                    border: "1px solid rgba(0,200,224,0.1)",
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.025), inset 0 1px 0 rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Ocean depth */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                        radial-gradient(ellipse 110% 65% at 50% 100%, rgba(0,55,130,0.32) 0%, transparent 58%),
                        radial-gradient(ellipse 70% 40% at 15% 55%, rgba(0,40,110,0.14) 0%, transparent 48%)
                      `,
                    }}
                  />

                  {/* Horizon line */}
                  <div
                    className="absolute left-0 right-0"
                    style={{
                      top: "44%",
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(0,200,224,0.18) 20%, rgba(0,200,224,0.55) 50%, rgba(0,200,224,0.18) 80%, transparent 100%)",
                    }}
                  />

                  {/* Horizon glow band */}
                  <div
                    className="absolute left-0 right-0"
                    style={{
                      top: "40%",
                      height: "80px",
                      background:
                        "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0,200,224,0.055) 0%, transparent 100%)",
                    }}
                  />

                  {/* Animated water shimmer */}
                  <motion.div
                    animate={{ opacity: [0.4, 0.75, 0.4], scaleX: [1, 1.015, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 right-0"
                    style={{
                      top: "45%",
                      height: "100px",
                      background:
                        "linear-gradient(180deg, rgba(0,200,224,0.035) 0%, rgba(0,200,224,0.008) 60%, transparent 100%)",
                    }}
                  />

                  {/* Animated light shaft */}
                  <motion.div
                    animate={{ opacity: [0, 0.07, 0], x: [-30, 30, -30] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(130deg, transparent 25%, rgba(0,200,224,0.06) 50%, transparent 75%)",
                    }}
                  />

                  {/* Corner brackets */}
                  <div
                    className="absolute top-0 left-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderTop: "1px solid rgba(0,200,224,0.35)",
                      borderLeft: "1px solid rgba(0,200,224,0.35)",
                    }}
                  />
                  <div
                    className="absolute top-0 right-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderTop: "1px solid rgba(0,200,224,0.12)",
                      borderRight: "1px solid rgba(0,200,224,0.12)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderBottom: "1px solid rgba(201,168,76,0.18)",
                      borderLeft: "1px solid rgba(201,168,76,0.18)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderBottom: "1px solid rgba(201,168,76,0.3)",
                      borderRight: "1px solid rgba(201,168,76,0.3)",
                    }}
                  />

                  {/* Large decorative number */}
                  <div className="absolute top-6 right-6" aria-hidden="true">
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "9rem",
                        fontWeight: 300,
                        lineHeight: 1,
                        letterSpacing: "-0.05em",
                        color: "rgba(0,200,224,0.055)",
                        display: "block",
                        userSelect: "none",
                      }}
                    >
                      01
                    </span>
                  </div>

                  {/* Top concept badge */}
                  <div className="absolute top-6 left-6">
                    <div
                      className="glass rounded-sm px-3 py-2"
                      style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                      <p
                        className="label-tag text-[0.55rem] text-gold tracking-[0.16em]"
                        style={{ marginBottom: "2px" }}
                      >
                        Concept Portfolio
                      </p>
                      <p
                        className="text-fg-primary"
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "0.95rem",
                          fontWeight: 500,
                        }}
                      >
                        5 Voyage Worlds
                      </p>
                    </div>
                  </div>

                  {/* Bottom status panel */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(2,6,8,0.96) 0%, rgba(2,6,8,0.65) 65%, transparent 100%)",
                    }}
                  >
                    <div className="glass rounded-sm p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="label-tag text-[0.55rem] text-cyan tracking-[0.18em]">
                          Platform Status
                        </span>
                        <span className="flex items-center gap-1.5">
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-cyan block"
                          />
                          <span
                            className="text-fg-muted uppercase"
                            style={{ fontSize: "0.55rem", letterSpacing: "0.12em" }}
                          >
                            Active Build
                          </span>
                        </span>
                      </div>
                      <p className="text-fg-secondary" style={{ fontSize: "0.75rem", lineHeight: 1.5 }}>
                        Founding partner conversations open.
                        Investor inquiries welcome.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ── SCROLL INDICATOR ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="relative z-10 pb-8 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="label-tag text-fg-subtle"
          style={{ fontSize: "0.55rem", letterSpacing: "0.28em" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={13} className="text-fg-subtle" />
        </motion.div>
      </motion.div>
    </section>
  );
}
