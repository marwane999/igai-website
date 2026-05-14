import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Our Team",
}

const INSTITUTE_IMAGE = "https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg"

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Meet the dedicated educators and administrators behind Ibn Ghazi Arabic Institute"
        bgImage={INSTITUTE_IMAGE}
        breadcrumbs={[
          { label: "Why Ibn Ghazi", href: "#" },
          { label: "Our Team" },
        ]}
      />

      <ImageTextBlock
        image={{ src: INSTITUTE_IMAGE, alt: "IGAI faculty and staff" }}
        title="Qualified Instructors"
        description="Our faculty comprises highly qualified educators who bring a wealth of academic training and teaching experience to the classroom. Many of our instructors hold advanced degrees in Arabic linguistics, literature, and Islamic studies from prestigious universities in Morocco and abroad. Several are Fulbright scholars who have trained at leading American universities, bringing cross-cultural pedagogical expertise to their teaching. With years of experience teaching Arabic as a foreign language, our instructors are skilled at working with students from diverse linguistic and cultural backgrounds, adapting their methods to meet individual learning needs."
      />

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text text-center">
              Dedicated Administration
            </h2>
            <p className="mt-4 text-text-light leading-relaxed text-lg text-center">
              Our administrative team works tirelessly behind the scenes to ensure every student's experience is seamless, supportive, and academically enriching.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="font-heading text-xl font-bold text-text">Level Placement</h3>
              <p className="mt-3 text-text-light leading-relaxed">
                Upon arrival, every student undergoes a comprehensive placement assessment that evaluates reading, writing, speaking, and listening skills. This ensures placement in the appropriate level — from absolute beginner to advanced — maximizing learning outcomes from day one.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="font-heading text-xl font-bold text-text">Regular Meetings</h3>
              <p className="mt-3 text-text-light leading-relaxed">
                The academic team holds weekly meetings to discuss student progress, share best practices, and address any challenges. Faculty members collaborate to ensure curriculum coherence across levels and to provide targeted support for students who need additional assistance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="font-heading text-xl font-bold text-text">Program Evaluation</h3>
              <p className="mt-3 text-text-light leading-relaxed">
                We are committed to continuous improvement. Student feedback is collected regularly through surveys and one-on-one meetings, and program evaluations are conducted at the end of each term. This data drives curriculum updates, teaching method refinements, and resource allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{ src: INSTITUTE_IMAGE, alt: "Students and faculty at IGAI" }}
        title="A Supportive Learning Community"
        description="What truly sets IGAI apart is the warmth and dedication of our team. From the moment you arrive, our staff is committed to your success — both academic and personal. Our instructors are available outside of class for extra help, our student services coordinator assists with housing, visas, and cultural adjustment, and our administrative team is always ready to listen and respond to student needs. At IGAI, you are not just a student — you are a member of our community."
      />

      <CTASection
        title="Learn from the Best"
        subtitle="Join a community of dedicated educators and passionate learners. Our team is ready to help you achieve your Arabic language goals."
        buttons={[
          { label: "Apply Now", href: "/admissions/apply", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  )
}
