"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { easings } from "@/lib/animations";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1.2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    `${prefix}${Math.round(latest).toLocaleString("en-US")}${suffix}`,
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: easings.premium,
    });

    return () => controls.stop();
  }, [duration, isInView, motionValue, value]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
