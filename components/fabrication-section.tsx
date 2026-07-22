"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container, Section } from "@/components/ui";

const services = [
  {
    id: "lonas",
    title: "LONAS",
    description: "Gran formato para fachadas, eventos y presencia exterior.",
    position: "left-[16%] top-[18%]",
    line: { x: "50%", y: "50%" },
    nudge: { x: 0, y: -4 },
  },
  {
    id: "vinil",
    title: "VINIL",
    description: "Aplicaciones limpias para escaparates, muros y superficies.",
    position: "left-1/2 top-[18%] -translate-x-1/2",
    line: { x: "50%", y: "50%" },
    nudge: { x: 0, y: -4 },
  },
  {
    id: "dtf",
    title: "DTF TEXTIL",
    description: "Impresión textil para prendas, uniformes y colecciones.",
    position: "right-[16%] top-[18%]",
    line: { x: "50%", y: "50%" },
    nudge: { x: 0, y: -4 },
  },
  {
    id: "letras",
    title: "LETRAS 3D",
    description: "Volumen, sombra y presencia para negocios y fachadas.",
    position: "left-[16%] bottom-[18%]",
    line: { x: "50%", y: "50%" },
    nudge: { x: 0, y: 4 },
  },
  {
    id: "rotulacion",
    title: "ROTULACIÓN",
    description: "Identidad visual para vehículos, locales y flotillas.",
    position: "left-1/2 bottom-[18%] -translate-x-1/2",
    line: { x: "50%", y: "50%" },
    nudge: { x: 0, y: 4 },
  },
  {
    id: "promocionales",
    title: "PROMOCIONALES",
    description: "Objetos personalizados para llevar tu marca más lejos.",
    position: "right-[16%] bottom-[18%]",
    line: { x: "50%", y: "50%" },
    nudge: { x: 0, y: 4 },
  },
] as const;

type Service = (typeof services)[number];

function ServiceVisual({ id }: { id: Service["id"] }) {
  if (id === "lonas") {
    return (
      <div className="relative h-14 w-20">
        <motion.div
          animate={{ scaleX: [0.72, 1, 0.72] }}
          className="absolute inset-1 origin-center border border-[var(--color-yellow)]"
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          animate={{ x: [-4, 4, -4] }}
          className="absolute left-0 top-1/2 h-px w-full bg-[var(--border-subtle)]"
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (id === "vinil") {
    return (
      <div className="relative h-12 w-16">
        <div className="absolute inset-2 rounded-[var(--radius-sm)] border border-[var(--border-subtle)]" />
        <motion.div
          animate={{ rotate: [0, -16, 0], x: [0, -5, 0], y: [0, -5, 0] }}
          className="absolute right-2 top-2 h-6 w-6 rounded-bl-[var(--radius-md)] border-b border-l border-[var(--color-yellow)] bg-[var(--color-yellow)]/15"
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (id === "dtf") {
    return (
      <div className="relative grid h-12 w-16 grid-cols-4 place-items-center gap-1">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{ scale: [0.7, 1, 0.7], opacity: [0.45, 1, 0.45] }}
            className="h-2 w-2 bg-[var(--color-yellow)]"
            transition={{
              delay: index * 0.08,
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (id === "letras") {
    return (
      <div className="relative h-12 w-16">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            animate={{ x: [index * 4, index * 4 + 3, index * 4] }}
            className="absolute left-4 top-3 h-7 w-9 border border-[var(--color-yellow)]"
            style={{ opacity: 1 - index * 0.22, transform: `translate(${index * 5}px, ${index * 5}px)` }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    );
  }

  if (id === "rotulacion") {
    return (
      <div className="relative h-12 w-16">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            animate={{ scaleX: [0.82, 1, 0.82], opacity: [0.35, 0.85, 0.35] }}
            className="absolute left-1/2 h-6 w-12 -translate-x-1/2 rounded-[50%] border border-[var(--color-yellow)]"
            style={{ top: `${10 + index * 7}px` }}
            transition={{
              delay: index * 0.18,
              duration: 4.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-12 w-16">
      {[0, 1, 2, 3].map((index) => (
        <motion.span
          key={index}
          animate={{
            rotate: [0, 18, 0],
            x: [0, index % 2 === 0 ? 5 : -5, 0],
            y: [0, index < 2 ? -5 : 5, 0],
          }}
          className="absolute h-4 w-4 border border-[var(--color-yellow)] bg-[var(--surface-yellow)]"
          style={{
            borderRadius: index % 2 === 0 ? "var(--radius-full)" : "var(--radius-sm)",
            left: `${18 + (index % 2) * 22}px`,
            top: `${8 + Math.floor(index / 2) * 22}px`,
          }}
          transition={{
            delay: index * 0.15,
            duration: 4.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ServiceNode({
  active,
  dimmed,
  index,
  onHover,
  service,
}: {
  active: boolean;
  dimmed: boolean;
  index: number;
  onHover: (id: Service["id"] | null) => void;
  service: Service;
}) {
  const floatDistance = 6 + (index % 3) * 2;

  return (
    <motion.div
      animate={{ y: [0, -floatDistance, 0] }}
      className={`group absolute hidden w-48 lg:block ${service.position}`}
      onHoverEnd={() => onHover(null)}
      onHoverStart={() => onHover(service.id)}
      transition={{
        delay: index * 0.32,
        duration: 6 + index * 0.35,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        animate={{
          boxShadow: active
            ? "0 0 44px rgba(255, 212, 0, 0.28)"
            : "0 0 0 rgba(255, 212, 0, 0)",
          opacity: dimmed ? 0.35 : 1,
          scale: active ? 1.08 : 1,
          x: active ? service.nudge.x : 0,
          y: active ? service.nudge.y : 0,
        }}
        className="relative flex cursor-default flex-col items-center gap-3 text-center"
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <ServiceVisual id={service.id} />
        <p className="text-sm font-black uppercase tracking-[var(--tracking-label)] text-[var(--color-white)]">
          {service.title}
        </p>
      </motion.div>

      <motion.div
        animate={{
          opacity: active ? 1 : 0,
          y: active ? -10 : 0,
        }}
        className="pointer-events-none absolute left-1/2 top-full z-20 mt-5 w-64 -translate-x-1/2 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-ink-glass)] p-5 text-left shadow-[var(--shadow-panel)] backdrop-blur-[var(--blur-xl)]"
        initial={false}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <h3 className="text-base font-black uppercase text-[var(--color-white)]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm font-medium leading-6 text-[var(--text-soft)]">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
}



function MobileService({ service }: { service: Service }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      className="flex min-h-36 flex-col items-center justify-center border border-[var(--border-subtle)] bg-[var(--surface-glass)] p-5 text-center"
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <ServiceVisual id={service.id} />
      <p className="mt-4 text-xs font-black uppercase tracking-[var(--tracking-label)] text-[var(--color-white)]">
        {service.title}
      </p>
    </motion.div>
  );
}

export function FabricationSection() {
  const [activeService, setActiveService] = useState<Service["id"] | null>(null);

  return (
    <Section
  id="portafolio"
  className="relative min-h-screen overflow-visible border-t border-white/10 py-24 sm:py-28 lg:py-24"
>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:56px_56px]"
      />
      
      

      <Container className="relative z-10 flex min-h-[calc(100vh-12rem)] flex-col">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2.75rem,6vw,5.25rem)] font-black uppercase leading-[1.2] tracking-normal text-[var(--color-white)]">
            TODO LO QUE TU MARCA NECESITA
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-[var(--text-soft)] sm:text-xl">
            Dise{"\u00f1"}amos, imprimimos y fabricamos soluciones publicitarias.
          </p>
        </div>

        <div className="relative mx-auto mt-8 hidden min-h-[560px] w-full max-w-6xl flex-1 overflow-visible lg:block">
          

         <motion.div
  className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
>
  {/* Marea izquierda */}
  <motion.div
    animate={{
      x: [-80, 60, -80],
      y: [-20, 25, -20],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 28,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-[30%] top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]"
    style={{
      background:
        "radial-gradient(circle, rgba(255,212,0,.10) 0%, rgba(255,212,0,.04) 55%, transparent 100%)",
    }}
  />

  {/* Marea derecha */}
  <motion.div
    animate={{
      x: [70, -70, 70],
      y: [25, -15, 25],
      scale: [1.05, 1, 1.05],
    }}
    transition={{
      duration: 34,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-[70%] top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[190px]"
    style={{
      background:
        "radial-gradient(circle, rgba(255,212,0,.08) 0%, rgba(255,212,0,.03) 60%, transparent 100%)",
    }}
  />
</motion.div>

          {services.map((service, index) => (
            <ServiceNode
              key={service.id}
              active={activeService === service.id}
              dimmed={activeService !== null && activeService !== service.id}
              index={index}
              onHover={setActiveService}
              service={service}
            />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:hidden">
          <motion.div
            animate={{ scale: [0.98, 1.02, 0.98] }}
            className="col-span-2 grid min-h-40 place-items-center rounded-[var(--radius-full)] border border-[var(--border-subtle)] bg-[var(--surface-ink-glass)] text-center shadow-[var(--shadow-glass)]"
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[var(--tracking-label)] text-[var(--color-yellow)]">
                ESTOS MONOS
              </p>
              <p className="mt-2 text-2xl font-black uppercase leading-none text-[var(--color-white)]">
                CREATIVOS
              </p>
            </div>
          </motion.div>
          {services.map((service) => (
            <MobileService key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
