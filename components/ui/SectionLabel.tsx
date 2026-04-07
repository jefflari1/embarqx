"use client";

import { motion } from "framer-motion";
import { labelEntrance } from "@/lib/motion";

interface SectionLabelProps {
  children: React.ReactNode;
  accent?: "cyan" | "gold" | "muted";
  className?: string;
  animate?: boolean;
}

export function SectionLabel({
  children,
  accent = "cyan",
  className = "",
  animate = false,
}: SectionLabelProps) {
  const accentClass = {
    cyan: "text-cyan border-cyan/30 bg-cyan/6",
    gold: "text-gold border-gold/30 bg-gold/6",
    muted: "text-fg-muted border-border bg-glass",
  }[accent];

  const Tag = animate ? motion.span : "span";

  return (
    <Tag
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border label-tag ${accentClass} ${className}`}
      {...(animate ? { variants: labelEntrance, initial: "hidden", animate: "visible" } : {})}
    >
      <span className="w-1 h-1 rounded-full bg-current opacity-80" aria-hidden />
      {children}
    </Tag>
  );
}
