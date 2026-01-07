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
    src: "/golden-retriever-portrait-photography.jpg",
    alt: "Golden retriever portrait",
    width: 600,
    height: 800,
  },
  { id: "2", src: "/border-collie-running-outdoors.jpg", alt: "Border collie running", width: 800, height: 600 },
  { id: "3", src: "/labrador-puppy-closeup-cute.jpg", alt: "Labrador puppy closeup", width: 800, height: 800 },
  { id: "4", src: "/husky-dog-snow-winter.jpg", alt: "Husky in snow", width: 800, height: 600 },
  { id: "5", src: "/beagle-dog-portrait-studio.jpg", alt: "Beagle portrait", width: 600, height: 800 },
  { id: "6", src: "/french-bulldog-cute-portrait.jpg", alt: "French bulldog", width: 800, height: 800 },
  { id: "7", src: "/maine-coon-cat-portrait-fluffy.jpg", alt: "Maine coon portrait", width: 600, height: 800 },
  { id: "8", src: "/siamese-cat-blue-eyes.jpg", alt: "Siamese cat", width: 800, height: 600 },
  { id: "9", src: "/black-cat-golden-eyes-portrait.jpg", alt: "Black cat with golden eyes", width: 800, height: 800 },
  { id: "10", src: "/dog-beach-sunset-golden-hour.jpg", alt: "Dog at beach sunset", width: 800, height: 600 },
  { id: "11", src: "/cat-garden-flowers-spring.jpg", alt: "Cat in garden", width: 600, height: 800 },
  { id: "12", src: "/poodle-professional-portrait-studio.jpg", alt: "Poodle portrait", width: 800, height: 600 },
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
