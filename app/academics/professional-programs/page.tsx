import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional & Group Programs - Ibn Ghazi Arabic Institute",
  description: "Customised Arabic programs for diplomats, corporate teams, and organisations — flexible, intensive, and immersive.",
}

const breadcrumbs = [
  { label: "Academics", href: "/academics" },
  { label: "Professional & Group Programs" },
]

const features = [
  {
    title: "Customised Curriculum",
    description:
      "Tailored packages designed to meet the specific needs of diplomats, corporate professionals, and other sectors. Focus on the skills and content most relevant to your work.",
  },
  {
    title: "Flexible Timing",
    description:
      "Programs can be arranged anytime throughout the year and do not have to be bound to our regular academic calendar. You choose the schedule that works for you.",
  },
  {
    title: "Expert Instructors",
    description:
      "Our instructors bring diverse backgrounds and areas of expertise, allowing us to design a program that precisely matches your learning objectives.",
  },
  {
    title: "Cultural Immersion",
    description:
      "Combine language learning with cultural activities, excursions, and authentic Moroccan experiences for a truly holistic educational journey.",
  },
]

export default function ProfessionalProgramsPage() {
  return (
    <>
      <PageHero
        title="Professional & Group Programs"
        subtitle="Customised Arabic programs for diplomats, corporate teams, and organisations — flexible, intensive, and immersive."
        bgImage="https://www.igai-fez.com/wp-content/uploads/2018/12/GROUP-PROGRAMS-1024x765.jpg"
        breadcrumbs={breadcrumbs}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/GROUP-PROGRAMS-1024x765.jpg",
          alt: "Professional and group programs",
        }}
        title="Tailored to Your Needs"
        description="While the main purpose of our academic program is to complement university curricula abroad, we understand that the pace and content of our regular program may not meet every learner's needs. Thanks to the different backgrounds and areas of expertise of our instructors, we can customise a package to meet the needs of students from the diplomatic or corporate world as well as other sectors. Such a package is also customisable in terms of time and can be arranged anytime."
      />

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Why Choose Our Professional Programs?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/GROUP-PROGRAMS-1024x765.jpg",
          alt: "Group tourism and study",
        }}
        title="Group Programs: Study & Tourism"
        description="We are also open to group programs that aim at blending studies and tourism in one hybrid package. Because of its rich history and cultural heritage as well as its very secure environment, Morocco remains a strong candidate for such programs in the MENA region. Whether you are a governmental or non-governmental organisation aiming to give your employees the opportunity to discover one of the most fascinating cultures in the world, Ibn Ghazi Arabic Institute can help you plan your trip. We add an educational touch that allows your group members to return home with a basic knowledge of Arabic and a deep appreciation for Moroccan culture."
        reversed
      />

      <CTASection
        title="Design Your Program"
        subtitle="Contact us to discuss your specific needs and we will create a customised Arabic program for your organisation or group."
      />
    </>
  )
}
