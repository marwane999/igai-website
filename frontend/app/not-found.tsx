import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-8xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-heading text-2xl font-semibold text-text">
          Page Not Found
        </h2>
        <p className="mt-2 text-text-light">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
