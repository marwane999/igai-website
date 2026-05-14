import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "A Global Platform",
}

const GLOBAL_IMAGE = "https://www.igai-fez.com/wp-content/uploads/2018/12/PEACE-1024x467.jpg"
const INSTITUTE_IMAGE = "https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg"

export default function GlobalPlatformPage() {
  return (
    <>
      <PageHero
        title="A Global Platform"
        subtitle="Building bridges of intercultural dialogue through Arabic language education"
        bgImage={GLOBAL_IMAGE}
        breadcrumbs={[
          { label: "Why Ibn Ghazi", href: "#" },
          { label: "A Global Platform" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Our Mission
            </h2>
            <p className="mt-4 text-text-light leading-relaxed text-lg">
              Ibn Ghazi Arabic Institute was founded with a vision that extends beyond language instruction. We believe that learning Arabic is a powerful vehicle for intercultural dialogue, mutual understanding, and bridge-building between the Arab and Islamic world and the global community. Our institute serves as a platform where students from diverse backgrounds come together to learn, share, and grow.
            </p>
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{ src: GLOBAL_IMAGE, alt: "Students from around the world at IGAI" }}
        title="Fulbright Values Embodied"
        description="IGAI proudly embodies the values of the Fulbright Program — mutual understanding, academic excellence, and cultural exchange. As a Fulbright-Hays partnered institute, we have hosted numerous Fulbright scholars and have been recognized by the United States Department of Education for our commitment to international education. Our programs reflect the Fulbright spirit of fostering cross-cultural connections that transcend borders and build lasting bridges between peoples."
      />

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text mb-4">
              A Truly International Community
            </h2>
            <p className="text-text-light leading-relaxed text-lg">
              Each year, IGAI welcomes students from over thirty countries spanning North America, Europe, Asia, Africa, and the Middle East. Our student body includes Muslims, Christians, Jews, Hindus, and individuals of all faiths and beliefs — united by a common passion for the Arabic language. This remarkable diversity creates a vibrant learning environment where cross-cultural friendships flourish and global perspectives are shared daily.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { region: "North America", countries: "USA, Canada" },
              { region: "Europe", countries: "UK, France, Germany, Italy, Spain" },
              { region: "Asia", countries: "India, Japan, South Korea, Indonesia" },
              { region: "Middle East & Africa", countries: "Turkey, Egypt, Nigeria, South Africa" },
            ].map((item) => (
              <div
                key={item.region}
                className="bg-white rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <h3 className="font-heading text-lg font-bold text-text">{item.region}</h3>
                <p className="mt-2 text-sm text-text-light">{item.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{ src: INSTITUTE_IMAGE, alt: "Founder Fouad Touzani" }}
        title="Founded by a Fulbright Scholar"
        description="IGAI was founded by Fouad Touzani, a former Fulbright scholar who studied at the University of Massachusetts Amherst. His experience as a Fulbright recipient profoundly shaped his educational philosophy, inspiring him to create an institution that embodies the same values of academic excellence, cultural exchange, and mutual understanding that the Fulbright Program champions. Under his leadership, IGAI has grown from a small language school into a globally recognized Arabic institute that has served over a thousand students from around the world."
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Partnerships & Recognition
            </h2>
            <p className="mt-4 text-text-light leading-relaxed text-lg">
              IGAI has established partnerships with leading universities and institutions across the United States and Europe, including Juniata College, Northwestern University, Syracuse University, and Ca' Foscari University of Venice. These partnerships reflect our commitment to academic rigor and our reputation as a trusted provider of Arabic language education. We are proud to be recognized as a Fulbright-Hays Group Projects Abroad partner, a distinction held by only a select number of language institutes worldwide.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Global Community"
        subtitle="Become part of a worldwide network of Arabic learners and cultural ambassadors. Your journey at IGAI connects you to a global platform of understanding and exchange."
        buttons={[
          { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  )
}
