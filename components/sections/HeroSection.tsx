"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/Button"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto lg:mx-0"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-4">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary text-sm font-medium px-4 py-1.5 rounded-full border border-primary/30">
              <ShieldCheck className="h-4 w-4" />
              Fulbright-Hays Group Project Abroad Partner
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance"
          >
            Master Arabic in Morocco&apos;s Cultural Heart —{" "}
            <span className="text-primary">Fez</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Join students from 30+ countries at Morocco&apos;s premier Arabic institute.
            Accredited programs, world-class instructors, and a 1,200-year scholarly tradition.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-4">
            <div className="inline-flex items-center gap-1.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-white/70 text-sm">4.9/5 — 200+ Student Reviews</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link href="/admissions/apply">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
            </Link>
            <Link href="/academics/classical-arabic">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 hover:text-white"
              >
                Explore Programs
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
