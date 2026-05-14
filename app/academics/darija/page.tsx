import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Colloquial Moroccan Arabic (Darija) - Ibn Ghazi Arabic Institute",
  description: "Master the everyday language of Morocco and unlock a truly immersive cultural experience.",
}

const breadcrumbs = [
  { label: "Academics", href: "/academics" },
  { label: "Colloquial Moroccan Arabic (Darija)" },
]

const levels = [
  {
    title: "Beginning Level",
    description:
      "Put emphasis on speaking practice including commonly-used expressions and structures. Learn to communicate and ask for information, go shopping, dine in a restaurant, and greet locals in various everyday contexts.",
  },
  {
    title: "Intermediate Level",
    description:
      "Enhance speaking practice through more complex role-playing. Acquire more complex structures and concepts necessary for booking accommodation, arranging transportation, and providing your point of view on various topics.",
  },
  {
    title: "Advanced Level",
    description:
      "Build on the sound foundation from previous levels to increase confidence in interacting with Moroccans. Express opinions about different issues using advanced vocabulary and more complex structures in a range of contexts.",
  },
]

export default function DarijaPage() {
  return (
    <>
      <PageHero
        title="Colloquial Moroccan Arabic (Darija)"
        subtitle="Master the everyday language of Morocco and unlock a truly immersive cultural experience."
        bgImage="https://www.igai-fez.com/wp-content/uploads/2018/12/MOROCCAN-ARABIC-300x116.jpg"
        breadcrumbs={breadcrumbs}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/MOROCCAN-ARABIC-300x116.jpg",
          alt: "Moroccan Arabic",
        }}
        title="The Language of Daily Life"
        description="As is the case in all Arab countries, Moroccans do not use fusha (MSA) to communicate with each other in daily life. Fusha is mainly used in printed and spoken media as well as official documents. Morocco has its own dialect called darija. To make the most of your experience in Morocco, a background in darija remains crucial for students, professionals, and travelers alike. Living or working in any Arab country necessitates a good background of its dialect, as it contributes to speedy progress in language proficiency and cultural integration."
      />

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Three Levels of Darija
            </h2>
            <p className="mt-4 text-text-light text-lg max-w-3xl mx-auto">
              Similar to Modern Standard Arabic, our darija course is divided into three major levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((level) => (
              <Card key={level.title} title={level.title} description={level.description} />
            ))}
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/MOROCCAN-ARABIC-300x116.jpg",
          alt: "Darija textbook",
        }}
        title="Learning Materials"
        description="In addition to using 'A Basic Course in Moroccan Arabic' as the major textbook, we incorporate other materials such as the Peace Corp book on Moroccan Arabic. These resources are carefully selected to provide students with practical, real-world language skills that can be applied immediately in everyday situations."
        reversed
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Darija & Fusha: Complementary Skills
            </h2>
            <p className="mt-4 text-text-light text-lg leading-relaxed">
              It is worth noting that darija and fusha complement each other, and learning one does
              not, by any means, negatively affect the other. In fact, studying darija alongside
              fusha accelerates overall proficiency and deepens cultural understanding, enabling
              students to navigate both formal and informal settings with confidence.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Speak Darija with Confidence"
        subtitle="Immerse yourself in the real Morocco. Learn the dialect that opens doors to genuine connections and deeper cultural understanding."
      />
    </>
  )
}
