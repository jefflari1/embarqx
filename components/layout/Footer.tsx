"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Platform: [
    { href: "/concept", label: "The Concept" },
    { href: "/experiences", label: "Experiences" },
    { href: "/ships", label: "Ships & Venues" },
    { href: "/gallery", label: "Gallery" },
  ],
  Partners: [
    { href: "/partners", label: "Partner With Us" },
    { href: "/investors", label: "Investor Relations" },
    { href: "/about", label: "About EmbarqX" },
    { href: "/faq", label: "FAQ" },
  ],
  Contact: [
    { href: "/contact?type=investor", label: "Investor Inquiry" },
    { href: "/contact?type=operator", label: "Operator Inquiry" },
    { href: "/contact?type=sponsor", label: "Sponsor Inquiry" },
    { href: "/contact?type=talent", label: "Talent Inquiry" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-deep overflow-hidden" role="contentinfo">
      {/* Subtle ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-glow opacity-20 blur-[80px] pointer-events-none" />

      <div className="container-premium relative z-10">
        {/* Upper footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group" aria-label="EmbarqX">
              <div className="w-8 h-8 border border-cyan/40 rotate-45 flex items-center justify-center group-hover:border-cyan/70 transition-colors duration-300">
                <div className="w-2 h-2 bg-cyan rotate-0" />
              </div>
              <span
                className="font-display font-semibold text-xl tracking-[0.08em] text-fg-primary"
                style={{ fontFamily: "var(--font-cormorant)", whiteSpace: "nowrap" }}
              >
                Embarq<span className="text-cyan" style={{ marginLeft: "-0.08em" }}>X</span>
              </span>
            </Link>

            <p className="text-fg-muted text-sm leading-relaxed max-w-xs mb-8">
              Premium themed cruise concepts that unite culture, celebrity,
              community, luxury, and destination into unforgettable voyages
              built for scale.
            </p>

            <div className="space-y-3">
              <p className="text-fg-subtle text-xs tracking-[0.1em] uppercase">Begin a conversation</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-cyan text-sm font-medium hover:text-cyan-bright transition-colors group"
              >
                partnerships@embarqx.com
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="label-tag text-fg-muted mb-6">{section}</p>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-fg-muted text-sm hover:text-fg-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-subtle" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          <p className="text-fg-subtle text-xs">
            © {new Date().getFullYear()} EmbarqX. All rights reserved. All vessel references are illustrative examples only.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/faq" className="text-fg-subtle text-xs hover:text-fg-muted transition-colors">FAQ</Link>
            <Link href="/contact" className="text-fg-subtle text-xs hover:text-fg-muted transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
