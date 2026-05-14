"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { STATS } from "@/lib/constants"

function CountUp({ end, suffix = "", duration = 2000 }: { end: string; suffix?: string; duration?: number }) {
  const numericEnd = parseInt(end.replace(/\D/g, ""))
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    const startTime = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * numericEnd))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, numericEnd, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="relative bg-navy py-16 lg:py-20 overflow-hidden">
      {/* Gold bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      {/* Geometric overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent 48%, rgba(201,168,76,0.5) 50%, transparent 52%),
          repeating-linear-gradient(-45deg, transparent 48%, rgba(201,168,76,0.5) 50%, transparent 52%)
        `,
        backgroundSize: "30px 30px",
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl lg:text-5xl font-bold gold-text mb-2">
                <CountUp end={stat.value} />
              </div>
              <p className="text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
