import type { Transition, Variants } from "framer-motion";

export const easings = {
  premium: [0.22, 1, 0.36, 1] as [number, number, number, number],
  reveal: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export const transitions = {
  fast: { duration: 0.28, ease: "easeOut" },
  base: { duration: 0.7, ease: easings.premium },
  slow: { duration: 0.9, ease: easings.premium },
  reveal: { duration: 0.92, ease: easings.reveal },
  float: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  scroll: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
  spring: { type: "spring", stiffness: 420, damping: 28 },
} satisfies Record<string, Transition>;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 34 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -34 },
  visible: { opacity: 1, x: 0 },
};

export const zoom: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

export const heroTitleStagger: Transition = {
  staggerChildren: 0.16,
  delayChildren: 0.22,
};

export const menuReveal: Variants = {
  open: { opacity: 1, y: 0, pointerEvents: "auto" },
  closed: { opacity: 0, y: -12, pointerEvents: "none" },
};

export const heroReveal: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

export const hoverCard = {
  y: -6,
  scale: 1.012,
};

export const buttonHover = {
  y: -3,
  scale: 1.015,
};
