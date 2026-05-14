"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, ShieldCheck, GraduationCap, Users, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { STATS } from "@/lib/constants"

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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg')",
        }}
      />

      {/* Rich gradient overlay — warm gold to deep navy */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A2E]/95 via-[#0F1A2E]/75 to-[#1A2A4A]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2E]/60 via-transparent to-transparent" />

      {/* Animated zellij geometric overlay */}
      <div className="absolute inset-0 opacity-[0.06] animate-zellij-rotate" style={{
        backgroundImage: `
          repeating-conic-gradient(rgba(201,168,76,0.8) 0% 25%, transparent 0% 50%)
        `,
        backgroundSize: "60px 60px",
        animation: "zellij-rotate 30s linear infinite",
      }} />

      {/* Secondary geometric grid — subtle moving lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.5) 40px, rgba(201,168,76,0.5) 41px),
          repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,168,76,0.5) 40px, rgba(201,168,76,0.5) 41px),
          repeating-linear-gradient(45deg, transparent, transparent 56px, rgba(201,168,76,0.2) 56px, rgba(201,168,76,0.2) 57px),
          repeating-linear-gradient(-45deg, transparent, transparent 56px, rgba(201,168,76,0.2) 56px, rgba(201,168,76,0.2) 57px)
        `,
        backgroundSize: "40px 40px, 40px 40px, 80px 80px, 80px 80px",
      }} />

      {/* Decorative floating geometric diamonds */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-gold/20 rotate-45 opacity-30 hidden lg:block animate-float-slow" />
      <div className="absolute top-40 right-20 w-10 h-10 border border-gold/15 rotate-45 opacity-20 hidden lg:block animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-gold/20 rotate-45 opacity-25 hidden lg:block animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gold/5 rotate-45 opacity-20 hidden lg:block animate-float" style={{ animationDelay: "0.5s" }} />

      {/* Decorative gold corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold/30 hidden lg:block rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-gold/30 hidden lg:block rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-gold/30 hidden lg:block rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold/30 hidden lg:block rounded-br-lg" />

      {/* Animated gold bar bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-gold via-gold-light to-gold to-transparent" style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 3s ease-in-out infinite",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto lg:mx-0"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-flex items-center gap-2 glass-gold text-gold-light text-sm font-medium px-5 py-2 rounded-full">
              <ShieldCheck className="h-4 w-4" />
              Fulbright-Hays Group Project Abroad Partner
            </span>
          </motion.div>

          {/* Main headline — gold gradient with shimmer */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance"
          >
            <span className="text-white">Master Arabic in</span>
            <br />
            <span className="gold-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Morocco&apos;s Cultural Heart
            </span>
            <br />
            <span className="text-white/90">— Fez</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Join students from 30+ countries at Morocco&apos;s premier Arabic institute.
            Accredited programs, world-class instructors, and a 1,200-year scholarly tradition.
          </motion.p>

          {/* Stars */}
          <motion.div variants={fadeUp} custom={3} className="mt-4">
            <div className="inline-flex items-center gap-1.5 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-white/60 text-sm">4.9/5 — 200+ Student Reviews</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link href="/admissions/apply">
              <Button variant="primary" size="lg" className="text-base px-10 py-4 font-semibold">
                Apply Now
              </Button>
            </Link>
            <Link href="/academics/classical-arabic">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 hover:text-white glass-gold text-base"
              >
                Explore Programs
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar — overlapping hero bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gold/20 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl md:text-3xl font-bold gold-text">{stat.value}</div>
                  <div className="text-xs md:text-sm text-stone mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
