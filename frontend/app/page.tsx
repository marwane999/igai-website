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
      <div className="bg-bg-alt">
        <FeaturesGrid
          features={FEATURES}
          title="Why Ibn Ghazi Arabic Institute?"
          subtitle="Discover what makes IGAI the premier destination for Arabic language studies in Morocco"
        />
      </div>
      <CourseCards />
      <TestimonialsCarousel />
      <div className="bg-bg">
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
