import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Academic Calendar - Ibn Ghazi Arabic Institute",
  description: "Plan your Arabic studies at IGAI with our structured term schedule for 2025–2026.",
}

const terms = [
  { name: "Fall 2025", dates: "September 1 – November 28, 2025", hours: "180", daily: "3 hours/day" },
  { name: "Winter 2026", dates: "January 6 – March 28, 2026", hours: "180", daily: "3 hours/day" },
  { name: "Spring 2026", dates: "April 7 – June 27, 2026", hours: "180", daily: "3 hours/day" },
  { name: "Summer 2026", dates: "July 7 – August 8, 2026", hours: "100", daily: "4 hours/day (Intensive)" },
]

export default function AcademicCalendarPage() {
  return (
    <>
      <PageHero
        title="Academic Calendar 2025–2026"
        subtitle="Plan your Arabic studies at IGAI with our structured term schedule"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Academic Calendar" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {terms.map((term) => (
              <div
                key={term.name}
                className="rounded-xl bg-white border border-border/40 p-6 hover:shadow-md hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-bold text-text mb-3">{term.name}</h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="text-text-light text-xs uppercase tracking-wider">Dates</dt>
                    <dd className="text-text font-medium">{term.dates}</dd>
                  </div>
                  <div>
                    <dt className="text-text-light text-xs uppercase tracking-wider">Total Hours</dt>
                    <dd className="text-text font-medium">{term.hours}h</dd>
                  </div>
                  <div>
                    <dt className="text-text-light text-xs uppercase tracking-wider">Schedule</dt>
                    <dd className="text-text font-medium">{term.daily}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-8">
            <div className="prose prose-text max-w-none">
              <h2 className="font-heading text-2xl font-bold text-text mb-4">Term Details</h2>
              <p className="text-text-light leading-relaxed">
                Fall, Winter, and Spring terms run at <strong>3 hours per day</strong>, providing a
                total of <strong>180 contact hours</strong> per term. The Summer term is an
                intensive program at <strong>4 hours per day (Monday–Friday)</strong>, offering{" "}
                <strong>100 contact hours</strong> in just five weeks.
              </p>
            </div>

            <div className="rounded-xl bg-bg-alt border border-border/40 p-6 lg:p-8">
              <h3 className="font-heading text-xl font-bold text-text mb-3">Flexible Attendance</h3>
              <p className="text-text-light leading-relaxed">
                We understand that not everyone can commit to a full term. A minimum of{" "}
                <strong>2 weeks</strong> attendance is possible, and we offer{" "}
                <strong>flexible start dates</strong> for students who cannot begin at the official
                term start.
              </p>
            </div>

            <div className="rounded-xl bg-secondary/5 border border-secondary/20 p-6 lg:p-8">
              <h3 className="font-heading text-xl font-bold text-text mb-3">Important Note</h3>
              <p className="text-text-light leading-relaxed">
                This calendar applies to the <strong>core program only</strong> (Classical Arabic +
                Modern Standard Arabic). Private tutoring sessions are scheduled year-round on
                demand and are not bound by the academic term calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Arabic Journey?"
        subtitle="Apply today and join students from 30+ countries at our Fez campus."
        buttons={[
          { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  )
}
