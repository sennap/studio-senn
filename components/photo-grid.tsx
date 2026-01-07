"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Photo } from "@/lib/gallery-data"

interface PhotoGridProps {
  photos: Photo[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-2 gap-6 space-y-6">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="block w-full break-inside-avoid overflow-hidden rounded-lg bg-muted group cursor-pointer"
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-background hover:text-background/80 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-background hover:text-background/80 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-background hover:text-background/80 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-16">
            <Image
              src={photos[selectedIndex].src || "/placeholder.svg"}
              alt={photos[selectedIndex].alt}
              width={photos[selectedIndex].width}
              height={photos[selectedIndex].height}
              className="max-h-[85vh] w-auto h-auto object-contain"
            />
          </div>

          <div className="absolute bottom-4 text-background text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  )
}
