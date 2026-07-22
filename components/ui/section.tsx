import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[var(--color-ink)] py-[var(--space-section-y)] text-[var(--color-white)]",
        className,
      )}
      {...props}
    />
  );
}
