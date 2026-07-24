"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { MagneticButton } from "@/components/ui";
import { fadeUp, menuReveal, transitions } from "@/lib/animations";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "/portafolio" },
];

export function SiteNavbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 12);
  });

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={transitions.base}
      className={`fixed left-0 right-0 top-0 z-[var(--z-nav)] px-[var(--space-page-x)] pt-5 transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] ${
        isScrolled ? "pt-3" : ""
      }`}
    >
      <nav
        className={`mx-auto flex h-20 max-w-[var(--container-max)] items-center justify-between rounded-[var(--radius-xl)] px-5 transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] sm:px-6 ${
          isScrolled
            ? "border border-[var(--border-subtle)] bg-[var(--surface-ink-glass)] shadow-[var(--shadow-panel)] backdrop-blur-[var(--blur-xl)]"
            : "border border-transparent bg-transparent"
        }`}
        aria-label="Navegaci\u00f3n principal"
      >
        <Link href="/" className="flex items-center" aria-label="Inicio">
  <Image
    src="/logos/logo-monos.png"
    alt="Estos Monos Creativos"
    width={2200}
    height={70}
    className="h-20 w-auto transition duration-300 hover:opacity-90"
    priority
  />
</Link>

        <div className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[var(--radius-md)] px-4 py-2.5 text-sm font-medium text-[var(--text-soft)] transition duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--surface-glass)] hover:text-[var(--color-white)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <MagneticButton
            href="#"
            size="md"
            className="rounded-[var(--radius-md)] px-6 shadow-[var(--shadow-yellow-soft)]"
          >
            Cotizar
          </MagneticButton>
        </div>

        <button
          type="button"
          className="relative grid h-12 w-12 place-items-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-glass)] backdrop-blur-[var(--blur-md)] lg:hidden"
          aria-label={isMenuOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-[var(--radius-full)] bg-[var(--color-white)] transition duration-[var(--duration-fast)] ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-[var(--radius-full)] bg-[var(--color-white)] transition duration-[var(--duration-fast)] ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-[var(--radius-full)] bg-[var(--color-white)] transition duration-[var(--duration-fast)] ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuReveal}
        transition={transitions.fast}
        className="mx-auto mt-3 max-w-[var(--container-max)] rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-ink-glass)] p-3 shadow-[var(--shadow-panel)] backdrop-blur-[var(--blur-xl)] lg:hidden"
      >
        <div className="grid gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[var(--radius-lg)] px-4 py-3 text-base font-medium text-[var(--text-soft)] transition duration-[var(--duration-fast)] hover:bg-[var(--surface-glass)] hover:text-[var(--color-white)]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            className="mt-2 rounded-[var(--radius-lg)] bg-[var(--color-yellow)] px-4 py-3 text-center text-base font-bold text-[var(--color-ink)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Cotizar
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
