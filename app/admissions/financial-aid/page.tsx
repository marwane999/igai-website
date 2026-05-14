import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { CheckCircle, FileText, Award, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Financial Aid & Scholarships - Ibn Ghazi Arabic Institute",
  description: "Merit-based partial to full tuition waivers for qualified students at Ibn Ghazi Arabic Institute.",
}

const requirements = [
  "Completion of 4 semesters of Modern Standard Arabic (or equivalent proficiency)",
  "Valid passport copy",
  "Updated curriculum vitae (CV) / résumé",
  "Academic transcripts from all post-secondary institutions attended",
  "Personal essay of 600–1,000 words explaining your academic goals and why you choose IGAI",
  "Two letters of recommendation, one of which must be from a current or former Arabic instructor",
]

export default function FinancialAidPage() {
  return (
    <>
      <PageHero
        title="Financial Aid & Scholarships"
        subtitle="Merit-based support to make quality Arabic education accessible"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Financial Aid" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text mb-6">
                Merit-Based Scholarships
              </h2>
              <div className="space-y-4">
                <p className="text-text-light leading-relaxed">
                  Ibn Ghazi Arabic Institute offers merit-based partial scholarships to academically
                  outstanding students. Awards range from partial tuition reduction up to a full
                  tuition waiver, depending on the strength of your application and available funding.
                </p>
                <p className="text-text-light leading-relaxed">
                  Scholarships are awarded competitively each term. We encourage all qualified
                  students to apply, regardless of nationality or background.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white border border-border/40 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <span className="block font-heading text-3xl font-bold text-text">Up to 100%</span>
                  <span className="text-text-light text-sm">Tuition waiver available</span>
                </div>
              </div>
              <p className="text-text-light text-sm leading-relaxed">
                Awards are merit-based and depend on the strength of your application, academic
                record, and available funding for the term.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text mb-8">
              Application Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((req, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border/40"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-text text-sm leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-secondary/5 border border-secondary/20 p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Application Deadline</h3>
              <p className="text-text-light leading-relaxed">
                Scholarship applications must be submitted at least <strong>4 weeks before</strong>{" "}
                the start of the term you wish to enroll in. Late applications will not be
                considered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Apply for Financial Aid"
        subtitle="Submit your scholarship application along with your admissions application."
        buttons={[
          { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  )
}
