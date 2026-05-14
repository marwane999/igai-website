"use client"

import { useState, type FormEvent } from "react"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { Button } from "@/components/ui/Button"
import { submitContact } from "@/lib/api"
import { MapPin, Phone, Mail, Clock, Youtube, Facebook, MessageCircle } from "lucide-react"
import Link from "next/link"
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function validate(): boolean {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = "Name is required"
    if (!form.email.trim()) errs.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address"
    if (!form.message.trim()) errs.message = "Message is required"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    const result = await submitContact({ name: form.name, email: form.email, subject: form.subject, message: form.message })
    if (result.success) {
      setStatus("success")
      setForm({ name: "", email: "", subject: "", message: "" })
    } else {
      setStatus("error")
    }
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions about our programs, admissions, or anything else."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text mb-8">Send Us a Message</h2>
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  Something went wrong. Please try again later or email us directly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full rounded-lg border ${errors.name ? "border-red-400" : "border-border"} bg-white px-4 py-2.5 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full rounded-lg border ${errors.email ? "border-red-400" : "border-border"} bg-white px-4 py-2.5 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full rounded-lg border ${errors.message ? "border-red-400" : "border-border"} bg-white px-4 py-2.5 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" isLoading={status === "loading"}>
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Address</h3>
                    <p className="text-text-light text-sm">Lot. Cite des Fleurs 3. Lot 6F. Rte Ain Chkef. Fes. 30050. Morocco</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Phone</h3>
                    <a href="tel:+212679245392" className="text-text-light text-sm hover:text-primary transition-colors">+212 (0) 679 24 53 92</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Email</h3>
                    <a href="mailto:igai.fez@gmail.com" className="text-text-light text-sm hover:text-primary transition-colors">igai.fez@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Office Hours</h3>
                    <p className="text-text-light text-sm">Mon–Fri: 08:00 – 18:00</p>
                    <p className="text-text-light text-sm">Sat: 10:00 – 13:00</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-text mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-100 transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/212679245392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/212679245392"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Chat with Us on WhatsApp
              </a>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border/40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9478744064547!2d-4.985991724236127!3d34.01543467342552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b4e5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sFez%2C%20Morocco!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IGAI Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
