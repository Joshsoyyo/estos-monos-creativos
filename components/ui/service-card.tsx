"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, hoverCard, transitions } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "./animated-button";
import { GlassCard } from "./glass-card";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
  action?: ReactNode;
  className?: string;
};

export function ServiceCard({
  image,
  title,
  description,
  buttonLabel = "Ver servicio",
  href = "#",
  action,
  className,
}: ServiceCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      whileHover={hoverCard}
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp}
      transition={transitions.base}
    >
      <GlassCard className={cn("group overflow-hidden p-3", className)}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)]">
          <div
            className="h-full w-full bg-cover bg-center transition duration-[var(--duration-slow)] group-hover:scale-[1.04]"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-transparent to-transparent opacity-80" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-black text-[var(--color-white)]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
          <div className="mt-6">
            {action ?? (
              <AnimatedButton href={href} variant="secondary" size="sm">
                {buttonLabel}
              </AnimatedButton>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}
