import Image from "next/image";

type PortfolioCardProps = {
  category: string;
  title: string;
  description: string;
  client: string;
  location: string;
  image: string;
  sizeClass: string;
  onClick: () => void;
};

export function PortfolioCard({
  category,
  title,
  description,
  client,
  location,
  image,
  sizeClass,
  onClick,
}: PortfolioCardProps) {

  return (
   <article
  onClick={onClick}
  title={`Ver proyecto: ${title}`}
  className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-transparent bg-neutral-900 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/30 hover:shadow-[0_20px_60px_rgba(250,204,21,0.18)] ${sizeClass}`}
>
      <Image
  src={image}
  alt={title}
  fill
  className="object-cover brightness-75 transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
/>

      {/* Overlay */}
      {/* Overlay Premium */}
{/* Overlay Premium */}
<div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/90 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black" />
      {/* Contenido */}
      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-10 p-6 transition-all duration-500 group-hover:translate-y-0">
        <span className="inline-flex rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-300">
          {category}
        </span>

        <h3 className="mt-3 text-3xl font-bold leading-tight text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-gray-300 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40">
  {description}
</p>

        <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
          <span>{client}</span>
          <span>{location}</span>
        </div>

        <div className="mt-6 flex items-center gap-2 text-yellow-400 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span className="text-sm font-semibold uppercase tracking-wider">
            Ver proyecto
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 12h15"
            />
          </svg>
        </div>
      </div>
    </article>
  );
}