"use client"

import { motion } from "framer-motion"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-secondary" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <div className="text-white/70">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
