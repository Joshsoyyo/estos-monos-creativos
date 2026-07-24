"use client";

import { useState } from "react";
import { PortfolioModal } from "@/components/portfolio-modal";
import { portfolio } from "@/data/portfolio";
import { PortfolioCard } from "@/components/portfolio-card";

type PortfolioGalleryProps = {
  activeFilter: string;
};

export function PortfolioGallery({
  activeFilter,
}: PortfolioGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolio)[number] | null
  >(null);

  const filteredPortfolio =
    activeFilter === "Todos"
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  return (
    <>
      <section className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredPortfolio.map((item) => {
          const sizeClass =
            item.size === "large"
              ? "lg:col-span-2 lg:row-span-2"
              : item.size === "wide"
              ? "lg:col-span-2"
              : "";

          return (
  <PortfolioCard
    key={item.id}
    category={item.category}
    title={item.title}
    description={item.description}
    client={item.client}
    location={item.location}
    image={item.image}
    sizeClass={sizeClass}
    onClick={() => setSelectedProject(item)}
  />
);
        })}
      </section>

      <PortfolioModal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}