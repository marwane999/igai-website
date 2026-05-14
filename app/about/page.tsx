import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "About",
}

const INSTITUTE_IMAGE = "https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg"

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Ibn Ghazi Arabic Institute"
        subtitle="Discover the leading center for Arabic language studies in the heart of Fez, Morocco"
        bgImage={INSTITUTE_IMAGE}
        breadcrumbs={[
          { label: "Why Ibn Ghazi", href: "#" },
          { label: "Overview" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              A Leading Arabic Institute
            </h2>
            <p className="mt-4 text-text-light leading-relaxed text-lg">
              The Ibn Ghazi Arabic Institute (IGAI) has earned its reputation as a leading center for Arabic language teaching in the Middle East and North Africa. For over 15 years, we have welcomed students from 10 to 60 years old, ranging from absolute beginners to advanced scholars. Our comprehensive curriculum, experienced faculty, and immersive environment in the heart of Fez provide an unparalleled learning experience. Whether you are a university student seeking academic credit, a professional aiming to enhance your career, or a lifelong learner pursuing a passion for Arabic language and culture, IGAI offers a program tailored to your goals.
            </p>
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{ src: INSTITUTE_IMAGE, alt: "Fez medina and the institute's neighborhood" }}
        title="An Ideal Location"
        description="Situated in the heart of Fez, Morocco's cultural and spiritual capital, our institute offers an ideal setting for language learning. Fez is home to Al Qaraouine University, founded in 859 CE and recognized as the oldest existing degree-granting university in the world. Our location in a calm residential area provides a peaceful atmosphere conducive to study, while the vibrant medina, historic landmarks, and rich cultural heritage are just steps away. Students can explore ancient souks, visit stunning madrasas, and immerse themselves in a living city where Arabic is spoken in its classical and colloquial forms daily."
        reversed
      />

      <ImageTextBlock
        image={{ src: INSTITUTE_IMAGE, alt: "Students practicing Arabic calligraphy" }}
        title="Extra-Curricular Activities"
        description="Learning at IGAI extends beyond the classroom. We offer a rich program of extra-curricular activities designed to deepen your cultural understanding and enhance your language skills. Practice the art of Arabic calligraphy under the guidance of master calligraphers. Learn to prepare traditional Moroccan dishes in our cooking workshops. Explore Morocco's diverse landscapes through organized weekend trips to the Atlas Mountains, the Sahara Desert, and the Atlantic coast. Engage with the local community through volunteering opportunities that allow you to practice your Arabic while making a meaningful contribution."
      />

      <ImageTextBlock
        image={{ src: INSTITUTE_IMAGE, alt: "IGAI classroom and library facilities" }}
        title="Facilities"
        description="Our institute is housed in a spacious traditional Moroccan villa, providing a warm and welcoming environment for learning. We feature air-conditioned classrooms equipped with modern teaching aids, a well-stocked library with Arabic literature and reference works, complimentary Wi-Fi throughout the building, a dedicated computer lab for language learning software and research, and a fully equipped kitchen where students can prepare tea and meals. Every detail of our facilities has been designed to create a comfortable and conducive learning atmosphere."
        reversed
      />

      <ImageTextBlock
        image={{ src: INSTITUTE_IMAGE, alt: "Fez cityscape at sunset" }}
        title="A Cost-Effective Choice"
        description="IGAI offers exceptional value for students seeking high-quality Arabic instruction. Our tuition is 30-50% lower than comparable programs in the Gulf region, the Middle East, or Western countries — without compromising on academic quality. The cost of living in Fez is remarkably affordable, with monthly expenses including accommodation, food, and transportation typically ranging from $400 to $600 USD. Additionally, Fez is served by an international airport with budget-friendly flights from major European hubs, making travel to and from Morocco both convenient and economical."
      />

      <CTASection
        title="Ready to Begin Your Arabic Journey?"
        subtitle="Join students from 30+ countries who have transformed their Arabic skills at IGAI. Apply today and experience the best Arabic education in Morocco."
        buttons={[
          { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  )
}
