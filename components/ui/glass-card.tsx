import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--border-glass)] bg-[var(--surface-glass)] shadow-[var(--shadow-glass)] backdrop-blur-[var(--blur-lg)] transition-[border-color,background,box-shadow,transform] duration-[var(--duration-base)] ease-[var(--ease-premium)]",
        className,
      )}
      {...props}
    />
  );
}
