import { FEATURES, FAQ_ITEMS } from "@/lib/constants"
import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBar } from "@/components/sections/TrustBar"
import { StatsBar } from "@/components/sections/StatsBar"
import { FeaturesGrid } from "@/components/sections/FeaturesGrid"
import { CourseCards } from "@/components/sections/CourseCards"
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { FAQSection } from "@/components/sections/FAQSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsBar />
      <div className="bg-cream-dark">
        <FeaturesGrid
          features={FEATURES}
          title="Why Ibn Ghazi Arabic Institute?"
          subtitle="Discover what makes IGAI the premier destination for Arabic language studies in Morocco"
        />
      </div>
      <CourseCards />
      <TestimonialsCarousel />

      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              <span className="gold-text">Experience IGAI</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3 mb-3">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold/30" />
              <div className="h-2 w-2 rotate-45 border border-gold/30" />
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              See what makes the Ibn Ghazi Arabic Institute a life-changing experience
            </p>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl ring-1 ring-gold/20">
            <iframe
              src="https://www.youtube.com/embed/HG7WmScttcM"
              title="Ibn Ghazi Arabic Institute"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      <div className="bg-cream">
        <ImageTextBlock
          image={{
            src: "https://www.igai-fez.com/wp-content/uploads/2014/02/room.jpg",
            alt: "Student life and shared experiences at Ibn Ghazi Arabic Institute in Fez",
          }}
          title="An Immersive Student Experience in the Heart of Fez"
          description="At Ibn Ghazi Arabic Institute, learning extends beyond the classroom. Immerse yourself in the rich cultural heritage of Fez — explore ancient medinas, practice Darija with local families through our homestay program, and form lifelong friendships with fellow students from around the globe. Our comprehensive student support ensures you feel at home from day one."
        />
      </div>
      <CTASection />
      <FAQSection items={FAQ_ITEMS} />
      <CTASection
        title="Start Your Journey Today"
        subtitle="Take the first step toward Arabic fluency. Apply now and begin your transformative experience at IGAI."
        buttons={[
          { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
          { label: "Learn More", href: "/about", variant: "secondary" },
        ]}
      />
    </>
  )
}
