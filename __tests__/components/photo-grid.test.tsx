import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { PhotoGrid } from "@/components/photo-grid"
import type { Photo } from "@/lib/gallery-data"

const mockPhotos: Photo[] = [
  { id: "1", src: "/test-1.jpg", alt: "Test photo 1", width: 800, height: 600 },
  { id: "2", src: "/test-2.jpg", alt: "Test photo 2", width: 600, height: 800 },
  { id: "3", src: "/test-3.jpg", alt: "Test photo 3", width: 800, height: 800 },
]

describe("PhotoGrid", () => {
  it("renders all photos", () => {
    render(<PhotoGrid photos={mockPhotos} />)
    expect(screen.getAllByRole("button")).toHaveLength(3)
    expect(screen.getByAltText("Test photo 1")).toBeInTheDocument()
    expect(screen.getByAltText("Test photo 2")).toBeInTheDocument()
    expect(screen.getByAltText("Test photo 3")).toBeInTheDocument()
  })

  it("opens lightbox on photo click", () => {
    render(<PhotoGrid photos={mockPhotos} />)
    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[0])

    expect(screen.getByLabelText("Close lightbox")).toBeInTheDocument()
    expect(screen.getByText("1 / 3")).toBeInTheDocument()
  })

  it("navigates to next photo in lightbox", () => {
    render(<PhotoGrid photos={mockPhotos} />)
    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[0])

    fireEvent.click(screen.getByLabelText("Next photo"))
    expect(screen.getByText("2 / 3")).toBeInTheDocument()
  })

  it("navigates to previous photo in lightbox", () => {
    render(<PhotoGrid photos={mockPhotos} />)
    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[0])

    fireEvent.click(screen.getByLabelText("Previous photo"))
    expect(screen.getByText("3 / 3")).toBeInTheDocument()
  })

  it("closes lightbox", () => {
    render(<PhotoGrid photos={mockPhotos} />)
    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[0])

    fireEvent.click(screen.getByLabelText("Close lightbox"))
    expect(screen.queryByLabelText("Close lightbox")).not.toBeInTheDocument()
  })

  it("wraps around at the end", () => {
    render(<PhotoGrid photos={mockPhotos} />)
    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[2]) // open last photo

    fireEvent.click(screen.getByLabelText("Next photo"))
    expect(screen.getByText("1 / 3")).toBeInTheDocument()
  })
})
