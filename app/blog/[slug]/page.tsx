import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { blogPosts, getBlogPost } from "@/lib/blog"

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} - Ibn Ghazi Arabic Institute`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) notFound()

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-light hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <style>{`
            .blog-content h2 {
              font-family: var(--font-heading);
              font-size: 1.75rem;
              font-weight: 700;
              color: var(--color-text);
              margin-top: 2.5rem;
              margin-bottom: 1rem;
            }
            .blog-content p {
              color: var(--color-text-light);
              line-height: 1.75;
              margin-bottom: 1.25rem;
              font-size: 1.125rem;
            }
            .blog-content ul {
              margin-bottom: 1.25rem;
              padding-left: 1.5rem;
            }
            .blog-content li {
              color: var(--color-text-light);
              line-height: 1.75;
              margin-bottom: 0.5rem;
              font-size: 1.125rem;
              list-style-type: disc;
            }
            .blog-content strong {
              color: var(--color-text);
              font-weight: 600;
            }
            .blog-content a {
              color: var(--color-secondary);
              text-decoration: none;
            }
            .blog-content a:hover {
              text-decoration: underline;
            }
          `}</style>
        </div>
      </article>

      <CTASection />
    </>
  )
}
