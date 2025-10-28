"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-32 right-20 w-32 h-32 border-2 border-accent/30 rotate-45 animate-float"></div>
      <div
        className="absolute bottom-32 left-20 w-24 h-24 border-2 border-accent/20 rotate-12 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-accent/10 rotate-45"></div>

      <div
        className={`relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 border border-accent/50 rounded-full text-accent text-sm font-mono">
            Welcome to my portfolio
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Crafting Digital
          <span className="block text-accent">Experiences</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
          I'm a developer and designer passionate about creating beautiful, functional, and innovative digital
          solutions. Let's build something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
