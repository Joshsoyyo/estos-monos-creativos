import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-[var(--shadow-soft)]",
        className,
      )}
      {...props}
    />
  );
}
