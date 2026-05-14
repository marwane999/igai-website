import { PageHero } from "@/components/sections/PageHero"
import { ImageTextBlock } from "@/components/sections/ImageTextBlock"
import { CTASection } from "@/components/sections/CTASection"
import { MapPin, Plane, Car, Stamp, Bell } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Travel & Visa - Ibn Ghazi Arabic Institute",
  description: "Everything you need to know about getting to Fez and securing your entry to Morocco.",
}

const visaFreeCountries = [
  "European Union (all member states)",
  "United States",
  "Canada",
  "Australia",
  "New Zealand",
  "Japan",
  "China",
  "South Korea",
  "Singapore",
  "Malaysia",
  "Brazil",
  "Argentina",
  "Mexico",
  "Chile",
  "Russia",
  "Switzerland",
  "Norway",
  "Iceland",
  "Andorra",
  "Monaco",
  "San Marino",
  "Vatican City",
  "Liechtenstein",
  "Hong Kong",
  "Macau",
  "Brunei",
  "Bahrain",
  "Kuwait",
  "Oman",
  "Qatar",
  "Saudi Arabia",
  "United Arab Emirates",
  "Turkey",
  "Indonesia",
  "Philippines",
  "Thailand",
  "South Africa",
  "Peru",
  "Colombia",
  "Costa Rica",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Uruguay",
  "Venezuela",
  "Dominican Republic",
  "Haiti",
  "Jamaica",
  "Barbados",
  "Trinidad and Tobago",
  "Bahamas",
  "Senegal",
  "Côte d'Ivoire",
  "Gabon",
  "Guinea",
  "Mali",
  "Mauritania",
  "Niger",
  "Republic of the Congo",
  "Togo",
  "Tunisia",
  "Algeria",
  "Libya",
  "Egypt",
  "Jordan",
  "Lebanon",
  "Syria",
]

export default function TravelVisaPage() {
  return (
    <>
      <PageHero
        title="Travel & Visa"
        subtitle="Everything you need to know about getting to Fez and securing your entry to Morocco."
        breadcrumbs={[
          { label: "Student Life", href: "/student-life" },
          { label: "Travel & Visa" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-primary-dark" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
                Booking Your Flight
              </h2>
              <p className="mt-4 text-text-light leading-relaxed text-lg">
                Major international airlines serve Morocco, with regular flights to Fez Sais Airport (FEZ), Casablanca (CMN), and Rabat (RBA). Airlines such as Royal Air Maroc, Air France, Turkish Airlines, Ryanair, and easyJet offer competitive prices from North America, Europe, and Asia. We recommend booking your flight at least 6–8 weeks in advance for the best rates.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-primary-dark" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
                Airport Pick-Up
              </h2>
              <p className="mt-4 text-text-light leading-relaxed text-lg">
                Upon arrival at Fez Sais Airport, our driver will be waiting for you with a placard bearing your name. The pick-up service costs <strong>250 MAD</strong> (approximately $25 USD). This is the safest and most convenient way to reach your accommodation after your flight. Simply provide us with your flight details at least 3 days before arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageTextBlock
        image={{
          src: "https://www.igai-fez.com/wp-content/uploads/2018/12/TRAVEL-AND-VISA.jpg",
          alt: "Morocco travel and visa",
        }}
        title="Visa Information"
        description="Morocco offers visa-free entry to citizens of 70+ countries for stays of up to 90 days. This includes all EU member states, the United States, Canada, Australia, New Zealand, Japan, China, South Korea, Brazil, and many others. If you are from a country requiring a visa, the institute will provide a formal invitation letter to support your application."
        reversed
      >
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Stamp className="h-5 w-5 text-primary-dark" />
            <span className="font-semibold text-text">Visa-free countries (70+)</span>
          </div>
          <div className="max-h-40 overflow-y-auto bg-bg-alt rounded-lg p-4 border border-border/40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
              {visaFreeCountries.map((country) => (
                <span key={country} className="text-sm text-text-light">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ImageTextBlock>

      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Bell className="h-6 w-6 text-primary-dark" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Important: Notify Us 3 Days in Advance
            </h2>
            <p className="mt-4 text-text-light leading-relaxed text-lg">
              Please send your flight itinerary, arrival time, and accommodation preference at least <strong>3 business days</strong> before your scheduled arrival. This ensures we can arrange airport pick-up, prepare your housing, and have a staff member ready to welcome you upon arrival.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
