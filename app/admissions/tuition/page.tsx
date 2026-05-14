import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tuition & Fees - Ibn Ghazi Arabic Institute",
  description: "Affordable, transparent pricing for Arabic programs with no hidden fees.",
}

export default function TuitionPage() {
  return (
    <>
      <PageHero
        title="Tuition & Fees"
        subtitle="Affordable, transparent pricing with no hidden fees"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Tuition & Fees" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text mb-8">
              Core Program Tuition (Classical Arabic + MSA)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-4 px-4 font-heading text-lg font-semibold text-text">Term</th>
                    <th className="py-4 px-4 font-heading text-lg font-semibold text-text text-center">Single</th>
                    <th className="py-4 px-4 font-heading text-lg font-semibold text-text text-center">Duos</th>
                    <th className="py-4 px-4 font-heading text-lg font-semibold text-text text-center">Group (3–6)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr className="hover:bg-bg-alt/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-text">One Term (Fall / Winter / Spring)</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">16,200 MAD</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">13,500 MAD</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">9,800 MAD</td>
                  </tr>
                  <tr className="hover:bg-bg-alt/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-text">Summer Intensive (5 weeks)</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">10,800 MAD</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">8,700 MAD</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">6,500 MAD</td>
                  </tr>
                  <tr className="hover:bg-bg-alt/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-text">Multiple Terms</td>
                    <td className="py-4 px-4 text-center text-text-light" colSpan={3}>
                      Discounted rates available — contact us for a custom quote
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text mb-8">
              Private Tutoring (Hourly Rates)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-4 px-4 font-heading text-lg font-semibold text-text">Hours</th>
                    <th className="py-4 px-4 font-heading text-lg font-semibold text-text text-center">Single</th>
                    <th className="py-4 px-4 font-heading text-lg font-semibold text-text text-center">Duos</th>
                    <th className="py-4 px-4 font-heading text-lg font-semibold text-text text-center">Group (3–6)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr className="hover:bg-bg-alt/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-text">Fewer than 10 hours</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">250 MAD / hr</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">200 MAD / hr</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">130 MAD / hr</td>
                  </tr>
                  <tr className="hover:bg-bg-alt/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-text">10–20 hours</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">200 MAD / hr</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">160 MAD / hr</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">100 MAD / hr</td>
                  </tr>
                  <tr className="hover:bg-bg-alt/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-text">More than 20 hours</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">150 MAD / hr</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">120 MAD / hr</td>
                    <td className="py-4 px-4 text-center font-semibold text-text">80 MAD / hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white border border-border/40 p-6">
              <h3 className="font-heading text-lg font-bold text-text mb-2">No Registration Fee</h3>
              <p className="text-text-light text-sm leading-relaxed">
                We do not charge any application or registration fee. The tuition listed is the
                total cost — no surprises.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-border/40 p-6">
              <h3 className="font-heading text-lg font-bold text-text mb-2">No Deposit Required</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Secure your spot without a deposit. Payment is due before the term start date.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-border/40 p-6">
              <h3 className="font-heading text-lg font-bold text-text mb-2">20% Alumni Discount</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Former IGAI students receive a 20% discount on all future enrollments.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-bg-alt border border-border/40 p-6 lg:p-8">
            <h3 className="font-heading text-xl font-bold text-text mb-3">Currency Exchange Reference</h3>
            <p className="text-text-light leading-relaxed">
              All prices are listed in Moroccan Dirhams (MAD). As a reference, 1 USD ≈ 10 MAD,
              1 EUR ≈ 11 MAD. Please check current exchange rates at the time of payment. We
              accept bank transfers and major credit cards.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Apply Now and Start Your Journey"
        subtitle="Invest in your Arabic education with one of the most affordable quality programs available."
        buttons={[
          { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  )
}
