import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { Clock, Calendar, User, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private Tutoring - Ibn Ghazi Arabic Institute",
  description: "Personalized one-on-one or small-group Arabic instruction, tailored to your schedule and goals.",
}

const features = [
  {
    icon: Calendar,
    title: "Year-Round, On Demand",
    description: "Schedule sessions whenever it works for you — evenings, weekends, or during breaks.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Daytime or evening sessions available to accommodate your time zone and commitments.",
  },
  {
    icon: User,
    title: "Customized Curriculum",
    description: "Lessons tailored to your goals, level, and pace — whether you need Classical Arabic, MSA, or Darija.",
  },
  {
    icon: Sparkles,
    title: "Intensive Focus",
    description: "Ideal for students who want accelerated progress or have specific research and professional needs.",
  },
]

export default function PrivateTutoringPage() {
  return (
    <>
      <PageHero
        title="Private Tutoring"
        subtitle="Personalized one-on-one or small-group Arabic instruction, tailored to your schedule and goals"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Private Tutoring" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text mb-6">
              Why Choose Private Tutoring?
            </h2>
            <p className="text-text-light leading-relaxed text-lg mb-12">
              Our private tutoring program is designed for students who have schedule conflicts
              with the core term calendar or who want a more intensive, focused learning
              experience. Whether you are a professional with limited availability, a researcher
              needing specialized vocabulary, or a learner who thrives with one-on-one attention,
              private tutoring at IGAI adapts to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex gap-5 p-6 rounded-xl bg-white border border-border/40 hover:shadow-md hover:border-primary/50 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text mb-2">{feature.title}</h3>
                    <p className="text-text-light text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="rounded-xl bg-bg-alt border border-border/40 p-6 lg:p-8">
            <h3 className="font-heading text-xl font-bold text-text mb-4">Pricing</h3>
            <p className="text-text-light leading-relaxed">
              Tutoring rates depend on the number of hours committed and group size (single, duos,
              or group). See our{" "}
              <a href="/admissions/tuition" className="text-primary hover:text-primary-dark underline">
                Tuition & Fees page
              </a>{" "}
              for detailed hourly rates.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in Private Tutoring?"
        subtitle="Contact us to discuss your goals and we will match you with the right instructor."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary" },
          { label: "View Tuition", href: "/admissions/tuition", variant: "secondary" },
        ]}
      />
    </>
  )
}
