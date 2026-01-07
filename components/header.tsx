"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium tracking-wide">
          <h1>Studio Senn</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
            Portfolio
          </Link>
          <Link href="/galleries" className="text-sm font-medium hover:text-accent transition-colors">
            Galleries
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/galleries"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galleries
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
