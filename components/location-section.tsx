"use client";

import { motion } from "framer-motion";
import { Container, Section, MagneticButton } from "@/components/ui";
import {
  MapPin,
  Phone,
  Clock,
  Mail
} from "lucide-react";

export function LocationSection() {
  return (
    <Section className="border-t border-[var(--border-dark)] pt-20 pb-28">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
  <p className="text-sm font-bold uppercase tracking-[0.35em] text-[var(--color-yellow)]">
    VISÍTANOS
  </p>

  <h2 className="mt-5 text-4xl lg:text-5xl font-black leading-tight text-white">
    Conoce nuestro taller.
  </h2>

</div>
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#111]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4450.873321608256!2d-99.99661772407485!3d20.386917381106688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d30c831eac5555%3A0xbd85119291b3ca14!2sESTOS%20MONOS%20CREATIVOS!5e1!3m2!1ses!2smx!4v1784676249078!5m2!1ses!2smx"
              className="h-full min-h-[560px] w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          {/* INFORMACIÓN */}
          <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    rounded-[32px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-10
    lg:p-14
  "
>
            <div className="mt-10 space-y-8">
  <div className="flex items-start gap-4">
    <MapPin className="mt-1 h-6 w-6 text-[var(--color-yellow)] flex-shrink-0" />

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-yellow)]">
        Dirección
      </p>

      <p className="mt-2 leading-7 text-white/80">
        Vicente Riva Palacio #9 y #18
        <br />
        Col. Centro, C.P. 76800
        <br />
        San Juan del Río, Querétaro
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Phone className="mt-1 h-6 w-6 text-[var(--color-yellow)] flex-shrink-0" />

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-yellow)]">
        WhatsApp
      </p>

      <p className="mt-2 text-white/80">
        (427) 102 1467
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Mail className="mt-1 h-6 w-6 text-[var(--color-yellow)] flex-shrink-0" />

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-yellow)]">
        Correo
      </p>

      <p className="mt-2 text-white/80">
        ventas@estosmonoscreativos.com
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Clock className="mt-1 h-6 w-6 text-[var(--color-yellow)] flex-shrink-0" />

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-yellow)]">
        Horario
      </p>

      <p className="mt-2 leading-7 text-white/80">
        Lunes a Viernes
        <br />
        8:30 AM – 6:00 PM
        <br />
        <br />
        Sábado
        <br />
        9:30 AM – 2:00 PM
      </p>
    </div>
  </div>
</div>

            <div className="mt-auto pt-12">
  <MagneticButton
    className="w-full justify-center"
    href="https://maps.google.com"
    target="_blank"
    rel="noopener noreferrer"
    size="lg"
    shine
  >
    Cómo llegar
  </MagneticButton>
</div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}