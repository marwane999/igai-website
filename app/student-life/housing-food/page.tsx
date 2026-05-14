import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Housing & Food - Ibn Ghazi Arabic Institute",
  description: "Comfortable living and authentic Moroccan dining — right at your doorstep.",
}

export default function HousingFoodPage() {
  return (
    <>
      <PageHero
        title="Housing & Food"
        subtitle="Comfortable living and authentic Moroccan dining — right at your doorstep."
        breadcrumbs={[
          { label: "Student Life", href: "/student-life" },
          { label: "Housing & Food" },
        ]}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2014/02/room.jpg",
          alt: "Shared apartment in Fez",
        }}
        title="Option 1: Shared Apartments"
        description="Our fully furnished shared apartments offer a comfortable and independent living experience just a short walk from the institute. Each apartment comes with an equipped kitchen, shared living space, and high-speed internet."
      >
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            <span className="text-text-light"><strong>3,500 MAD/month</strong> — all-inclusive</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            <span className="text-text-light">Maximum <strong>4 students</strong> per apartment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            <span className="text-text-light">Fully furnished with equipped kitchen</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            <span className="text-text-light">Walking distance to the institute</span>
          </div>
        </div>
      </ImageTextBlock>

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
                Option 2: Homestay
              </h2>
              <p className="mt-4 text-text-light leading-relaxed text-lg">
                Live with a Moroccan family for a truly immersive cultural experience. Homestays include a private room, daily meals, and the opportunity to practice Darija in real-life settings. This is the preferred choice for students who want rapid language progress and deep cultural understanding.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span className="text-text-light"><strong>900–1,100 MAD/week</strong> — room + board</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span className="text-text-light">Private room with a host family</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span className="text-text-light">Daily meals included for full immersion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span className="text-text-light">Practice Darija and experience Moroccan hospitality</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card
                title="Cultural Immersion"
                description="Live, eat, and converse with a Moroccan family. Accelerate your language learning through daily interaction."
              />
              <Card
                title="All Meals Included"
                description="Traditional breakfast and dinner prepared by your host family. Experience authentic home-cooked Moroccan cuisine."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Food Service
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Enjoy delicious Moroccan cuisine freshly prepared at the institute.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Card
              title="Breakfast"
              description="Start your day with a traditional Moroccan breakfast including msemen, harcha, bread, olive oil, jam, and mint tea or coffee."
            >
              <div className="mt-4 inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-dark">
                25 MAD
              </div>
            </Card>
            <Card
              title="Lunch"
              description="Enjoy a hearty Moroccan lunch featuring dishes like couscous, tagine, rfissa, and seasonal salads with fresh local ingredients."
            >
              <div className="mt-4 inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-dark">
                50 MAD
              </div>
            </Card>
            <Card
              title="Dietary Accommodation"
              description="We accommodate vegetarian, vegan, and halal dietary requirements. Please inform us of any restrictions or allergies before your arrival."
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
