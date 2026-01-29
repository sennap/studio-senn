import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoGrid } from "@/components/photo-grid"
import { photos } from "@/lib/gallery-data"

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-8 md:py-12">
          <h2 className="text-base text-muted-foreground mb-2">Pet Photography</h2>
          <p className="font-serif text-xl md:text-2xl lg:text-3xl font-small leading-relaxed max-w-3xl text-balance">
            Capturing moments that celebrate the unique spirit of your pet          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Book a Session
            </a>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Portfolio</h2>
          </div>

          <PhotoGrid photos={photos} />
        </section>
      </main>

      <Footer />
    </>
  )
}
