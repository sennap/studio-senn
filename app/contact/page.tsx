"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground mb-2">Contact</p>
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Let's create something beautiful together
            </h1>
            <p className="text-muted-foreground mb-12">
              Ready to book a session or have questions about my services? Fill out the form below and I'll get back to
              you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-secondary p-8 rounded-lg text-center">
                <h2 className="font-serif text-2xl font-medium mb-2">Thank you!</h2>
                <p className="text-muted-foreground">Your message has been sent. I'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pet">Tell me about your pet(s)</Label>
                  <Input id="pet" placeholder="Name, breed, age, personality..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="session">Session type</Label>
                  <Input id="session" placeholder="Studio, outdoor, at home..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me more about what you're looking for..." rows={5} />
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
