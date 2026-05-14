import { cn } from "@/lib/utils"
import Image from "next/image"
import type { ReactNode } from "react"

interface CardProps {
  className?: string
  image?: { src: string; alt: string }
  title?: string
  description?: string
  children?: ReactNode
  goldTitle?: boolean
}

export function Card({ className, image, title, description, children, goldTitle }: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl bg-white shadow-sm border border-border/40 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/40 hover:-translate-y-1",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-gold/[0.02] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 before:pointer-events-none hover:before:opacity-100",
        "after:absolute after:top-0 after:left-[15%] after:right-[15%] after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-gold after:to-transparent after:opacity-0 after:transition-all after:duration-500 after:pointer-events-none hover:after:opacity-100 hover:after:left-[5%] hover:after:right-[5%]",
        className,
      )}
    >
      {/* Subtle Moroccan pattern on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 48%, rgba(201, 168, 76, 0.03) 50%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(201, 168, 76, 0.03) 50%, transparent 52%)
        `,
        backgroundSize: "20px 20px",
      }} />

      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      <div className="relative p-6 z-10">
        {title && (
          <h3 className={cn(
            "font-heading text-xl font-semibold mb-2 transition-colors duration-300",
            goldTitle ? "gold-text" : "text-charcoal group-hover:text-gold-dark",
          )}>
            {title}
          </h3>
        )}
        {description && <p className="text-stone text-sm leading-relaxed group-hover:text-charcoal transition-colors duration-300">{description}</p>}
        {children}
      </div>
    </div>
  )
}
