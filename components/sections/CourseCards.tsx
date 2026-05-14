"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/Card"

const courses = [
  {
    image: {
      src: "https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg",
      alt: "Classical Arabic",
    },
    title: "Classical Arabic",
    description:
      "Study Quranic Arabic and classical Islamic texts with expert scholars in the historic city of Fez. Our classical track emphasizes grammar, rhetoric, and textual analysis.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    href: "/academics/classical-arabic",
  },
  {
    image: {
      src: "https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg",
      alt: "Modern Standard Arabic",
    },
    title: "Modern Standard Arabic",
    description:
      "Develop proficiency in MSA for reading, writing, speaking, and listening. Ideal for academic research, professional communication, and media comprehension.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    href: "/academics/modern-standard-arabic",
  },
  {
    image: {
      src: "https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg",
      alt: "Colloquial Moroccan Arabic",
    },
    title: "Colloquial Moroccan Arabic (Darija)",
    description:
      "Learn the Arabic dialect spoken by 35+ million Moroccans. Darija is essential for daily life, cultural integration, and building local connections.",
    levels: ["Beginner", "Intermediate"],
    href: "/academics/darija",
  },
  {
    image: {
      src: "https://www.igai-fez.com/wp-content/uploads/2014/03/1-1-680x1024.jpg",
      alt: "Learn Arabic Online",
    },
    title: "Learn Arabic Online",
    description:
      "Can't travel? Study Arabic from anywhere with live one-on-one or small group sessions. Same curriculum, same quality instructors, flexible scheduling.",
    levels: ["All Levels"],
    href: "/academics/online",
  },
]

export function CourseCards() {
  return (
    <section className="py-16 lg:py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
            Our Academic Programs
          </h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Choose from four specialized tracks designed to meet your Arabic language goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card image={course.image} title={course.title} description={course.description}>
                <div className="flex flex-wrap gap-2 mt-4">
                  {course.levels.map((level) => (
                    <span
                      key={level}
                      className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary-dark"
                    >
                      {level}
                    </span>
                  ))}
                </div>
                <Link
                  href={course.href}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-secondary hover:text-secondary-light transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
