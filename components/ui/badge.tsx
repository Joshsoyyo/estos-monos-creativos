import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "premium" | "success" | "warning" | "dark";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const badgeVariants: Record<BadgeVariant, string> = {
  premium:
    "border-[var(--border-yellow)] bg-[var(--surface-yellow)] text-[var(--color-yellow)] shadow-[var(--shadow-yellow-soft)]",
  success:
    "border-[var(--border-success)] bg-[var(--surface-success)] text-[var(--color-success)] shadow-[var(--shadow-inset)]",
  warning:
    "border-[var(--border-warning)] bg-[var(--surface-warning)] text-[var(--color-warning)] shadow-[var(--shadow-inset)]",
  dark:
    "border-[var(--border-dark)] bg-[var(--surface-dark)] text-[var(--color-white)] shadow-[var(--shadow-inset)]",
};

export function Badge({ className, variant = "premium", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-[var(--radius-full)] border px-4 py-2 text-xs font-bold uppercase tracking-[var(--tracking-badge)] backdrop-blur-[var(--blur-md)]",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
