export type PortfolioCategory =
  | "Lonas"
  | "Vinil"
  | "Letras 3D"
  | "DTF"
  | "Rotulacion"
  | "Promocionales";

export type PortfolioSize = "small" | "large" | "wide";

export type PortfolioItem = {
  id: number;
  category: PortfolioCategory;
  title: string;
  description: string;
  image: string;
  client: string;
  location: string;
  size: PortfolioSize;
};
