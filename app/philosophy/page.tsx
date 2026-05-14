import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Our Philosophy",
}

const PHILOSOPHY_IMAGE = "https://www.igai-fez.com/wp-content/uploads/2018/12/our-philosophy-300x122.jpg"
const INSTITUTE_IMAGE = "https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg"

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        title="Our Teaching Philosophy"
        subtitle="A balanced, immersive approach to Arabic language mastery"
        bgImage={PHILOSOPHY_IMAGE}
        breadcrumbs={[
          { label: "Why Ibn Ghazi", href: "#" },
          { label: "Our Philosophy" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              A Balanced Approach to Arabic
            </h2>
            <p className="mt-4 text-text-light leading-relaxed text-lg">
              At IGAI, we believe that true language proficiency requires a balanced approach that integrates all four core language skills: grammar, speaking, listening, and writing. Our curriculum is carefully designed to develop each of these skills in tandem, ensuring that students not only understand the structure of Arabic but can also communicate confidently and effectively in real-world situations.
            </p>
            <p className="mt-4 text-text-light leading-relaxed text-lg">
              Our methodology emphasizes active communication from day one. Even beginners begin speaking Arabic in their first class, building confidence alongside grammatical accuracy. We integrate Modern Standard Arabic for formal communication with exposure to Moroccan Darija for everyday interaction, giving students a comprehensive linguistic toolkit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <span className="text-2xl font-heading font-bold text-primary">1</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text">Grammar Foundations</h3>
              <p className="mt-3 text-text-light leading-relaxed">
                Systematic study of Arabic grammar (nahw) and morphology (sarf) provides the structural backbone for accurate expression. Our progressive approach moves from fundamental rules to advanced syntactic analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <span className="text-2xl font-heading font-bold text-primary">2</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text">Speaking & Listening</h3>
              <p className="mt-3 text-text-light leading-relaxed">
                Conversational practice is central to every lesson. Through pair work, group discussions, and presentations, students develop oral fluency while honing their listening comprehension through authentic audio and video materials.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <span className="text-2xl font-heading font-bold text-primary">3</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text">Reading & Writing</h3>
              <p className="mt-3 text-text-light leading-relaxed">
                Students engage with a wide range of texts — from newspaper articles to classical literature — building reading comprehension and analytical skills. Writing exercises progress from sentences to paragraphs to extended compositions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={INSTITUTE_IMAGE}
                alt="Small class sizes at IGAI"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
                Intensive Instruction, Individual Attention
              </h2>
              <p className="mt-4 text-text-light leading-relaxed text-lg">
                Our programs are designed for serious language acquisition. During the summer term, students receive four hours of daily instruction, while during fall, winter, and spring terms, classes run for three hours per day. This intensive schedule ensures rapid progress while allowing time for cultural exploration and self-study.
              </p>
              <p className="mt-4 text-text-light leading-relaxed text-lg">
                With a maximum of ten students per class, our small group setting ensures that every student receives personalized attention from their instructor. This low student-to-teacher ratio allows for tailored feedback, targeted error correction, and a supportive learning environment where questions are encouraged and individual needs are addressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Beyond the Classroom
            </h2>
            <p className="mt-4 text-text-light leading-relaxed text-lg">
              We believe that language learning extends far beyond the classroom walls. Our homestay program places students with local Moroccan families, providing round-the-clock immersion in Arabic and Darija. Cultural activities, guided tours of historic sites, and interaction with the local community are all integral components of the IGAI experience. This holistic approach ensures that students not only learn Arabic — they live it.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience Our Approach Firsthand"
        subtitle="Discover how our balanced teaching philosophy can accelerate your Arabic learning. Join us in Fez for an immersive educational experience."
        buttons={[
          { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
          { label: "Learn More", href: "/admissions/tuition", variant: "secondary" },
        ]}
      />
    </>
  )
}
