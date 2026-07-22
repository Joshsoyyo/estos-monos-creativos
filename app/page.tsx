import { Hero } from "@/components/hero";
import { FabricationSection } from "@/components/fabrication-section";

import { SiteNavbar } from "@/components/site-navbar";
import { TrustedBrands } from "@/components/trusted-brands";
import { Container, Section, SectionTitle } from "@/components/ui";
import { brands } from "@/data/brands";
import { LocationSection } from "@/components/location-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteNavbar />

      <main>
        <Hero />

        <Section className="border-t border-[var(--border-dark)] py-32 sm:py-36 lg:py-40">
          <Container>
            <SectionTitle
              align="center"
              eyebrow="Clientes"
              title="Empresas que han confiado en nosotros"
              description="Marcas, negocios y equipos que han llevado sus ideas a producción con Estos Monos Creativos."
            />

            <div className="mt-[4.5rem] sm:mt-20">
              <TrustedBrands brands={brands} />
            </div>
          </Container>
        </Section>

        <FabricationSection />

        <LocationSection />
        <Footer />
      </main>
      
    </>
  );
}
