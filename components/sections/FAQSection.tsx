"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about studying at Ibn Ghazi Arabic Institute",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-20 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold">
            <span className="gold-text">{title}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold/30" />
            <Star className="h-3 w-3 text-gold/40" />
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          {subtitle && (
            <p className="text-lg text-stone">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border/40 overflow-hidden transition-shadow duration-300 hover:shadow-md hover:shadow-gold/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full px-6 py-4 lg:py-5 text-left transition-colors hover:bg-gold/[0.02]"
              >
                <span className="font-medium text-charcoal pr-4 group-hover:text-gold-dark">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-stone transition-all duration-200",
                    openIndex === index && "rotate-180 text-gold",
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5">
                      <div className="w-8 h-[1px] bg-gold/30 mb-4" />
                      <p className="text-stone text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
