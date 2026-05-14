import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Classical Arabic Program - Ibn Ghazi Arabic Institute",
  description: "Study the language of the Qur'an and master the foundations of Islamic scholarly tradition in the heart of Fez.",
}

const breadcrumbs = [
  { label: "Academics", href: "/academics" },
  { label: "Classical Arabic" },
]

const advancedTopics = [
  {
    title: "Tafsir",
    description: "Scriptural exegesis — learn the methodology of interpreting the Quran through classical and contemporary scholarly works.",
  },
  {
    title: "Fiqh",
    description: "Islamic jurisprudence — study the legal framework derived from primary sources, covering acts of worship and transactions.",
  },
  {
    title: "Hadith",
    description: "Prophetic narratives — examine the collection, classification, and analysis of the sayings and actions of the Prophet Muhammad.",
  },
  {
    title: "Islamic History",
    description: "Explore the rich history of Islamic civilisation, from the early caliphates through the medieval and modern periods.",
  },
]

export default function ClassicalArabicPage() {
  return (
    <>
      <PageHero
        title="Classical Arabic Program"
        subtitle="Study the language of the Qur'an and master the foundations of Islamic scholarly tradition in the heart of Fez."
        bgImage="https://www.igai-fez.com/wp-content/uploads/2018/12/CLASSICAL-ARABIC.jpg"
        breadcrumbs={breadcrumbs}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/CLASSICAL-ARABIC.jpg",
          alt: "Classical Arabic manuscripts",
        }}
        title="The Language of the Qur'an"
        description="Classical Arabic mainly refers to the language of the Qur'an and the texts that are guided by the Qur'an's form and content. The Classical Arabic Program aims at mastering classical Arabic in a gradual and progressive manner. The foundational phase focuses on the linguistic aspect which includes grammar (nahw), morphology (sarf), and rhetoric (balagha). At this level, students not only excel in reading and understanding classical texts, but they are also able to analyze, translate, and interpret them, developing the listening, reading, speaking, and writing skills necessary for the intermediate and advanced levels."
      />

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Intermediate & Advanced Studies
            </h2>
            <p className="mt-4 text-text-light text-lg max-w-3xl mx-auto">
              The intermediate and advanced levels move students from learning Arabic to using it as a
              tool to decipher classical and contemporary texts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedTopics.map((topic) => (
              <Card
                key={topic.title}
                title={topic.title}
                description={topic.description}
              />
            ))}
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/CLASSICAL-ARABIC.jpg",
          alt: "Arabic textbooks",
        }}
        title="Proven Curriculum"
        description="The books used in the advanced classical level are the same as those used by native speakers in Arab universities. This testifies to the advanced level a student at Ibn Ghazi Arabic Institute can achieve. Our curriculum is designed to take students from little or no prior knowledge of Arabic to an advanced level in approximately two years."
        reversed
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Rapid Progress
            </h2>
            <p className="mt-4 text-text-light text-lg leading-relaxed">
              With our intensive immersion approach, students with little or no prior knowledge of
              Arabic can reach an advanced level of classical Arabic in about two years. Our
              experienced instructors, small class sizes, and the immersive environment of Fez
              create the ideal conditions for accelerated language acquisition.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Classical Arabic Journey"
        subtitle="Join students from around the world who have mastered classical Arabic at IGAI. Apply today and begin your journey into the language of the Qur'an."
      />
    </>
  )
}
