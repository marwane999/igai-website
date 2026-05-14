"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = TESTIMONIALS[current]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <section className="relative py-16 lg:py-20 bg-cream overflow-hidden">
      {/* Subtle Moroccan pattern background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent 48%, rgba(201,168,76,0.5) 50%, transparent 52%),
          repeating-linear-gradient(-45deg, transparent 48%, rgba(201,168,76,0.5) 50%, transparent 52%)
        `,
        backgroundSize: "40px 40px",
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold">
            <span className="gold-text">What Our Students Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold/30" />
            <Star className="h-3 w-3 text-gold/40" />
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Hear from our alumni about their experience at Ibn Ghazi Arabic Institute
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="relative min-h-[280px] lg:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-white rounded-xl border border-gold/20 p-8 lg:p-10 shadow-lg shadow-gold/5"
              >
                <Quote className="h-8 w-8 text-gold/30 mb-4" />
                <p className="text-charcoal text-base lg:text-lg leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1 mt-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="mt-4 border-t border-gold/10 pt-4">
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-stone">
                    {t.title}, {t.institution}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-gold" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2.5 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
