import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import { FileText, Clock, Bus, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Internships & Volunteering - Ibn Ghazi Arabic Institute",
  description: "Give back to the community while enhancing your Arabic skills through meaningful service-learning opportunities.",
}

export default function InternshipsVolunteeringPage() {
  return (
    <>
      <PageHero
        title="Internships & Volunteering"
        subtitle="Give back to the community while enhancing your Arabic skills through meaningful service-learning opportunities."
        breadcrumbs={[
          { label: "Student Life", href: "/student-life" },
          { label: "Internships & Volunteering" },
        ]}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/IMG_1865-300x225.jpg",
          alt: "Volunteering in Fez",
        }}
        title="Partner with Local NGOs"
        description="IGAI has established partnerships with reputable local NGOs in Fez, providing students with meaningful volunteer opportunities. These include orphanages, disability support centers, and women's shelters where your contribution can make a real difference while you practice Arabic in authentic community settings."
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-block text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium">
            Orphanages
          </span>
          <span className="inline-block text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium">
            Disability Centers
          </span>
          <span className="inline-block text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium">
            Women's Shelters
          </span>
        </div>
      </ImageTextBlock>

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text mb-2">1. Passport Copy</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Submit a clear copy of your valid passport identification page.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text mb-2">2. CV / Resume</h3>
              <p className="text-text-light text-sm leading-relaxed">
                A current curriculum vitae highlighting your skills, experience, and interests.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text mb-2">3. Statement of Purpose</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Write a brief statement explaining your motivation and what you hope to contribute.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text mb-2">Submit 2 Weeks Before</h3>
              <p className="text-text-light text-sm leading-relaxed">
                All documents must be submitted at least 2 weeks before your arrival in Fez.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="rounded-xl bg-white shadow-sm border border-border/40 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="h-6 w-6 text-primary-dark" />
                <h3 className="font-heading text-xl font-semibold text-text">Transportation</h3>
              </div>
              <p className="text-text-light leading-relaxed">
                Transportation costs to and from the volunteer site are the student's responsibility. Fez has an affordable and reliable public transportation system including taxis and buses. The institute can provide guidance on the best routes and estimated costs.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-amber-200 bg-amber-50/40 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <h3 className="font-heading text-xl font-semibold text-text">Disclaimer</h3>
              </div>
              <p className="text-text-light leading-relaxed">
                The Ibn Ghazi Arabic Institute does not sponsor or act as an agency for recruiting volunteers or interns. We facilitate connections with our trusted partner organizations. Students are responsible for their own conduct and compliance with local laws and NGO policies during their volunteer placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
