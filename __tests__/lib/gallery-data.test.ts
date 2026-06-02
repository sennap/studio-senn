import { describe, it, expect } from "vitest"
import { photos, galleries } from "@/lib/gallery-data"

describe("gallery-data", () => {
  describe("photos", () => {
    it("contains portfolio photos", () => {
      expect(photos.length).toBeGreaterThan(0)
    })

    it("each photo has required fields", () => {
      for (const photo of photos) {
        expect(photo.id).toBeDefined()
        expect(photo.src).toMatch(/^\//)
        expect(photo.alt).toBeTruthy()
        expect(photo.width).toBeGreaterThan(0)
        expect(photo.height).toBeGreaterThan(0)
      }
    })

    it("has unique photo IDs", () => {
      const ids = photos.map((p) => p.id)
      expect(new Set(ids).size).toBe(ids.length)
    })
  })

  describe("galleries", () => {
    it("contains at least one gallery", () => {
      expect(galleries.length).toBeGreaterThan(0)
    })

    it("each gallery has required fields", () => {
      for (const gallery of galleries) {
        expect(gallery.id).toBeDefined()
        expect(gallery.title).toBeTruthy()
        expect(gallery.description).toBeTruthy()
        expect(gallery.coverImage).toMatch(/^\//)
        expect(gallery.photos.length).toBeGreaterThanOrEqual(6)
      }
    })

    it("has unique gallery IDs", () => {
      const ids = galleries.map((g) => g.id)
      expect(new Set(ids).size).toBe(ids.length)
    })

    it("gallery photos have required fields", () => {
      for (const gallery of galleries) {
        for (const photo of gallery.photos) {
          expect(photo.id).toBeDefined()
          expect(photo.src).toMatch(/^\//)
          expect(photo.alt).toBeTruthy()
          expect(photo.width).toBeGreaterThan(0)
          expect(photo.height).toBeGreaterThan(0)
        }
      }
    })
  })
})
