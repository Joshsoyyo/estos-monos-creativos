import type { ReactNode } from "react";
import { Badge } from "./badge";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <Title className="mt-6 text-5xl sm:text-7xl">{title}</Title>
      {subtitle ? (
        <Subtitle className={isCenter ? "mx-auto mt-5" : "mt-5"}>{subtitle}</Subtitle>
      ) : null}
    </div>
  );
}
