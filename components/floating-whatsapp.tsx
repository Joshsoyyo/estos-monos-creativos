"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  const phone = "524271021467";

  const message = encodeURIComponent(
    "Hola 👋\n\nVi su página web y me gustaría solicitar una cotización."
  );

  return (
    <Link
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[999] flex items-center"
    >
      <div className="floating-whatsapp flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(37,211,102,0.45)]">

        <FaWhatsapp
  size={34}
  className="transition-transform duration-300 group-hover:scale-110"
/>

      </div>

      <div className="ml-3 overflow-hidden whitespace-nowrap rounded-full border border-[var(--color-yellow)] bg-[var(--color-ink)] px-0 py-3 text-sm font-semibold text-white opacity-0 shadow-[0_8px_30px_rgba(255,196,0,0.15)] transition-all duration-300 group-hover:px-5 group-hover:opacity-100">
  Cotiza por WhatsApp
</div>
    </Link>
  );
}