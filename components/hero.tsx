"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container, GlassCard, MagneticButton, Subtitle, Title } from "@/components/ui";
import {
  fadeLeft,
  fadeUp,
  heroReveal,
  heroTitleStagger,
  stagger,
  transitions,
} from "@/lib/animations";

const services = ["Lonas", "Vinil", "Letras 3D", "DTF", "Rotulaci\u00f3n", "Promocionales"];
const heroVideo = "/hero/hero-video.mp4";
const heroPoster = "/hero/hero-poster.webp";

const stats = [
  { value: "+10", label: "a\u00f1os" },
  { value: "+15,000", label: "proyectos" },
  { value: "Respuesta r\u00e1pida", label: "" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[var(--color-ink)] text-[var(--color-white)]">
      <HeroBackground />

      <Container className="relative z-[var(--z-content)] grid min-h-screen grid-cols-1 items-center gap-[var(--space-16)] py-36 sm:py-40 lg:grid-cols-[0.94fr_1.06fr] lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-4xl"
        >
          <div
            className="absolute -left-12 top-8 -z-10 h-64 w-64 rounded-[var(--radius-full)] bg-[var(--surface-yellow-glow)] blur-[92px]"
            aria-hidden="true"
          />

          

          <motion.h1
            initial="hidden"
            animate="visible"
            transition={heroTitleStagger}
            className="max-w-4xl text-[clamp(3rem,10.8vw,8.55rem)]"
          >
            <Title as="span" className="block overflow-hidden pb-3">
              <motion.span
                variants={heroReveal}
                transition={transitions.reveal}
                className="block"
              >
                IMPRIME
              </motion.span>
            </Title>
            <Title as="span" className="block overflow-hidden pb-3">
              <motion.span
                variants={heroReveal}
                transition={transitions.reveal}
                className="block"
              >
                TUS
              </motion.span>
            </Title>
            <Title as="span" className="block overflow-hidden pb-3">
              <motion.span
                variants={heroReveal}
                transition={transitions.reveal}
                className="block bg-gradient-to-r from-[var(--color-yellow)] via-[var(--color-white)] to-[var(--color-yellow)] bg-clip-text text-transparent"
              >
                IDEAS
              </motion.span>
            </Title>
          </motion.h1>

          <motion.div variants={fadeUp} transition={{ ...transitions.base, delay: 0.3 }}>
            <Subtitle className="mt-10">{services.join(" \u2022 ")}</Subtitle>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-[var(--text-muted)] sm:text-base">
              Producción profesional para empresas, negocios y emprendedores.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ ...transitions.base, delay: 0.42 }}
            className="mt-12 flex flex-col items-start gap-[var(--space-5)] sm:flex-row sm:items-center"
          >
            <MagneticButton
  href="https://wa.me/524271021467?text=Hola%20%F0%9F%91%8B%0A%0AMe%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n."
  size="lg"
  shine
>
  Cotizar por WhatsApp
</MagneticButton>

           
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ ...transitions.base, delay: 0.54 }}
            className="mt-16 grid max-w-2xl grid-cols-1 gap-[var(--space-5)] sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="border-l border-[var(--border-yellow)] pl-5"
              >
                <p className="text-xl font-black leading-none text-[var(--color-white)] sm:text-2xl">
                  {stat.value}
                </p>
                {stat.label ? (
                  <p className="mt-2 text-xs font-bold uppercase tracking-[var(--tracking-label)] text-[var(--text-subtle)]">
                    {stat.label}
                  </p>
                ) : null}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <CompanyShowcase />
      </Container>
    </section>
  );
}

function HeroBackground() {
  const [usePoster] = useState(false);

  return (
    <>
      {usePoster ? (
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${heroPoster})` }}
          aria-hidden="true"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-50"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          
        />
      )}
      <div className="absolute inset-0 bg-[var(--surface-hero-overlay)]" aria-hidden="true" />
      <div
        className="absolute inset-0 [background-image:var(--hero-grid)] [background-size:var(--hero-grid-size)] opacity-[0.24]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 [background-image:var(--hero-technical-lines)] [background-size:680px_680px] opacity-[0.3]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 [background-image:var(--hero-depth)]" aria-hidden="true" />
      <div
        className="absolute left-[10%] top-[28%] h-72 w-72 rounded-[var(--radius-full)] bg-[var(--surface-yellow)] blur-[96px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[6%] top-[18%] h-[30rem] w-[30rem] rounded-[38%_62%_54%_46%] bg-[var(--surface-card)] blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[var(--color-ink)] to-transparent"
        aria-hidden="true"
      />
    </>
  );
}

function CompanyShowcase() {
  const [usePoster, setUsePoster] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeLeft}
      transition={{ ...transitions.slow, delay: 0.35 }}
      className="relative hidden min-h-[640px] items-center justify-center lg:flex"
      aria-hidden="true"
    >
      <div className="absolute h-[560px] w-[560px] rounded-[var(--radius-full)] border border-[var(--border-subtle)] bg-[var(--surface-white-faint)] shadow-[var(--shadow-inset)] backdrop-blur-[var(--blur-sm)]" />
      <GlassCard className="relative aspect-[4/5] w-full max-w-[520px] rounded-[var(--radius-showcase)] bg-[var(--surface-showcase)] p-4 hover:border-[var(--border-yellow)]">
        <div className="pointer-events-none absolute -right-20 -top-20 z-0 h-72 w-72 rounded-[var(--radius-full)] bg-[var(--surface-yellow-halo)] blur-[86px]" />
        <div className="relative z-10 h-full overflow-hidden rounded-[var(--radius-showcase-inner)] border border-[var(--border-subtle)] bg-[var(--surface-showcase-inner)] shadow-[var(--shadow-inset)]">
          {usePoster ? (
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroPoster})` }}
              aria-hidden="true"
            />
          ) : (
            <video
              className="absolute inset-0 z-0 h-full w-full object-cover"
              src={heroVideo}
              poster={heroPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              onError={() => setUsePoster(true)}
            />
          )}
          {/* <div className="absolute inset-0 [background-image:var(--showcase-production-overlay)]" /> */}
{/* <div className="absolute inset-0 [background-image:var(--hero-technical-lines)] [background-size:520px_520px] opacity-[0.16]" /> */}
        </div>
      </GlassCard>
    </motion.div>
  );
}
