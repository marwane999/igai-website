import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { Calendar, UserCheck, Banknote, Award, FileText, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admissions - Ibn Ghazi Arabic Institute",
  description: "Everything you need to begin your Arabic studies at Ibn Ghazi Arabic Institute in Fez, Morocco.",
}

const admissionsPages = [
  {
    title: "Academic Calendar",
    description: "View our 2025–2026 term schedule including Fall, Winter, Spring, and Summer sessions.",
    href: "/admissions/academic-calendar",
    icon: Calendar,
  },
  {
    title: "Private Tutoring",
    description: "Personalized Arabic instruction on your schedule — year-round, on demand.",
    href: "/admissions/private-tutoring",
    icon: UserCheck,
  },
  {
    title: "Tuition & Fees",
    description: "Transparent pricing for core programs and private tutoring with no hidden fees.",
    href: "/admissions/tuition",
    icon: Banknote,
  },
  {
    title: "Financial Aid & Scholarships",
    description: "Merit-based partial to full tuition waivers for qualified students.",
    href: "/admissions/financial-aid",
    icon: Award,
  },
  {
    title: "Apply Now",
    description: "Ready to begin? Complete your application online to join IGAI.",
    href: "/admissions/apply",
    icon: FileText,
  },
]

export default function AdmissionsPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-secondary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Admissions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
            Everything you need to begin your Arabic studies at Ibn Ghazi Arabic Institute in Fez, Morocco.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionsPages.map((page) => {
              const Icon: LucideIcon = page.icon
              return (
                <Link key={page.href} href={page.href} className="group block">
                  <Card
                    title={page.title}
                    description={page.description}
                    className="h-full group-hover:border-primary transition-all duration-300"
                  >
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              )
            })}

          </div>
        </div>
      </section>
    </>
  )
}
