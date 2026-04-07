"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: import("framer-motion").Variants;
}

export function Reveal({ children, className = "", delay = 0, variants }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={variants ?? slideUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
