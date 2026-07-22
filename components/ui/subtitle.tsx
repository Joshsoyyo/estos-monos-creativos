import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Subtitle({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-2xl text-base font-medium leading-8 text-[var(--text-soft)] sm:text-xl",
        className,
      )}
      {...props}
    />
  );
}
