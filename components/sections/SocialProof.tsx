"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, GraduationCap, University } from "lucide-react"
import { PARTNER_LOGOS } from "@/lib/constants"

export function SocialProof() {
  return (
    <section className="py-16 lg:py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
            Recognized &amp; Trusted Worldwide
          </h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Our partnerships and affiliations reflect our commitment to academic excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            className="p-6 lg:p-8 bg-white rounded-xl border border-border/40 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-text mb-2">
              Fulbright-Hays Partner
            </h3>
            <p className="text-sm text-text-light">
              Recognized by the US Department of Education for the prestigious Group Projects Abroad program.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 lg:p-8 bg-white rounded-xl border border-border/40 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <University className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-text mb-2">
              University Partners
            </h3>
            <p className="text-sm text-text-light">
              {PARTNER_LOGOS.slice(1).join(", ")} — top universities that trust IGAI for their students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 lg:p-8 bg-white rounded-xl border border-border/40 text-center sm:col-span-2 lg:col-span-1"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-text mb-2">
              15+ Years of Excellence
            </h3>
            <p className="text-sm text-text-light">
              Over a decade of providing world-class Arabic education with 1000+ alumni from 30+ countries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
