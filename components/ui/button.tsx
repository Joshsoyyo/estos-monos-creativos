import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-yellow)] text-[var(--color-ink)] shadow-[var(--shadow-yellow)]",
  secondary:
    "border border-[var(--border-subtle)] bg-[var(--surface-glass)] text-[var(--color-white)] shadow-[var(--shadow-inset)] backdrop-blur-[var(--blur-md)] hover:bg-[var(--color-white)] hover:text-[var(--color-ink)]",
  ghost:
    "text-[var(--text-muted)] hover:bg-[var(--surface-glass)] hover:text-[var(--color-white)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[var(--button-sm-height)] px-[var(--button-sm-x)] text-xs",
  md: "h-[var(--button-md-height)] px-[var(--button-md-x)] text-sm",
  lg: "h-[var(--button-lg-height)] px-[var(--button-lg-x)] text-sm",
};

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-[var(--radius-full)] font-extrabold transition-[transform,background,color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-premium)]",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
