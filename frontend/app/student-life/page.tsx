import { PageHero } from "@/components/sections/PageHero"
import { Card } from "@/components/ui/Card"
import { CTASection } from "@/components/sections/CTASection"
import Link from "next/link"
import { ArrowRight, Home, UtensilsCrossed, Shield, MapPin, Plane, Handshake } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Student Life - Ibn Ghazi Arabic Institute",
  description: "Your home away from home — experience the rich culture, safety, and hospitality of Fez, Morocco.",
}

const items = [
  {
    title: "Housing & Food",
    description: "Comfortable shared apartments and homestay options with authentic Moroccan cuisine.",
    href: "/student-life/housing-food",
    icon: Home,
  },
  {
    title: "Safety & Health",
    description: "24/7 staff support, doctor network, and a safe environment in peaceful Fez.",
    href: "/student-life/safety-health",
    icon: Shield,
  },
  {
    title: "Trips & Cultural Activities",
    description: "Excursions to Atlas Mountains, Sahara, Chefchaouen, and cultural workshops.",
    href: "/student-life/trips-activities",
    icon: MapPin,
  },
  {
    title: "Travel & Visa",
    description: "Flight booking guidance, airport pickup, and visa information for 70+ countries.",
    href: "/student-life/travel-visa",
    icon: Plane,
  },
  {
    title: "Internships & Volunteering",
    description: "Partner with local NGOs supporting orphanages, disability centers, and women's shelters.",
    href: "/student-life/internships-volunteering",
    icon: Handshake,
  },
  {
    title: "Food Service",
    description: "Breakfast and lunch service featuring traditional Moroccan dishes.",
    href: "/student-life/housing-food",
    icon: UtensilsCrossed,
  },
]

export default function StudentLifePage() {
  return (
    <>
      <PageHero
        title="Student Life"
        subtitle="Your home away from home — experience the rich culture, safety, and hospitality of Fez, Morocco."
        breadcrumbs={[{ label: "Student Life" }]}
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Everything You Need as a Student
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              From housing to cultural activities, we ensure your stay in Fez is comfortable, safe, and unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {items.map((item) => (
              <Link key={item.title} href={item.href}>
                <Card
                  title={item.title}
                  description={item.description}
                  className="h-full group cursor-pointer"
                >
                  <div className="flex items-center gap-2 mt-4 text-secondary font-medium text-sm group-hover:text-secondary-light transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
