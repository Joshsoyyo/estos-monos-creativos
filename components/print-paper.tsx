"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
};

export function PrintPaper({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["120px", "2200px"]);

  return (
    <div ref={ref} className="relative flex justify-center">
      <motion.div
        style={{ height }}
        className="w-full max-w-3xl overflow-hidden rounded-b-3xl border-x border-b border-zinc-300 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
      >
        <div className="flex min-h-full flex-col justify-around px-12 py-24">
          {children}
        </div>
      </motion.div>
    </div>
  );
}