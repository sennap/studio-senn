import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Header } from "@/components/header"

describe("Header", () => {
  it("renders brand name", () => {
    render(<Header />)
    expect(screen.getByText("Senn Studio")).toBeInTheDocument()
  })

  it("renders desktop navigation links", () => {
    render(<Header />)
    expect(screen.getByRole("link", { name: "Portfolio" })).toHaveAttribute("href", "/")
    expect(screen.getByRole("link", { name: "Galleries" })).toHaveAttribute("href", "/galleries")
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about")
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact")
  })

  it("toggles mobile menu", () => {
    render(<Header />)
    const toggleButton = screen.getByLabelText("Toggle menu")

    // Mobile menu should be hidden initially
    expect(screen.queryByText("Work")).not.toBeInTheDocument()

    // Open mobile menu
    fireEvent.click(toggleButton)
    expect(screen.getByText("Work")).toBeInTheDocument()

    // Close mobile menu
    fireEvent.click(toggleButton)
    expect(screen.queryByText("Work")).not.toBeInTheDocument()
  })
})
