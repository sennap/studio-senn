import { galleries } from "@/lib/gallery-data"
import { GalleryCard } from "@/components/gallery-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GalleriesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Galleries</h2>
            <p className="text-muted-foreground leading-relaxed">
              Curated collections from special projects and themed photoshoots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery) => (
              <GalleryCard key={gallery.id} gallery={gallery} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
