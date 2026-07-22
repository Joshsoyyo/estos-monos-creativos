"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import type { Brand } from "@/types/brand";

type TrustedBrandsProps = {
  brands: Brand[];
};

const marqueeTransition = {
  duration: 28,
  ease: "linear",
  repeat: Infinity,
} as const;

export function TrustedBrands({ brands }: TrustedBrandsProps) {
  const controls = useAnimationControls();
  const repeatedBrands = [...brands, ...brands];

  useEffect(() => {
    controls.start({ x: "-50%", transition: marqueeTransition });
  }, [controls]);

  return (
    <div
      className="relative overflow-hidden py-2"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({ x: "-50%", transition: marqueeTransition })}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-ink)] to-transparent sm:w-36"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-ink)] to-transparent sm:w-36"
        aria-hidden="true"
      />

      <motion.div
        className="flex w-max gap-[var(--space-6)] sm:gap-[var(--space-8)]"
        animate={controls}
        initial={{ x: "0%" }}
      >
        {repeatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="group grid h-24 w-52 place-items-center rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-7 shadow-[var(--shadow-inset)] backdrop-blur-[var(--blur-md)] transition duration-[var(--duration-base)] ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-[var(--border-yellow)] hover:bg-[var(--surface-card)] sm:h-28 sm:w-60"
          >
            <span className="sr-only">{brand.name}</span>
            <span
              className="h-20 w-full bg-contain bg-center bg-no-repeat opacity-100 grayscale brightness-400 transition duration-[var(--duration-base)] ease-[var(--ease-premium)] group-hover:opacity-100 group-hover:grayscale-0"
              style={{ backgroundImage: `url(${brand.logo})` }}
              aria-hidden="true"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
