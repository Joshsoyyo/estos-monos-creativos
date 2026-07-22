"use client";

import { motion } from "framer-motion";
import { fadeUp, hoverCard, transitions } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { GlassCard } from "./glass-card";

type PortfolioCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  className?: string;
};

export function PortfolioCard({
  image,
  category,
  title,
  description,
  className,
}: PortfolioCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      whileHover={hoverCard}
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp}
      transition={transitions.base}
    >
      <GlassCard className={cn("group overflow-hidden p-3 hover:border-[var(--border-yellow)]", className)}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--border-subtle)]">
          <div
            className="h-full w-full bg-cover bg-center transition duration-[var(--duration-slow)] ease-[var(--ease-premium)] group-hover:scale-[1.045]"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/84 via-[var(--color-ink)]/16 to-transparent transition duration-[var(--duration-base)] group-hover:from-[var(--color-ink)]/72" />
          <div className="absolute left-4 top-4">
            <Badge variant="dark" className="tracking-[var(--tracking-label)]">
              {category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
  <h3 className="text-2xl font-black leading-tight text-[var(--color-white)]">
    {title}
  </h3>
  <p className="mt-2 max-w-xl text-base leading-7 text-[var(--text-muted)]">
    {description}
  </p>
</div>
      </GlassCard>
    </motion.article>
  );
}
