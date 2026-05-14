"use client"

import Link from "next/link"
import Image from "next/image"
import { Youtube, Facebook, ArrowUp, Mail, MapPin, Phone, Clock } from "lucide-react"
import { SITE_NAME, CONTACT, SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-bg-dark text-text-on-dark">
      {/* Top gold accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src="https://www.igai-fez.com/wp-content/uploads/2020/05/A026E7A3-784D-42C5-B31B-58523ABF7D6F.png"
                  alt={SITE_NAME}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-heading text-xl font-bold">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-text-on-dark/70 leading-relaxed max-w-xs">
              Master Arabic in Morocco&apos;s cultural heart — Fez. Fulbright-Hays partnered institute with 15+ years of academic excellence.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/philosophy" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Our Philosophy</Link></li>
              <li><Link href="/team" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/global-platform" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Global Platform</Link></li>
              <li><Link href="/fulbright-hays" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Fulbright-Hays</Link></li>
              <li><Link href="/contact" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-5">Academics</h3>
            <ul className="space-y-3">
              <li><Link href="/academics/classical-arabic" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Classical Arabic</Link></li>
              <li><Link href="/academics/modern-standard-arabic" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Modern Standard Arabic</Link></li>
               <li><Link href="/academics/darija" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Colloquial Moroccan Arabic</Link></li>
              <li><Link href="/academics/professional-programs" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Professional Programs</Link></li>
              <li><Link href="/academics/other-courses" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Other Courses</Link></li>
               <li><Link href="/academics/online" className="text-sm text-text-on-dark/70 hover:text-primary transition-colors">Learn Arabic Online</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-text-on-dark/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-on-dark/70">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-primary transition-colors">{CONTACT.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-on-dark/70">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-on-dark/70">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-on-dark/50">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-text-on-dark/50 hover:text-primary transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
