import { cn } from "@/lib/utils"
import Image from "next/image"
import type { ReactNode } from "react"

interface CardProps {
  className?: string
  image?: { src: string; alt: string }
  title?: string
  description?: string
  children?: ReactNode
}

export function Card({ className, image, title, description, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white shadow-sm border border-border/40 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50 group",
        className,
      )}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="font-heading text-xl font-semibold text-text mb-2">{title}</h3>}
        {description && <p className="text-text-light text-sm leading-relaxed">{description}</p>}
        {children}
      </div>
    </div>
  )
}
