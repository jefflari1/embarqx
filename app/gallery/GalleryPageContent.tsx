"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const galleryGrid = [
  { label: "Nightlife at Sea", category: "Nightlife", wide: true, tall: true, accent: "#00C8E0", gradient: "from-[#020a1a] to-[#030508]" },
  { label: "VIP Deck Lounge", category: "VIP", wide: false, tall: false, accent: "#C9A84C", gradient: "from-[#100a03] to-[#060503]" },
  { label: "Stage Performance", category: "Entertainment", wide: false, tall: false, accent: "#00C8E0", gradient: "from-[#03050f] to-[#020408]" },
  { label: "Main Dining", category: "Dining", wide: false, tall: true, accent: "#C9A84C", gradient: "from-[#0a0a03] to-[#050503]" },
  { label: "Ocean Horizon Dawn", category: "Atmosphere", wide: true, tall: false, accent: "#00C8E0", gradient: "from-[#020814] to-[#02050c]" },
  { label: "Private Suite", category: "Luxury", wide: false, tall: false, accent: "#C9A84C", gradient: "from-[#0d0804] to-[#060503]" },
  { label: "Pool Deck Party", category: "Social", wide: false, tall: false, accent: "#00C8E0", gradient: "from-[#020c18] to-[#020509]" },
  { label: "Sunset Lounge Set", category: "Nightlife", wide: false, tall: true, accent: "#C9A84C", gradient: "from-[#120900] to-[#070400]" },
  { label: "Casino Gaming Floor", category: "Gaming", wide: false, tall: false, accent: "#00C8E0", gradient: "from-[#050510] to-[#030308]" },
  { label: "Artist Meet & Greet", category: "Exclusive", wide: true, tall: false, accent: "#C9A84C", gradient: "from-[#0d0a02] to-[#060502]" },
  { label: "Wellness Deck Morning", category: "Wellness", wide: false, tall: false, accent: "#7ECACC", gradient: "from-[#040e0c] to-[#020908]" },
  { label: "Star Deck Night", category: "Atmosphere", wide: false, tall: false, accent: "#00C8E0", gradient: "from-[#020510] to-[#01030a]" },
];

const categories = ["All", "Nightlife", "VIP", "Entertainment", "Dining", "Atmosphere", "Luxury", "Social", "Gaming", "Wellness"];

export function GalleryPageContent() {
  return (
    <div className="bg-bg-deep text-fg-primary">
      {/* Hero */}
      <section className="relative py-36 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020a14] via-bg-base to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-cyan-glow opacity-30" />
        <div className="container-premium relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel className="mb-6">Gallery</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: "0.94", letterSpacing: "-0.02em" }}
            className="text-fg-primary mb-6 max-w-3xl">
            The world EmbarqX creates.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fg-secondary text-lg leading-relaxed max-w-xl">
            A visual preview of the atmosphere, emotion, and scale of a premium EmbarqX themed voyage. All imagery shown is illustrative.
          </motion.p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-padding bg-bg-deep">
        <div className="container-premium">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-center text-fg-subtle text-xs mb-10">
            All visual content shown is illustrative. Final EmbarqX brand assets will be replaced with licensed photography and videography.
          </motion.p>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryGrid.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="break-inside-avoid group relative rounded-sm overflow-hidden cursor-pointer"
                style={{ aspectRatio: item.tall ? "3/4" : item.wide ? "16/9" : "1" }}
                role="img"
                aria-label={`${item.label} — ${item.category} atmosphere`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} media-placeholder`} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/70 via-transparent to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ background: `${item.accent}10` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="glass px-4 py-2 rounded-sm text-fg-primary text-xs font-medium uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="glass px-2.5 py-1 rounded-sm text-[0.6rem] uppercase tracking-widest text-fg-muted">
                    {item.category}
                  </span>
                </div>
                {/* TODO: Replace with actual media:
                    <Image src={item.src} fill alt={item.label} className="object-cover" />
                */}
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 text-center">
            <p className="text-fg-muted text-sm leading-relaxed max-w-xl mx-auto">
              EmbarqX is currently building its visual brand library. Premium photography and videography will be added as concept development progresses.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
