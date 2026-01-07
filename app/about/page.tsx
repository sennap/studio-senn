import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <Image
                src="/placeholder.svg?height=800&width=640"
                alt="About the photographer"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">About</p>
              <h1 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Hello, I'm the photographer behind Pawtraits
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over a decade of experience in photography, I've found my true passion lies in capturing the
                  unique personalities of pets. Every animal has a story to tell, and I believe in creating images that
                  reflect their spirit.
                </p>
                <p>
                  Whether it's the playful energy of a puppy, the regal grace of a cat, or the loyal gaze of your senior
                  companion, I approach each session with patience and creativity.
                </p>
                <p>
                  My work has been featured in various pet magazines and I've had the honor of photographing hundreds of
                  beloved pets for families across the region.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h2 className="font-medium mb-4">Services Offered</h2>
                <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Studio Portraits</li>
                  <li>• Outdoor Sessions</li>
                  <li>• Pet & Owner Photos</li>
                  <li>• Memorial Sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
