"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star } from "lucide-react"
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
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />

      {/* Animated zellij geometric overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          repeating-conic-gradient(rgba(201,168,76,0.6) 0% 25%, transparent 0% 50%)
        `,
        backgroundSize: "50px 50px",
        animation: "zellij-rotate 40s linear infinite",
      }} />

      {/* Secondary grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(201,168,76,0.4) 30px, rgba(201,168,76,0.4) 31px),
          repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(201,168,76,0.4) 30px, rgba(201,168,76,0.4) 31px)
        `,
      }} />

      {/* Decorative floating diamonds */}
      <div className="absolute top-10 right-10 w-12 h-12 border border-gold/20 rotate-45 opacity-20 hidden md:block animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border border-gold/15 rotate-45 opacity-15 hidden md:block animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Top and bottom gold bars */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold via-gold-light to-gold to-transparent" style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 3s ease-in-out infinite",
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold via-gold-light to-gold to-transparent" style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 3s ease-in-out infinite",
        animationDelay: "1.5s",
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative stars above title */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="h-3 w-3 text-gold/40 fill-gold/20" />
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
            <Star className="h-4 w-4 text-gold fill-gold/30" />
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
            <Star className="h-3 w-3 text-gold/40 fill-gold/20" />
          </div>

          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-balance">
            <span className="gold-text">{title}</span>
          </h2>

          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((btn) => (
              <Link key={btn.label} href={btn.href}>
                <Button
                  variant={btn.variant === "secondary" ? "ghost" : btn.variant}
                  size="lg"
                  className={
                    btn.variant === "secondary" || btn.variant === "ghost"
                      ? "text-white border-white/40 hover:bg-white/10 hover:text-white glass-gold"
                      : "text-base px-10 py-4 font-semibold"
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
