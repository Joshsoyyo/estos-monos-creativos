"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { fadeUp, transitions } from "@/lib/animations";
import { cn } from "@/lib/utils";

type RevealAnimationProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function RevealAnimation({
  delay = 0,
  className,
  ...props
}: RevealAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp}
      transition={{ ...transitions.base, delay }}
      className={cn(className)}
      {...props}
    />
  );
}
