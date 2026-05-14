"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
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
    <section className="py-16 lg:py-20 bg-bg-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-light">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border/40 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full px-6 py-4 lg:py-5 text-left transition-colors hover:bg-bg-alt/50"
              >
                <span className="font-medium text-text pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-text-light transition-transform duration-200",
                    openIndex === index && "rotate-180",
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
                      <p className="text-text-light text-sm leading-relaxed">
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
