"use client"

import { motion } from "framer-motion"
import { PARTNER_LOGOS } from "@/lib/constants"

export function TrustBar() {
  return (
    <section className="py-12 lg:py-16 bg-bg-alt border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-text-light uppercase tracking-wider mb-8"
        >
          Trusted &amp; Featured By
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {PARTNER_LOGOS.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-text-light/60 font-heading text-lg lg:text-xl font-semibold hover:text-primary transition-colors"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
