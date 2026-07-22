"use client";

import { motion } from "framer-motion";
import { fadeUp, hoverCard, transitions } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "./animated-counter";
import { GlassCard } from "./glass-card";

type StatsCardProps = {
  number: number;
  title: string;
  description?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function StatsCard({
  number,
  title,
  description,
  prefix,
  suffix,
  className,
}: StatsCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover={hoverCard}
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp}
      transition={transitions.base}
    >
      <GlassCard className={cn("p-6", className)}>
        <p className="text-4xl font-black leading-none text-[var(--color-white)]">
          <AnimatedCounter value={number} prefix={prefix} suffix={suffix} />
        </p>
        <h3 className="mt-5 text-base font-black text-[var(--color-white)]">{title}</h3>
        {description ? (
          <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
        ) : null}
      </GlassCard>
    </motion.div>
  );
}
