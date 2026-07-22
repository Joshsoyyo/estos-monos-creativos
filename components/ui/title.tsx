import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TitleProps = HTMLAttributes<HTMLElement> & {
  as?: "h1" | "h2" | "h3" | "span";
  gradient?: boolean;
};

export function Title({ as: Component = "h2", gradient, className, ...props }: TitleProps) {
  return (
    <Component
      className={cn(
        "font-black uppercase leading-[var(--leading-display)] tracking-normal text-[var(--color-white)]",
        gradient &&
          "bg-gradient-to-r from-[var(--color-yellow)] via-[var(--color-white)] to-[var(--color-yellow)] bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  );
}
