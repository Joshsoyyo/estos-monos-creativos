"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { MagneticButton } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-dark)] bg-[#0b0b0b]">
      <Container>
        {/* CTA */}
        <section className="border-b border-white/10 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[var(--color-yellow)]">
            ¿LISTO PARA COMENZAR?
          </p>

          <h2 className="mt-5 text-4xl font-black text-white lg:text-5xl">
            Hagamos realidad tu próximo proyecto.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Desde impresión en gran formato hasta letras 3D, rotulación,
            promocionales y diseño. Estamos listos para ayudarte.
          </p>

          <div className="mt-12 flex justify-center">
            <MagneticButton
              href="https://wa.me/524271021467?text=Hola%20👋%20Me%20gustaría%20solicitar%20una%20cotización."
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              shine
            >
              Cotizar por WhatsApp
            </MagneticButton>
          </div>
        </section>

        {/* Footer */}
        <section className="py-14">
          <div className="grid gap-10 lg:grid-cols-4">
            {/* Logo */}
            <div>
              <Image
                src="/logos/logo-monos.png"
                alt="Estos Monos Creativos"
                width={180}
                height={65}
                className="h-auto w-auto"
              />

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
                Más de 10 años ayudando a empresas y emprendedores a destacar
                con soluciones de impresión, publicidad y diseño de alta
                calidad.
              </p>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="mb-4 font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
                Servicios
              </h3>

              <ul className="space-y-3 text-white/60">
                <li>Gran Formato</li>
                <li>Lonas</li>
                <li>Vinil</li>
                <li>Letras 3D</li>
                <li>DTF Textil</li>
                <li>Rotulación Vehicular</li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="mb-4 font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
                Contacto
              </h3>

              <ul className="space-y-4 text-white/60">
                <li>
                  Vicente Riva Palacio #9 y #18
                  <br />
                  Col. Centro
                  <br />
                  San Juan del Río, Querétaro
                </li>

                <li>(427) 102 1467</li>

                <li>contactoestosmonoscreativos@gmail.com</li>
              </ul>
            </div>

            {/* Redes */}
            <div>
              <h3 className="mb-4 font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
                Síguenos
              </h3>

              <div className="space-y-3">
                <Link
                  href="https://www.facebook.com/EstosMonosCreativosMx"
                  target="_blank"
                  className="block text-white/60 transition hover:text-[var(--color-yellow)]"
                >
                  Facebook
                </Link>

                <Link
                  href="https://www.instagram.com/estosmonoscreativos/"
                  target="_blank"
                  className="block text-white/60 transition hover:text-[var(--color-yellow)]"
                >
                  Instagram
                </Link>

                <Link
                  href="https://wa.me/524271021467"
                  target="_blank"
                  className="block text-white/60 transition hover:text-[var(--color-yellow)]"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>

          {/* Parte inferior */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/40 lg:flex-row lg:text-left">
              <p>
                © 2026 Estos Monos Creativos. Todos los derechos reservados.
              </p>

              <p>
                Diseñado con pasión por{" "}
                <span className="font-semibold text-[var(--color-yellow)] transition hover:text-white">
                  Bold Studio
                </span>
              </p>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
}