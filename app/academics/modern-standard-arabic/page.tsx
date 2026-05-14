import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Standard Arabic (MSA) - Ibn Ghazi Arabic Institute",
  description: "The formal medium of communication across the Middle East and North Africa — and one of the six official languages of the United Nations.",
}

const breadcrumbs = [
  { label: "Academics", href: "/academics" },
  { label: "Modern Standard Arabic" },
]

const levels = [
  {
    title: "Beginning Level",
    description:
      "Master the Arabic script, pronunciation of alphabets, and basic grammatical structures while acquiring foundational vocabulary. Build the basics of the four key skills: listening, speaking, reading, and writing. Designed for students with little or no prior experience with Arabic.",
  },
  {
    title: "Intermediate Level",
    description:
      "Expand vocabulary and further develop all four language skills. Focus on more complex grammatical structures, reading texts from diverse sources, short writing assignments, and handling interactive social situations to facilitate conversations on relatively complex topics.",
  },
  {
    title: "Advanced Level",
    description:
      "Strengthen the ability to read and understand complex texts, enrich and refine vocabulary, expand knowledge of sentence construction, and polish communicative skills. Gain cultural knowledge about the Arab world in general and Morocco in particular.",
  },
]

const postAdvancedCourses = [
  {
    title: "Media Arabic",
    description: "Analyze news articles, broadcasts, and digital media from across the Arab world.",
  },
  {
    title: "Arabic Literature",
    description: "Study classical and modern literary works from poetry to the novel.",
  },
  {
    title: "History & Politics",
    description: "Explore historical narratives and political discourse in the MENA region.",
  },
  {
    title: "Culture & Religion",
    description: "Examine texts related to Arab culture, Islam, and intercultural dialogue.",
  },
]

export default function ModernStandardArabicPage() {
  return (
    <>
      <PageHero
        title="Modern Standard Arabic (MSA)"
        subtitle="The formal medium of communication across the Middle East and North Africa — and one of the six official languages of the United Nations."
        bgImage="https://www.igai-fez.com/wp-content/uploads/2018/12/MSA-1024x389.jpg"
        breadcrumbs={breadcrumbs}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/MSA-1024x389.jpg",
          alt: "Modern Standard Arabic",
        }}
        title="A Global Language"
        description="Modern Standard Arabic (MSA) is the formal medium of communication in the Middle East and North Africa and the official language of all countries in the region. MSA is also one of the six official languages of the United Nations. It remains crucial for those who plan to live or work in the Arab world, as well as professionals and researchers whose work relates to the MENA region."
      />

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Three Levels of Proficiency
            </h2>
            <p className="mt-4 text-text-light text-lg max-w-3xl mx-auto">
              Our MSA program is structured across three levels, each designed to build upon the last.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((level) => (
              <Card key={level.title} title={level.title} description={level.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Post-Advanced Courses
            </h2>
            <p className="mt-4 text-text-light text-lg max-w-3xl mx-auto">
              Ibn Ghazi Arabic Institute offers advanced students the opportunity to further develop
              their Arabic through specialised courses dealing with themes relevant to the Arab world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {postAdvancedCourses.map((course) => (
              <Card key={course.title} title={course.title} description={course.description} />
            ))}
          </div>
          <p className="mt-8 text-text-light text-center max-w-3xl mx-auto">
            Advanced students can also receive customised individual courses that meet their specific
            needs and objectives. Such post-advanced courses provide the necessary tools to
            understand Arab society and culture.
          </p>
        </div>
      </section>

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/MSA-1024x389.jpg",
          alt: "Al Kitab textbook",
        }}
        title="Curriculum & Textbooks"
        description="While we tend to focus on Al Kitab as the primary textbook, we incorporate other teaching materials to offer students the opportunity to discover and use a variety of useful resources. Our balanced approach ensures that students develop a comprehensive command of Modern Standard Arabic through reading, writing, speaking, and listening."
        reversed
      />

      <CTASection
        title="Master Modern Standard Arabic"
        subtitle="Whether you are a beginner or looking to refine your advanced skills, IGAI's MSA program will take you to the next level. Apply now."
      />
    </>
  )
}
