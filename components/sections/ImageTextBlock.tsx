"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { ReactNode } from "react"

interface ImageTextBlockProps {
  image: { src: string; alt: string }
  title: string
  description: string
  reversed?: boolean
  children?: ReactNode
}

export function ImageTextBlock({ image, title, description, reversed = false, children }: ImageTextBlockProps) {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-moroccan-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={reversed ? "lg:order-2" : ""}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={reversed ? "lg:order-1" : ""}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              {title}
            </h2>
            <p className="mt-4 text-text-light leading-relaxed text-lg">
              {description}
            </p>
            {children && <div className="mt-6">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
