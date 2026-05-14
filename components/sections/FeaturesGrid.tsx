"use client"

import { motion } from "framer-motion"
import { BookOpen, MapPin, GraduationCap, Award, Globe, Banknote, Star, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  MapPin,
  GraduationCap,
  Award,
  Globe,
  Banknote,
}

interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface FeaturesGridProps {
  features: FeatureItem[]
  title?: string
  subtitle?: string
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FeaturesGrid({ features, title, subtitle }: FeaturesGridProps) {
  const IconComponent = (iconName: string) => iconMap[iconName] || BookOpen

  return (
    <section className="relative py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">
                <span className="gold-text">{title}</span>
              </h2>
            )}
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mt-4 mb-4">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold/30" />
              <Star className="h-3 w-3 text-gold/40" />
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
            {subtitle && (
              <p className="text-lg text-stone max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = IconComponent(feature.icon)
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className="group relative p-6 lg:p-8 rounded-xl bg-white border border-border/40 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[10%] group-hover:right-[10%] transition-all duration-500" />
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 group-hover:text-gold-dark transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
