import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn Arabic Online - Ibn Ghazi Arabic Institute",
  description: "Study Arabic from anywhere in the world with live instruction via Zoom — the same rigorous curriculum as our on-site programs.",
}

const breadcrumbs = [
  { label: "Academics", href: "/academics" },
  { label: "Learn Arabic Online" },
]

const courses = [
  {
    title: "Modern Standard Arabic (MSA)",
    description: "Study the formal language of the Arab world, from beginner to advanced levels, through structured online lessons.",
  },
  {
    title: "Classical Arabic",
    description: "Learn the language of the Qur'an and master nahw, sarf, and balagha through live online instruction.",
  },
  {
    title: "Colloquial Moroccan Arabic (Darija)",
    description: "Master the everyday dialect of Morocco and communicate confidently with locals in real-world situations.",
  },
  {
    title: "Media Arabic",
    description: "Analyze news articles, broadcasts, and digital media from across the Arab world in a guided online setting.",
  },
  {
    title: "Tajweed",
    description: "Learn the rules of Quranic recitation including correct pronunciation, emission points, and proper articulation.",
  },
]

export default function OnlinePage() {
  return (
    <>
      <PageHero
        title="Learn Arabic Online"
        subtitle="Study Arabic from anywhere in the world with live instruction via Zoom — the same rigorous curriculum as our on-site programs."
        breadcrumbs={breadcrumbs}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2020/05/4582F41C-CF7A-4C6D-9916-A8FA0B889CE7-400x400.jpeg",
          alt: "Ibn Ghazi Arabic Institute",
        }}
        title="Study from Anywhere"
        description="While producing a comprehensive e-learning platform is a work in progress, and because a considerable number of potential students asked about the status of the summer program, we decided to offer our students the possibility to take online courses using Zoom. Prior to the beginning of the course, we work with our students to determine their specific needs in order to meet them in the best way possible. We offer both group and individual courses that meet our students' needs both in terms of time and content."
      />

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Courses Offered Online
            </h2>
            <p className="mt-4 text-text-light text-lg max-w-3xl mx-auto">
              We offer the same regular courses as our on-site program, delivered live by the same
              qualified instructors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.title} title={course.title} description={course.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-alt rounded-xl p-8">
              <h3 className="font-heading text-2xl font-bold text-text mb-4">
                Schedule
              </h3>
              <p className="text-text-light leading-relaxed">
                While time difference between Morocco and European countries is not an issue, we
                suggest the following schedule for our daily classes to accommodate our students from
                other countries:
              </p>
              <p className="mt-4 text-lg font-semibold text-primary">
                7 PM – 9 PM GMT
              </p>
              <p className="mt-2 text-text-light text-sm">
                If these dates do not fit your schedule, please contact us and we will make sure to
                accommodate your needs.
              </p>
            </div>
            <div className="bg-bg-alt rounded-xl p-8">
              <h3 className="font-heading text-2xl font-bold text-text mb-4">
                Tuition
              </h3>
              <p className="text-text-light leading-relaxed">
                The tuition for our online courses is the same as for our on-site programs. We offer
                both individual and group options to suit your preferences and budget.
              </p>
              <p className="mt-4 text-text-light">
                For more information on tuition for group applications or private tutoring, please
                contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Learning Online Today"
        subtitle="Wherever you are in the world, IGAI brings the richness of Arabic language and Moroccan culture to your screen. Enroll now."
      />
    </>
  )
}
