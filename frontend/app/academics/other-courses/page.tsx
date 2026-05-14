import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Other Courses - Ibn Ghazi Arabic Institute",
  description: "Supplementary programs in Tamazight, Tajweed, Calligraphy, and advanced Arabic modules to deepen your knowledge.",
}

const breadcrumbs = [
  { label: "Academics", href: "/academics" },
  { label: "Other Courses" },
]

const courses = [
  {
    title: "Tamazight (Berber)",
    image: {
      src: "https://www.igai-fez.com/wp-content/uploads/2018/12/TIFINAGH-296x300.gif",
      alt: "Tifinagh script",
    },
    description:
      "Tamazight, also known as Berber or Amazigh, belongs to the Afroasiatic language family and comprises a group of closely related dialects spoken by the indigenous people of North Africa. Written in the Tifinagh script, it is widely spoken in Morocco, Algeria, and Libya, and to a lesser extent in Tunisia, Mali, Niger, Burkina Faso, Mauritania, and the Siwa Oasis of Egypt. Our course takes students from the basics of Tifinagh to an advanced conversational level.",
  },
  {
    title: "Tajweed (Quranic Recitation)",
    image: {
      src: "https://www.igai-fez.com/wp-content/uploads/2018/12/TAJWEED-300x180.png",
      alt: "Tajweed",
    },
    description:
      "Tajweed literally means to make something beautiful and adorned. In the context of the Qur'an, it refers to recitation using correct pronunciation following well-established rules such as emission points (makhārij al-ḥurūf), prolongation, qalqalah, wasl, and wakf. This course aims at mastering these rules and applying them to chapters and verses from the Qur'an.",
  },
  {
    title: "Calligraphy",
    image: {
      src: "https://www.igai-fez.com/wp-content/uploads/2018/12/caligraphy-300x272.png",
      alt: "Arabic calligraphy",
    },
    description:
      "In addition to providing a historical overview of the origin and development of Islamic calligraphy, this course improves your Arabic script writing and allows you to master a specific style such as the Kufic or the distinctive Moroccan styles.",
  },
  {
    title: "Advanced Modules",
    image: {
      src: "https://www.igai-fez.com/wp-content/uploads/2018/12/ADVANCED-ARABIC.jpg",
      alt: "Advanced Arabic",
    },
    description:
      "Students at an advanced level who are interested in a deeper understanding of Arabic can take our advanced modules. These allow you to decipher and translate texts with historical, linguistic, literary, or religious aspects. Modules are customisable in terms of time and content to meet your specific learning goals.",
  },
]

export default function OtherCoursesPage() {
  return (
    <>
      <PageHero
        title="Other Courses"
        subtitle="Supplementary programs in Tamazight, Tajweed, Calligraphy, and advanced Arabic modules to deepen your knowledge."
        bgImage="https://www.igai-fez.com/wp-content/uploads/2018/12/ADVANCED-ARABIC.jpg"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Enrich Your Arabic Studies
            </h2>
            <p className="mt-4 text-text-light text-lg max-w-3xl mx-auto">
              In addition to our core academic program, we offer supplementary courses that allow
              students to explore related disciplines and deepen their understanding of Arabic
              language, culture, and heritage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card
                key={course.title}
                image={course.image}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Important Note
            </h2>
            <p className="mt-4 text-text-light text-lg leading-relaxed">
              These courses are subject to demand and require pre-arrangement. As interest in some
              of these subjects may vary, we do not maintain an established course calendar for all
              of them. Interested students should contact us for further information on availability,
              scheduling, and pricing.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Expand Your Learning"
        subtitle="Interested in one of these supplementary courses? Contact us to discuss availability and arrange a program tailored to your interests."
      />
    </>
  )
}
