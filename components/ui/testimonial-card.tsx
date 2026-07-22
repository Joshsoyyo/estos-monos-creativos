"use client";

import { motion } from "framer-motion";
import { fadeUp, hoverCard, transitions } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";

type TestimonialCardProps = {
  name: string;
  review: string;
  rating?: number;
  source?: string;
  avatar?: string;
  className?: string;
};

export function TestimonialCard({
  name,
  review,
  rating = 5,
  source = "Google Reviews",
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      whileHover={hoverCard}
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp}
      transition={transitions.base}
    >
      <GlassCard className={cn("p-6", className)}>
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-[var(--radius-full)] border border-[var(--border-subtle)] bg-[var(--surface-glass)] text-sm font-black text-[var(--color-yellow)]">
            {avatar ? (
              <span
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${avatar})` }}
                aria-hidden="true"
              />
            ) : (
              name.charAt(0)
            )}
          </div>
          <div>
            <h3 className="text-sm font-black text-[var(--color-white)]">{name}</h3>
            <p className="text-xs font-bold uppercase tracking-[var(--tracking-label)] text-[var(--text-subtle)]">
              {source}
            </p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-7 text-[var(--text-soft)]">{review}</p>
        <p className="mt-5 text-sm tracking-[0.18em] text-[var(--color-yellow)]">
          {"★".repeat(Math.max(0, Math.min(5, rating)))}
        </p>
      </GlassCard>
    </motion.article>
  );
}
