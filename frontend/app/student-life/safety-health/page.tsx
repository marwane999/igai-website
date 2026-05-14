import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Shield, Phone, Stethoscope, Syringe, Wifi } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safety & Health - Ibn Ghazi Arabic Institute",
  description: "Your well-being is our priority. Fez is one of the safest and most welcoming cities for international students.",
}

export default function SafetyHealthPage() {
  return (
    <>
      <PageHero
        title="Safety & Health"
        subtitle="Your well-being is our priority. Fez is one of the safest and most welcoming cities for international students."
        breadcrumbs={[
          { label: "Student Life", href: "/student-life" },
          { label: "Safety & Health" },
        ]}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/SAFETY.jpg",
          alt: "Safe streets of Fez",
        }}
        title="A Safe Place to Study"
        description="Morocco is consistently ranked as one of the safest and most stable countries in the region. Fez, as a historic UNESCO city and major tourist destination, enjoys a very low crime rate and a welcoming atmosphere. Our institute is located in a peaceful residential neighborhood, and our staff are available 24/7 to support you."
      />

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Health & Wellness Support
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              We ensure you have access to quality healthcare and essential services throughout your stay.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-2">24/7 Staff Assistance</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Our team is available around the clock to assist with any emergencies, questions, or concerns during your stay in Fez.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-2">Doctor Network</h3>
              <p className="text-text-light text-sm leading-relaxed">
                We maintain a network of trusted local doctors and medical facilities who are experienced with international patients.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Syringe className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-2">Medical Preparation</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Bring your medical file and any personal medications. We recommend travel insurance and routine vaccinations before arrival.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-2">SIM Cards & Internet</h3>
              <p className="text-text-light text-sm leading-relaxed">
                SIM cards with data plans are readily available at the airport upon arrival. High-speed internet is available at the institute and in all student housing.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-2">Safe Environment</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Fez is a peaceful touristic city with a strong community feel. Our neighborhood is safe for walking during the day and evening hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-bg-alt rounded-xl p-8 lg:p-10 border border-border/40">
            <h3 className="font-heading text-2xl font-bold text-text mb-4">Travel Tips for Your Health & Safety</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-text-light">Keep a digital and physical copy of your passport and visa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-text-light">Purchase comprehensive travel and health insurance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-text-light">Bring a basic first-aid kit and any prescription medications with documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-text-light">Register with your country's embassy or consulate upon arrival</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-text-light">Share your accommodation address and emergency contacts with family back home</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
