import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fulbright-Hays Program - Ibn Ghazi Arabic Institute",
  description: "A prestigious 4-week Arabic language and cultural immersion program for American educators in Fez, Morocco.",
}

const professors = [
  { name: "Michael Henderson", role: "Professor" },
  { name: "Jim Roney", role: "Professor" },
  { name: "Deb Roney", role: "Professor" },
  { name: "Kati Csoman", role: "Professor" },
  { name: "Emil Nagengast", role: "Professor" },
]

const teachers = [
  { name: "Michelle Steward", role: "High School Teacher" },
  { name: "Maylin Musser", role: "High School Teacher" },
  { name: "David Mann", role: "High School Teacher" },
  { name: "Gaineyou Salamy", role: "High School Teacher" },
  { name: "Eric Yoder", role: "High School Teacher" },
]

export default function FulbrightHaysPage() {
  return (
    <>
      <PageHero
        title="Fulbright-Hays Program"
        subtitle="A prestigious 4-week Arabic language and cultural immersion program for American educators, hosted in collaboration with Juniata College."
        breadcrumbs={[{ label: "Fulbright-Hays" }]}
      />

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2014/02/room.jpg",
          alt: "Fulbright-Hays Program at IGAI",
        }}
        title="About the Program"
        description="The Fulbright-Hays Group Projects Abroad (GPA) program is funded by the U.S. Department of Education and administered in partnership with Juniata College. This intensive 4-week program brings American professors and high school teachers to Fez, Morocco for immersive Arabic language instruction and cultural exchange."
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-block text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium">
            Funded by US Dept. of Education
          </span>
          <span className="inline-block text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium">
            4-Week Immersion
          </span>
          <span className="inline-block text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium">
            In Partnership with Juniata College
          </span>
        </div>
      </ImageTextBlock>

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Program Components
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              A comprehensive curriculum combining language learning with cultural immersion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card
              title="Arabic Language Instruction"
              description="Daily intensive Arabic classes tailored to the participants' proficiency levels, focusing on MSA and Moroccan Darija for practical communication."
            />
            <Card
              title="Academic Lectures"
              description="Expert lectures on Moroccan history, Islamic civilization, Arabic linguistics, and contemporary North African politics and society."
            />
            <Card
              title="Calligraphy Workshops"
              description="Hands-on training in traditional Arabic calligraphy, exploring various scripts including Thuluth, Naskh, and Diwani under master calligraphers."
            />
            <Card
              title="Cooking Classes"
              description="Learn to prepare authentic Moroccan dishes including couscous, tagine, pastilla, and traditional mint tea from local chefs."
            />
            <Card
              title="Excursions to UNESCO Sites"
              description="Guided visits to Fez medina (the world's largest car-free urban area), Volubilis Roman ruins, Meknes imperial city, and other UNESCO World Heritage sites."
            />
            <Card
              title="Mentor Pairing"
              description="Each participant is paired with a Moroccan teacher who serves as a language partner, cultural guide, and professional mentor throughout the program."
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Program Participants
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Distinguished educators selected for the Fulbright-Hays GPA program at IGAI.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="font-heading text-2xl font-bold text-text mb-6">Professors</h3>
              <div className="space-y-4">
                {professors.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-4 rounded-xl bg-white shadow-sm border border-border/40 p-4 transition-all duration-300 hover:shadow-md hover:border-primary/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary">
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-text">{p.name}</p>
                      <p className="text-sm text-text-light">{p.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-text mb-6">High School Teachers</h3>
              <div className="space-y-4">
                {teachers.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-4 rounded-xl bg-white shadow-sm border border-border/40 p-4 transition-all duration-300 hover:shadow-md hover:border-primary/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-dark">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-text">{t.name}</p>
                      <p className="text-sm text-text-light">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
