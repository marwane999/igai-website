"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

interface CTAButton {
  label: string
  href: string
  variant?: "primary" | "secondary" | "ghost"
}

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttons?: CTAButton[]
}

export function CTASection({
  title = "Ready to Begin Your Arabic Journey?",
  subtitle = "Join students from 30+ countries who have transformed their Arabic skills at IGAI. Apply today and start your immersion in Morocco's cultural heart.",
  buttons = [
    { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
    { label: "Contact Us", href: "/contact", variant: "secondary" },
  ],
}: CTASectionProps) {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#1E4A6E] to-secondary" />
      {/* Moroccan pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(201,168,76,0.4) 30px, rgba(201,168,76,0.4) 31px),
          repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(201,168,76,0.4) 30px, rgba(201,168,76,0.4) 31px),
          repeating-linear-gradient(45deg, transparent, transparent 42px, rgba(201,168,76,0.2) 42px, rgba(201,168,76,0.2) 43px)
        `,
      }} />

      {/* Top gold border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      {/* Bottom gold border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((btn) => (
              <Link key={btn.label} href={btn.href}>
                <Button
                  variant={btn.variant === "secondary" ? "ghost" : btn.variant}
                  size="lg"
                  className={
                    btn.variant === "secondary" || btn.variant === "ghost"
                      ? "text-white border-white/40 hover:bg-white/10 hover:text-white"
                      : ""
                  }
                >
                  {btn.label}
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
