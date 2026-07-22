"use client";

import { motion } from "framer-motion";

export function PrinterHead() {
  return (
    <div className="sticky top-24 z-30 flex justify-center">
      <motion.div
        animate={{
          y: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 0.35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full max-w-5xl"
      >
        {/* Glow */}
        <div className="absolute -bottom-4 left-1/2 h-10 w-80 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />

        {/* Máquina */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">

          {/* Barra superior */}
          <div className="h-4 bg-zinc-700" />

          {/* Cuerpo */}
          <div className="flex h-32 items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-900">

            {/* Cabezal */}
            <motion.div
              animate={{
                x: [-180, 180, -180],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-12 w-28 rounded-xl bg-yellow-400 shadow-lg"
            >
              <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-black/40" />
            </motion.div>

          </div>

          {/* Rodillo */}
          <div className="h-4 bg-zinc-700" />

        </div>
      </motion.div>
    </div>
  );
}