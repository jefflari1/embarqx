"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  { label: "Nightlife at Sea", size: "large", accent: "#00C8E0", gradient: "from-[#020a14] to-[#03050a]" },
  { label: "VIP Deck Lounge", size: "small", accent: "#C9A84C", gradient: "from-[#100a03] to-[#060503]" },
  { label: "Stage Performance", size: "small", accent: "#00C8E0", gradient: "from-[#03050f] to-[#020408]" },
  { label: "Fine Dining", size: "medium", accent: "#C9A84C", gradient: "from-[#0a0a03] to-[#050503]" },
  { label: "Ocean Horizon", size: "medium", accent: "#00C8E0", gradient: "from-[#020814] to-[#02050c]" },
  { label: "Luxury Suite", size: "small", accent: "#C9A84C", gradient: "from-[#0d0804] to-[#060503]" },
];

export function GalleryPreview() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Gallery preview">
      <div className="absolute inset-0 bg-bg-deep" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <SectionLabel className="mb-5">Atmosphere</SectionLabel>
            <h2
              className="heading-section"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              The world EmbarqX creates.
            </h2>
          </div>
          <Link href="/gallery" className="btn-ghost shrink-0">
            View Gallery
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Large feature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-2 md:col-span-2 md:row-span-2 group relative rounded-sm overflow-hidden cursor-pointer"
            style={{ aspectRatio: "4/3" }}
            role="img"
            aria-label="Nightlife at Sea — atmosphere preview"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${galleryItems[0].gradient} media-placeholder`} />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${galleryItems[0].accent}15, transparent)` }} />
            <div className="absolute bottom-5 left-5">
              <span className="glass px-3 py-1.5 rounded-sm label-tag text-[0.6rem] text-fg-secondary">{galleryItems[0].label}</span>
            </div>
          </motion.div>

          {/* Smaller items */}
          {galleryItems.slice(1).map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-sm overflow-hidden cursor-pointer"
              style={{ aspectRatio: "1" }}
              role="img"
              aria-label={`${item.label} — atmosphere preview`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} media-placeholder`} />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/70 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `${item.accent}10` }} />
              <div className="absolute bottom-3 left-3">
                <span className="glass px-2.5 py-1 rounded-sm label-tag text-[0.55rem] text-fg-muted">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 text-center text-fg-subtle text-xs"
        >
          All imagery shown is illustrative. Final EmbarqX assets will reflect licensed brand photography and videography.
        </motion.p>
      </div>
    </section>
  );
}
