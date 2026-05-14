"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, GraduationCap, University, Star } from "lucide-react"
import { PARTNER_LOGOS } from "@/lib/constants"

export function SocialProof() {
  return (
    <section className="relative py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-moroccan opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold">
            <span className="gold-text">Recognized &amp; Trusted Worldwide</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold/30" />
            <Star className="h-3 w-3 text-gold/40" />
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Our partnerships and affiliations reflect our commitment to academic excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            className="group relative p-6 lg:p-8 bg-white rounded-xl border border-border/40 text-center hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[10%] group-hover:right-[10%] transition-all duration-500" />
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
              <ShieldCheck className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-gold-dark transition-colors duration-300">
              Fulbright-Hays Partner
            </h3>
            <p className="text-sm text-stone group-hover:text-charcoal transition-colors duration-300">
              Recognized by the US Department of Education for the prestigious Group Projects Abroad program.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative p-6 lg:p-8 bg-white rounded-xl border border-border/40 text-center hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[10%] group-hover:right-[10%] transition-all duration-500" />
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
              <University className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-gold-dark transition-colors duration-300">
              University Partners
            </h3>
            <p className="text-sm text-stone group-hover:text-charcoal transition-colors duration-300">
              {PARTNER_LOGOS.slice(1).join(", ")} — top universities that trust IGAI for their students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group relative p-6 lg:p-8 bg-white rounded-xl border border-border/40 text-center sm:col-span-2 lg:col-span-1 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[10%] group-hover:right-[10%] transition-all duration-500" />
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
              <Award className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-gold-dark transition-colors duration-300">
              15+ Years of Excellence
            </h3>
            <p className="text-sm text-stone group-hover:text-charcoal transition-colors duration-300">
              Over a decade of providing world-class Arabic education with 1000+ alumni from 30+ countries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
