import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

type SectionTitleProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
};

const alignment = {
  left: "items-start text-left",
  center: "mx-auto items-center text-center",
  right: "ml-auto items-end text-right",
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("flex max-w-3xl flex-col", alignment[align], className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <Title className="mt-7 max-w-3xl text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.2]">{title}</Title>
      {description ? (
        <Subtitle className={cn("mt-6", align === "center" && "mx-auto")}>
          {description}
        </Subtitle>
      ) : null}
    </div>
  );
}
