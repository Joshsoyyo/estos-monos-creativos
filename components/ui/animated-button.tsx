"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { buttonHover, transitions } from "@/lib/animations";
import { cn } from "@/lib/utils";

type AnimatedButtonVariant = "primary" | "secondary" | "ghost";
type AnimatedButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<AnimatedButtonVariant, string> = {
  primary:
    "bg-[var(--color-yellow)] text-[var(--color-ink)] shadow-[var(--shadow-yellow)]",
  secondary:
    "border border-[var(--border-subtle)] bg-[var(--surface-glass)] text-[var(--color-white)] shadow-[var(--shadow-inset)] backdrop-blur-[var(--blur-md)] hover:bg-[var(--color-white)] hover:text-[var(--color-ink)]",
  ghost:
    "text-[var(--text-soft)] hover:bg-[var(--surface-glass)] hover:text-[var(--color-white)]",
};

const sizeClasses: Record<AnimatedButtonSize, string> = {
  sm: "h-[var(--button-sm-height)] px-[var(--button-sm-x)] text-xs",
  md: "h-[var(--button-md-height)] px-[var(--button-md-x)] text-sm",
  lg: "h-[var(--button-lg-height)] px-[var(--button-lg-x)] text-sm",
};

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: AnimatedButtonVariant;
  size?: AnimatedButtonSize;
  loading?: boolean;
};

type AnimatedButtonAsAnchor = SharedProps &
  Omit<HTMLMotionProps<"a">, "children"> & {
    href: string;
    disabled?: boolean;
  };

type AnimatedButtonAsButton = SharedProps &
  Omit<HTMLMotionProps<"button">, "children"> & {
    href?: never;
  };

export type AnimatedButtonProps = AnimatedButtonAsAnchor | AnimatedButtonAsButton;

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  ...props
}: AnimatedButtonProps) {
  const disabled = Boolean("disabled" in props && props.disabled);
  const isInactive = disabled || loading;
  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius-md)] font-extrabold transition-[background,color,box-shadow,opacity] duration-[var(--duration-base)] ease-[var(--ease-premium)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-yellow)]",
    sizeClasses[size],
    variantClasses[variant],
    isInactive && "pointer-events-none opacity-55",
    className,
  );
  const content = (
    <>
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition duration-[var(--duration-slow)] group-hover:translate-x-[120%]" />
      <span className={cn("relative inline-flex items-center gap-2", loading && "opacity-0")}>
        {children}
      </span>
      {loading ? (
        <span className="absolute h-4 w-4 animate-spin rounded-[var(--radius-full)] border-2 border-current border-t-transparent" />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const anchorProps = { ...(props as AnimatedButtonAsAnchor) };
    delete anchorProps.disabled;

    return (
      <motion.a
        className={classes}
        whileHover={isInactive ? undefined : buttonHover}
        whileTap={isInactive ? undefined : { scale: 0.98 }}
        transition={transitions.spring}
        aria-disabled={isInactive}
        {...anchorProps}
      >
        {content}
      </motion.a>
    );
  }

  const buttonProps = props as HTMLMotionProps<"button">;

  return (
    <motion.button
      className={classes}
      whileHover={isInactive ? undefined : buttonHover}
      whileTap={isInactive ? undefined : { scale: 0.98 }}
      transition={transitions.spring}
      {...buttonProps}
      disabled={isInactive}
    >
      {content}
    </motion.button>
  );
}
