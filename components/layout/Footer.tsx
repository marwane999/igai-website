"use client"

import Link from "next/link"
import Image from "next/image"
import { Youtube, Facebook, ArrowUp, Mail, MapPin, Phone, Clock, Star } from "lucide-react"
import { SITE_NAME, CONTACT, SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-navy text-white">
      {/* Ornate decorative top border */}
      <div className="relative h-12 overflow-hidden bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
        <div className="absolute inset-0 flex items-center justify-center gap-4 text-navy">
          <Star className="h-3 w-3 fill-current" />
          <div className="h-[1px] w-12 bg-navy/30" />
          <Star className="h-4 w-4 fill-current" />
          <div className="h-[1px] w-12 bg-navy/30" />
          <Star className="h-3 w-3 fill-current" />
          <div className="h-[1px] w-12 bg-navy/30" />
          <Star className="h-4 w-4 fill-current" />
          <div className="h-[1px] w-12 bg-navy/30" />
          <Star className="h-3 w-3 fill-current" />
        </div>
      </div>

      {/* Moroccan geometric top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-light to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full ring-2 ring-gold/30">
                <Image
                  src="https://www.igai-fez.com/wp-content/uploads/2020/05/A026E7A3-784D-42C5-B31B-58523ABF7D6F.png"
                  alt={SITE_NAME}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white">Ibn Ghazi</span>
                <span className="block text-[10px] text-gold-light tracking-widest uppercase">Arabic Institute</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Since 2008, Ibn Ghazi Arabic Institute has been the premier destination for Arabic language acquisition in the historic city of Fez, Morocco. A Fulbright-Hays partnered institute with a legacy of academic excellence.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-gold/20 hover:text-gold transition-all duration-300 border border-white/5 hover:border-gold/30"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-gold/20 hover:text-gold transition-all duration-300 border border-white/5 hover:border-gold/30"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold-light mb-5 flex items-center gap-2">
              <div className="w-6 h-[1px] bg-gold/50" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Philosophy", href: "/philosophy" },
                { label: "Our Team", href: "/team" },
                { label: "Global Platform", href: "/global-platform" },
                { label: "Fulbright-Hays", href: "/fulbright-hays" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group/link text-sm text-white/60 hover:text-gold-light transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-0 group-hover/link:w-2 h-[1px] bg-gold/50 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold-light mb-5 flex items-center gap-2">
              <div className="w-6 h-[1px] bg-gold/50" />
              Academics
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Classical Arabic", href: "/academics/classical-arabic" },
                { label: "Modern Standard Arabic", href: "/academics/modern-standard-arabic" },
                { label: "Colloquial Moroccan Arabic", href: "/academics/darija" },
                { label: "Professional Programs", href: "/academics/professional-programs" },
                { label: "Other Courses", href: "/academics/other-courses" },
                { label: "Learn Arabic Online", href: "/academics/online" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group/link text-sm text-white/60 hover:text-gold-light transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-0 group-hover/link:w-2 h-[1px] bg-gold/50 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold-light mb-5 flex items-center gap-2">
              <div className="w-6 h-[1px] bg-gold/50" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-gold-light transition-colors">{CONTACT.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-light transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group/btn flex items-center gap-2 text-xs text-white/40 hover:text-gold transition-colors"
          >
            Back to top
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/20 group-hover/btn:border-gold/50 group-hover/btn:bg-gold/10 transition-all duration-300">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
