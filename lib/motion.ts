import { Variants } from "framer-motion";

// ============================================================
// EASING CURVES — EmbarqX Design System
// ============================================================
export const ease = {
  premium: [0.16, 1, 0.3, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
  in: [0.4, 0, 1, 1] as const,
  out: [0, 0, 0.2, 1] as const,
};

// ============================================================
// FADE IN — base entrance
// ============================================================
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: ease.smooth },
  },
};

// ============================================================
// SLIDE UP — primary content reveal
// ============================================================
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.premium },
  },
};

// ============================================================
// SLIDE UP FAST — secondary elements
// ============================================================
export const slideUpFast: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.premium },
  },
};

// ============================================================
// CONTAINER — staggered children
// ============================================================
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// ============================================================
// CONTAINER SLOW — for hero / prominent sections
// ============================================================
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// ============================================================
// CARD ENTRANCE — stagger item
// ============================================================
export const cardEntrance: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: ease.premium },
  },
};

// ============================================================
// SCALE IN — modals, overlays
// ============================================================
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: ease.premium },
  },
};

// ============================================================
// HERO ENTRANCE — for hero section
// ============================================================
export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: ease.premium },
  },
};

// ============================================================
// HERO SUB — supporting copy
// ============================================================
export const heroSub: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.premium, delay: 0.25 },
  },
};

// ============================================================
// LABEL — small label above heading
// ============================================================
export const labelEntrance: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: ease.premium },
  },
};

// ============================================================
// LINE DRAW — for decorative dividers/lines
// ============================================================
export const lineExpand: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: ease.premium, delay: 0.2 },
  },
};
