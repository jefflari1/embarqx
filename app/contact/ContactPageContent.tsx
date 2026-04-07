"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Mail, Clock, Lock } from "lucide-react";

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "";
  return <InquiryForm defaultType={type} />;
}

export function ContactPageContent() {
  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative py-36 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030a16] via-bg-base to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-cyan-glow opacity-30" />
        <div className="container-premium relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SectionLabel className="mb-6">Contact</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-6 max-w-3xl">
            The conversation
            <br />
            <span className="text-cyan-DEFAULT">starts here.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fg-secondary text-lg leading-relaxed max-w-xl">
            Whether you are an investor, operator, sponsor, talent partner, or collaborator — we want to hear from you. Tell us who you are and what you are looking to explore.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Sidebar */}
            <motion.aside initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div>
                <p className="label-tag text-fg-muted mb-4">Direct Contact</p>
                <a href="mailto:partnerships@embarqx.com" className="flex items-center gap-2.5 text-cyan-DEFAULT text-sm hover:text-cyan-bright transition-colors group">
                  <Mail size={14} />
                  partnerships@embarqx.com
                </a>
              </div>

              <div className="divider-subtle" />

              <div className="p-5 rounded-sm" style={{ background: "rgba(0,200,224,0.04)", border: "1px solid rgba(0,200,224,0.12)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={12} className="text-cyan-DEFAULT" />
                  <p className="label-tag text-[0.6rem] text-cyan-DEFAULT">Response Time</p>
                </div>
                <p className="text-fg-muted text-xs leading-relaxed">
                  We respond to all serious inquiries within 2 business days.
                </p>
              </div>

              <div className="p-5 rounded-sm" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Lock size={12} className="text-gold-DEFAULT" />
                  <p className="label-tag text-[0.6rem] text-gold-DEFAULT">Confidentiality</p>
                </div>
                <p className="text-fg-muted text-xs leading-relaxed">
                  All conversations are treated with complete discretion. We do not share contact information.
                </p>
              </div>

              <div className="divider-subtle" />

              <div>
                <p className="label-tag text-fg-muted mb-4">Who We Speak With</p>
                <ul className="space-y-2">
                  {["Investors & Capital Partners", "Cruise Operators & Charter Partners", "Sponsors & Brand Partners", "Celebrity & Talent Representation", "Strategic Collaborators"].map((type) => (
                    <li key={type} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-fg-subtle shrink-0" aria-hidden />
                      <span className="text-fg-muted text-xs">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="lg:col-span-2 p-8 md:p-10 rounded-sm"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 500 }} className="text-fg-primary mb-2">
                Tell us about your interest.
              </h2>
              <p className="text-fg-muted text-sm mb-8 leading-relaxed">
                Select your inquiry type below and provide as much context as you are comfortable sharing. The more we understand your background and interest, the more productive our first conversation will be.
              </p>
              <Suspense fallback={<div className="animate-pulse h-64 rounded-sm bg-glass" />}>
                <ContactFormWithParams />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
