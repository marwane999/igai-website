"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_ITEMS, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants"
import { Button } from "@/components/ui/Button"
import { MobileMenu } from "@/components/layout/MobileMenu"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-full">
                <Image
                  src="https://www.igai-fez.com/wp-content/uploads/2020/05/A026E7A3-784D-42C5-B31B-58523ABF7D6F.png"
                  alt={SITE_NAME}
                  fill
                  className="object-cover"
                />
              </div>
              <span
                className={cn(
                  "font-heading text-lg lg:text-xl font-bold transition-colors",
                  scrolled ? "text-charcoal" : "text-white",
                )}
              >
                Ibn Ghazi
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      scrolled
                        ? "text-charcoal hover:text-gold hover:bg-cream-dark"
                        : "text-white/90 hover:text-white hover:bg-white/10",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  {openDropdown === item.label && item.submenu && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-border/50 py-2 z-50">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-charcoal hover:text-gold hover:bg-cream-dark transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/212679245392`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors",
                  scrolled
                    ? "text-stone hover:text-gold hover:bg-cream-dark"
                    : "text-white/80 hover:text-white hover:bg-white/10",
                )}
                aria-label="Contact via WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <Link href="/admissions/apply">
                <Button variant="primary" size="sm">
                  Apply Now
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-charcoal" : "text-white",
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
