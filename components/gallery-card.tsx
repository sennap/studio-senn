import Image from "next/image"
import Link from "next/link"
import type { Gallery } from "@/lib/gallery-data"

interface GalleryCardProps {
  gallery: Gallery
}

export function GalleryCard({ gallery }: GalleryCardProps) {
  return (
    <Link href={`/galleries/${gallery.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
        <Image
          src={gallery.coverImage || "/placeholder.svg"}
          alt={gallery.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-xl font-medium group-hover:text-accent transition-colors">{gallery.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{gallery.description}</p>
        <p className="text-xs text-muted-foreground mt-2">{gallery.photos.length} photos</p>
      </div>
    </Link>
  )
}
