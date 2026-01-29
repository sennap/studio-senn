export interface Photo {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export interface Gallery {
  id: string
  title: string
  description: string
  coverImage: string
  photos: Photo[]
}

// Main portfolio photos
export const photos: Photo[] = [
  {
    id: "1",
    src: "/brown-wolf.JPG",
    alt: "Brown wold dog sitting in the snow",
    width: 800,
    height: 600,
  },
  { id: "3", src: "/Ollie.JPG", alt: "Ollie, a Maine Coon, looking up", width: 800, height: 600 },
  { id: "4", src: "/Ollie-light.JPG", alt: "Ollie, a Maine Coon, laying in the sunlight", width: 800, height: 600 },
  { id: "5", src: "/Ollie-tail.JPG", alt: "Maine Coon tail in sunlight", width: 800, height: 600 },
  { id: "8", src: "/Mellow.JGP", alt: "Mellow, a frenchie sitting on a zebra couch", width: 800, height: 600 },
    { id: "7", src: "/Mari-tail.JPG", alt: "Mari, a shiba inu, tail in a flower field", width: 800, height: 600 },

      { id: "2", src: "/border-collie.JPG", alt: "Border collie relaxing in snow", width: 800, height: 600 }



]

// Individual gallery collections
export const galleries: Gallery[] = [
  {
    id: "street-cats",
    title: "Street Cats",
    description: "A collection of urban feline encounters",
    coverImage: "/street-cat-urban-photography.jpg",
    photos: [
      { id: "sc1", src: "/tabby-cat-alley-street.jpg", alt: "Tabby cat in alley", width: 600, height: 800 },
      { id: "sc2", src: "/orange-cat-windowsill-urban.jpg", alt: "Orange cat on windowsill", width: 800, height: 600 },
      { id: "sc3", src: "/black-white-cat-street-photography.jpg", alt: "Black and white cat", width: 800, height: 800 },
      { id: "sc4", src: "/stray-cat-sleeping-urban.jpg", alt: "Sleeping street cat", width: 800, height: 600 },
      { id: "sc5", src: "/cat-doorway-mediterranean-street.jpg", alt: "Cat in doorway", width: 600, height: 800 },
      { id: "sc6", src: "/curious-cat-peeking-urban.jpg", alt: "Curious cat peeking", width: 800, height: 800 },
    ],
  },
]

export function getGalleryById(id: string): Gallery | undefined {
  return galleries.find((gallery) => gallery.id === id)
}
