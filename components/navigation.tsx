"use client"

import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-accent">
            Fikdev
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-foreground/70 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-foreground/70 hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-foreground/70 hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#about" className="block text-foreground/70 hover:text-accent transition-colors py-2">
              About
            </Link>
            <Link href="#projects" className="block text-foreground/70 hover:text-accent transition-colors py-2">
              Projects
            </Link>
            <Link href="#contact" className="block text-foreground/70 hover:text-accent transition-colors py-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
