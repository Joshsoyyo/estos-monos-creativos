"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { fadeUp, transitions } from "@/lib/animations";
import { cn } from "@/lib/utils";

type FloatingWhatsAppProps = {
  phone: string;
  message?: string;
  className?: string;
};

export function FloatingWhatsApp({
  phone,
  message = "Hola, quiero solicitar una cotizaci\u00f3n.",
  className,
}: FloatingWhatsAppProps) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const heroHeight = typeof window === "undefined" ? 720 : window.innerHeight * 0.82;
    setIsVisible(latest > heroHeight);
  });

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={false}
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.94, pointerEvents: "none" },
        visible: fadeUp.visible,
      }}
      transition={transitions.base}
      className={cn(
        "fixed bottom-6 right-6 z-[var(--z-overlay)] hidden h-14 w-14 place-items-center rounded-[var(--radius-full)] border border-[var(--border-subtle)] bg-[var(--color-whatsapp)] text-sm font-black text-[var(--color-ink)] shadow-[var(--shadow-panel)] backdrop-blur-[var(--blur-md)] md:grid",
        className,
      )}
      aria-label="Abrir WhatsApp"
    >
      WA
    </motion.a>
  );
}
