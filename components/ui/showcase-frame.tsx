"use client";

import { motion } from "framer-motion";
import type { ReactNode, VideoHTMLAttributes } from "react";
import { fadeUp, hoverCard, transitions } from "@/lib/animations";
import { cn } from "@/lib/utils";

type ShowcaseBadge = {
  label: ReactNode;
  icon?: ReactNode;
};

type ShowcaseFrameProps = {
  title: ReactNode;
  image?: string;
  video?: string;
  badges?: ShowcaseBadge[];
  className?: string;
  mediaClassName?: string;
  videoProps?: Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "className">;
};

export function ShowcaseFrame({
  title,
  image,
  video,
  badges = [],
  className,
  mediaClassName,
  videoProps,
}: ShowcaseFrameProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      whileHover={hoverCard}
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp}
      transition={transitions.base}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-[var(--border-glass)] bg-[var(--surface-showcase)] p-3 shadow-[var(--shadow-glass)] backdrop-blur-[var(--blur-lg)]",
        className,
      )}
    >
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-[var(--radius-full)] bg-[var(--surface-yellow-halo)] blur-[76px]" />
      <div className="absolute inset-0 opacity-0 transition duration-[var(--duration-slow)] group-hover:opacity-100 [background-image:var(--showcase-production-overlay)]" />

      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-[22px] border border-[var(--border-subtle)] bg-[var(--surface-showcase-inner)] shadow-[var(--shadow-inset)] sm:aspect-[16/11] lg:aspect-[4/5]",
          mediaClassName,
        )}
      >
        {video ? (
          <video
            className="h-full w-full object-cover"
            src={video}
            playsInline
            muted
            loop
            autoPlay
            preload="auto"
            {...videoProps}
          />
        ) : image ? (
          <div
            className="h-full w-full bg-cover bg-center transition duration-[var(--duration-slow)] group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <div className="h-full w-full [background-image:var(--showcase-production-overlay)]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />
        <div className="absolute inset-x-5 bottom-5">
          <h3 className="max-w-md text-2xl font-black leading-tight text-[var(--color-white)] sm:text-3xl">
            {title}
          </h3>
        </div>
      </div>

      {badges.length ? (
        <div className="relative mt-4 flex flex-wrap gap-[var(--space-3)]">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ ...transitions.base, delay: index * 0.08 }}
              className="rounded-[var(--radius-floating)] border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-4 py-2.5 shadow-[var(--shadow-inset)] backdrop-blur-[var(--blur-md)]"
            >
              <p className="flex items-center gap-2 whitespace-nowrap text-xs font-bold text-[var(--color-white)]">
                {badge.icon ? (
                  <span className="text-[var(--color-yellow)]">{badge.icon}</span>
                ) : null}
                {badge.label}
              </p>
            </motion.div>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}
