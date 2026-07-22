import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";

type IconCardProps = HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  title: string;
  description?: string;
  meta?: ReactNode;
};

export function IconCard({
  icon,
  title,
  description,
  meta,
  className,
  ...props
}: IconCardProps) {
  return (
    <GlassCard className={cn("relative overflow-hidden p-4", className)} {...props}>
      <div className="absolute inset-y-4 left-0 w-1 rounded-r-[var(--radius-full)] bg-[var(--color-yellow)]" />
      <div className="flex items-center justify-between gap-5">
        <div className="flex min-w-0 items-center gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--color-yellow)] text-sm font-black text-[var(--color-ink)] shadow-[var(--shadow-yellow)]">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-black text-[var(--color-white)]">{title}</h3>
            {description ? (
              <p className="mt-1 text-sm text-[var(--text-muted)]">{description}</p>
            ) : null}
          </div>
        </div>
        {meta ? <div className="text-right">{meta}</div> : null}
      </div>
    </GlassCard>
  );
}
