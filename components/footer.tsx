import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link href="/" className="font-serif text-xl font-medium tracking-wide">
              Pawtraits
            </Link>
            <p className="text-sm text-muted-foreground mt-2">Capturing moments with your beloved pets</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm">
            <Link href="/" className="hover:text-accent transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Pawtraits. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
