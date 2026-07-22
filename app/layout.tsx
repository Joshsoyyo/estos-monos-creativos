import type { Metadata } from "next";
import "@/styles/globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Estos Monos Creativos",
  description: "Sitio web de Estos Monos Creativos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}