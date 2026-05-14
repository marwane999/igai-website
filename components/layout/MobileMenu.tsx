"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { NAV_ITEMS } from "@/lib/constants"
import { Button } from "@/components/ui/Button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 bg-bg-dark flex flex-col"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <span className="text-lg font-heading text-text-on-dark">Menu</span>
            <button onClick={onClose} className="text-text-on-dark hover:text-primary transition-colors" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="flex items-center justify-between w-full py-3 text-text-on-dark hover:text-primary transition-colors text-lg font-medium"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expandedIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 border-l-2 border-primary/30 space-y-1"
                          >
                            {item.submenu.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={onClose}
                                  className="block py-2 text-text-light hover:text-primary transition-colors text-base"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 text-text-on-dark hover:text-primary transition-colors text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 py-6 border-t border-white/10 space-y-3">
            <Link href="/admissions/apply" onClick={onClose} className="block">
              <Button variant="primary" size="lg" className="w-full">
                Apply Now
              </Button>
            </Link>
            <Link
              href="https://wa.me/212679245392"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm text-text-light hover:text-primary transition-colors"
            >
              WhatsApp: +212 679-245392
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
