"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

import { portfolio } from "@/data/portfolio";

type PortfolioModalProps = {
  open: boolean;
  onClose: () => void;
  project: (typeof portfolio)[number] | null;
};

export function PortfolioModal({
  open,
  onClose,
  project,
}: PortfolioModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Fondo */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl"
          >
            {/* Imagen temporal */}
            <div className="relative aspect-[16/7]">
  <Image
    src={project?.image ?? ""}
    alt={project?.title ?? ""}
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
</div>

            <div className="p-8">
              <span className="rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-300">
                {project?.category}
              </span>

              <h2 className="mt-4 text-4xl font-bold text-white">
                {project?.title}
              </h2>

              <p className="mt-6 leading-8 text-gray-300">
                {project?.description}
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">

  <div className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-6 backdrop-blur-sm">
    <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
      Cliente
    </p>

    <p className="mt-3 text-lg font-semibold text-white">
      {project?.client}
    </p>
  </div>

  <div className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-6 backdrop-blur-sm">
    <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
      Ubicación
    </p>

    <p className="mt-3 text-lg font-semibold text-white">
      {project?.location}
    </p>
  </div>

</div>
            </div>

            {/* Botón de cerrar */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full bg-black/50 p-2 text-white transition hover:bg-black"
            >
              <X size={22} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}