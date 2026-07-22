import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "./animated-button";
import { GlassCard } from "./glass-card";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

type CTAProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CTA({
  eyebrow,
  title,
  description,
  primaryLabel = "Solicitar cotizaci\u00f3n",
  primaryHref = "#",
  secondaryLabel,
  secondaryHref = "#",
  className,
}: CTAProps) {
  return (
    <GlassCard className={cn("relative overflow-hidden p-8 sm:p-10", className)}>
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-[var(--radius-full)] bg-[var(--surface-yellow-halo)] blur-[86px]" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[var(--tracking-panel)] text-[var(--color-yellow)]">
              {eyebrow}
            </p>
          ) : null}
          <Title className="mt-4 text-4xl sm:text-6xl">{title}</Title>
          {description ? <Subtitle className="mt-5">{description}</Subtitle> : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <AnimatedButton href={primaryHref} size="lg">
            {primaryLabel}
          </AnimatedButton>
          {secondaryLabel ? (
            <AnimatedButton href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </AnimatedButton>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
}
