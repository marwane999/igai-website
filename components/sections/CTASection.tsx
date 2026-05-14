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
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-secondary" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, #C8A45C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C8A45C 0%, transparent 50%)",
      }} />

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
