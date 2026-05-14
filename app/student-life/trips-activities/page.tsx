import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trips & Cultural Activities - Ibn Ghazi Arabic Institute",
  description: "Explore Morocco's rich heritage through guided excursions and immersive cultural experiences.",
}

const trips = [
  {
    title: "Atlas Mountains",
    description: "Journey through the Middle Atlas mountain range. Enjoy breathtaking views, Berber villages, and cedar forests home to Barbary macaques.",
  },
  {
    title: "Meknes & Volubilis",
    description: "Visit the imperial city of Meknes and the stunning Roman ruins of Volubilis, a UNESCO World Heritage site with exceptionally well-preserved mosaics.",
  },
  {
    title: "Marrakech",
    description: "Explore the vibrant red city — from Jemaa el-Fnaa square to the Majorelle Garden, Bahia Palace, and the bustling souks of the medina.",
  },
  {
    title: "Chefchaouen",
    description: "Discover the famous blue pearl of Morocco. Nestled in the Rif Mountains, Chefchaouen offers stunning views, blue-washed streets, and a relaxed atmosphere.",
  },
  {
    title: "Sahara Desert",
    description: "Experience the magic of the Sahara — camel trek across golden dunes, camp under a blanket of stars, and witness an unforgettable desert sunrise.",
  },
]

const activities = [
  {
    title: "Calligraphy Workshops",
    description: "Learn the art of Arabic calligraphy from master calligraphers. Practice Thuluth, Naskh, and Diwani scripts.",
    free: true,
  },
  {
    title: "Cooking Classes",
    description: "Master traditional Moroccan dishes like couscous, tagine, and pastilla in hands-on cooking sessions with local chefs.",
    free: true,
  },
  {
    title: "Cultural Sessions",
    description: "Engage in discussions on Moroccan culture, traditions, Islamic heritage, and contemporary North African society.",
    free: true,
  },
  {
    title: "Guest Lectures",
    description: "Attend lectures by visiting scholars and experts covering topics in Arabic linguistics, literature, and Islamic studies.",
    free: true,
  },
  {
    title: "Moroccan Craftsmanship",
    description: "Visit local artisans — see traditional zellij tilework, leather tanning at Chouara tannery, and copper engraving workshops.",
    free: true,
  },
  {
    title: "Movies & Documentaries",
    description: "Weekly film screenings featuring Moroccan and Arab cinema followed by group discussions in Arabic.",
    free: true,
  },
  {
    title: "Henna Night",
    description: "Experience the tradition of henna application while enjoying Moroccan tea, music, and social gathering.",
    free: true,
  },
]

export default function TripsActivitiesPage() {
  return (
    <>
      <PageHero
        title="Trips & Cultural Activities"
        subtitle="Explore Morocco's rich heritage through guided excursions and immersive cultural experiences."
        breadcrumbs={[
          { label: "Student Life", href: "/student-life" },
          { label: "Trips & Activities" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Weekend & Long Trips
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Discover Morocco's diverse landscapes and historic cities with organized group trips throughout the semester.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {trips.map((trip) => (
              <Card key={trip.title} title={trip.title} description={trip.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              On-Site Cultural Activities
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Most activities are included in your tuition — a rich cultural program designed to complement your Arabic studies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activities.map((activity) => (
              <Card key={activity.title} title={activity.title} description={activity.description}>
                {activity.free && (
                  <div className="mt-4 inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                    Free
                  </div>
                )}
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-text-light text-sm">
              Note: Long-distance trips (Marrakech, Sahara, Chefchaouen) may have an additional cost. All on-site activities are free.
            </p>
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/TRAVEL-AND-VISA.jpg",
          alt: "Cultural activities at IGAI",
        }}
        title="A Holistic Learning Experience"
        description="At IGAI, we believe that language learning extends beyond the classroom. Our cultural program is designed to give you a deep appreciation of Moroccan heritage while providing authentic contexts for using Arabic in real-life situations. From negotiating in the souk to discussing a film with classmates, every activity reinforces your language skills."
      />

      <CTASection />
    </>
  )
}
