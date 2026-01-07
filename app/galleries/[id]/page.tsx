import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getGalleryById, galleries } from "@/lib/gallery-data"
import { PhotoGrid } from "@/components/photo-grid"

export function generateStaticParams() {
  return galleries.map((gallery) => ({
    id: gallery.id,
  }))
}

export default async function GalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gallery = getGalleryById(id)

  if (!gallery) {
    notFound()
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link
          href="/galleries"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Galleries
        </Link>

        <div className="max-w-2xl mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">{gallery.title}</h1>
          <p className="text-muted-foreground leading-relaxed">{gallery.description}</p>
        </div>

        <PhotoGrid photos={gallery.photos} />
      </div>
    </main>
  )
}
