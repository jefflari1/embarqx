"use client";

import { motion } from "framer-motion";
import { cardEntrance } from "@/lib/motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  accentColor?: string;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  animate = true,
  accentColor,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      variants={animate ? cardEntrance : undefined}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      onClick={onClick}
      className={`card-premium ${className}`}
      style={
        accentColor
          ? {
              "--accent": accentColor,
            } as React.CSSProperties
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
