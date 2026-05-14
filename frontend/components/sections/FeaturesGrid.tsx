"use client"

import { motion } from "framer-motion"
import { BookOpen, MapPin, GraduationCap, Award, Globe, Banknote, type LucideIcon } from "lucide-react"

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
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
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
                className="group p-6 lg:p-8 rounded-xl bg-white border border-border/40 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
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
