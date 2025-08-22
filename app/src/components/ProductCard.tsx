import { FC } from 'react'
import Image from 'next/image'

export interface ProductCardProps {
  title: string
  subtitle?: string
  description: string
  highlights: {
    title: string
    description: string
  }[]
  ctaLabel: string
  ctaHref: string
  mediaType: 'image' | 'video'
  mediaSrc: string
}

const ProductCard: FC<ProductCardProps> = ({
  title,
  subtitle,
  description,
  highlights,
  ctaLabel,
  ctaHref,
  mediaType,
  mediaSrc,
}) => {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        {/* Fondo decorativo */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="bg-pattern"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#bg-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>

        {/* Layout responsivo */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:px-8 lg:py-40">
          {/* Columna izquierda (texto) */}
          <div className="max-w-2xl">
            {subtitle && (
              <h2 className="text-2xl font-medium text-indigo-600">{subtitle}</h2>
            )}
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl">
              {description}
            </p>
            <ul className="mt-6 space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx}>
                  <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                {ctaLabel}
              </a>
            </div>
          </div>

          {/* Columna derecha (media) */}
          <div className="mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <svg
              role="img"
              viewBox="0 0 366 729"
              className="mx-auto w-80 max-w-full drop-shadow-xl"
            >
              <title>Media mockup</title>
              <defs>
                <clipPath id="mockup-clip">
                  <rect rx={36} width={316} height={684} />
                </clipPath>
              </defs>
              <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68..."
                fill="#4B5563"
              />
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615..."
                fill="#343E4E"
              />
              <foreignObject
                width={316}
                height={684}
                clipPath="url(#mockup-clip)"
                transform="translate(24 24)"
              >
                {mediaType === 'image' ? (
                  <Image
                    width={316}
                    height={684}
                    src={mediaSrc}
                    alt="Mockup content"
                    className="h-full w-full object-cover"
                  />
                ) : mediaType === 'video' ? (
                  <video
                    src={mediaSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
