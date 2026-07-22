"use client";

import { useState } from "react";
import { SiteNavbar } from "@/components/site-navbar";
import { PortfolioGallery } from "@/components/portfolio-gallery";

export default function PortafolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
  <>
    <SiteNavbar />

    <main className="min-h-screen bg-[var(--color-ink)] pt-20 text-white">
  <section className="mx-auto max-w-7xl px-6 py-20">
    <p className="text-2xl font-black uppercase leading-none tracking-[0.18em] text-yellow-400 md:text-4xl">
  NUESTRO
  <br />
  PORTAFOLIO
</p>

    <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--text-soft)]">
      Más de 10 años ayudando a empresas, negocios y emprendedores a destacar
      con impresión de gran formato, DTF, rotulación, letras 3D y mucho más.
    </p>

    <div className="mt-12 flex flex-wrap gap-3">
  {[
    "Todos",
    "Lonas",
    "Vinil",
    "DTF",
    "Rotulación",
    "Letras 3D",
    "Promocionales",
  ].map((item) => (
    <button
  key={item}
  onClick={() => setActiveFilter(item)}
  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
    activeFilter === item
      ? "border border-[var(--color-yellow)] bg-[var(--color-yellow)] text-black"
      : "border border-[var(--border-subtle)] bg-[var(--surface-glass)] text-[var(--text-soft)] hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)]"
  }`}
>
  {item}
</button>
  ))}
</div>
<PortfolioGallery activeFilter={activeFilter} />
  </section>
</main>
    
  </>
);
}