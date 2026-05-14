"use client"

import { motion } from "framer-motion"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { Star } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  bgImage?: string
  breadcrumbs?: BreadcrumbItem[]
}

export function PageHero({ title, subtitle, bgImage, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {bgImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy-light/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      )}

      {/* Moroccan geometric overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(201,168,76,0.4) 35px, rgba(201,168,76,0.4) 36px),
          repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(201,168,76,0.4) 35px, rgba(201,168,76,0.4) 36px),
          repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(201,168,76,0.15) 50px, rgba(201,168,76,0.15) 51px)
        `,
      }} />

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-gold/20 rounded-tl-lg hidden md:block" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-gold/20 rounded-tr-lg hidden md:block" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-gold/20 rounded-bl-lg hidden md:block" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-gold/20 rounded-br-lg hidden md:block" />

      {/* Animated gold accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold via-gold-light to-gold to-transparent" style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 3s ease-in-out infinite",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/60 mb-4"
          >
            <Breadcrumbs items={breadcrumbs} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            <span className="gold-text">{title}</span>
          </h1>

          {/* Decorative star divider */}
          <div className="flex items-center gap-3 mt-4 mb-4">
            <div className="h-[1px] flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-gold/50" />
            <Star className="h-3 w-3 text-gold fill-gold/30" />
            <div className="h-[1px] flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
