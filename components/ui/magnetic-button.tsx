"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import { buttonHover, transitions } from "@/lib/animations";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type MagneticButtonProps = ComponentProps<typeof Button> & {
  shine?: boolean;
};

export function MagneticButton({
  children,
  className,
  shine = false,
  ...props
}: MagneticButtonProps) {
  return (
    <motion.div
      className={cn("inline-flex", className?.includes("w-full") && "w-full")}
      whileHover={buttonHover}
      whileTap={{ scale: 0.98 }}
      transition={transitions.spring}
    >
      <Button className={className} {...props}>
        {shine ? (
          <span className="group relative inline-flex h-full w-full items-center justify-center overflow-hidden">
            <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/60 to-transparent transition duration-[var(--duration-slow)] group-hover:translate-x-[110%]" />
            <span className="relative">{children}</span>
          </span>
        ) : (
          children
        )}
      </Button>
    </motion.div>
  );
}
