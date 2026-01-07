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
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted max-w-md">
              <Image
                src="/about.JPG?height=800&width=640"
                alt="About the photographer"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-sm text-muted-foreground mb-2">About</h2>
              <p className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Hello, my name is Senna, the photographer behind Studio Senn
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Turkish-American living in the Netherlands. By day I work in tech 🤓 by habit, I (try not to forget to) carry my camera. Photography has long been a hobby of mine, inspired by years of traveling to Turkey and capturing street life, mainly the cats and dogs!
                </p>
                <p>
                  I’ve always been drawn to animals, and pet photography grew naturally from that. My goal is to create images that feel real: photographs that reflect your pet’s personality and the bond you share, and that you’ll want to come back to years from now.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h2 className="font-medium mb-4">Services Offered</h2>
                <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Outdoor Sessions</li>
                  <li>• Portraits at home</li>
                  <li>• Pet & Owner Photos</li>
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
