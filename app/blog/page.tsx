import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Ibn Ghazi Arabic Institute",
  description: "Insights, lessons, and resources on Arabic grammar, morphology, and language learning tips from IGAI.",
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights, lessons, and resources from the Ibn Ghazi Arabic Institute — explore Arabic grammar, morphology, and language learning tips."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} title={post.title}>
                {post.date && (
                  <div className="flex items-center gap-1.5 text-xs text-text-light mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                )}
                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary-light transition-colors"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
