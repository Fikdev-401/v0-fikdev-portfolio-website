"use client"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/ecommerce-dashboard.png",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/analytics-dashboard.png",
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application for task management",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/mobile-app-interface.png",
  },
  {
    id: 4,
    title: "Design System",
    description: "Comprehensive component library and design tokens",
    tags: ["Storybook", "Figma", "CSS"],
    image: "/design-system-components.png",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Geometric accent */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 border border-accent/10 rotate-45"></div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              A selection of recent work showcasing my expertise in design and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                {/* Project image */}
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project info */}
                <div className="p-6 bg-card border-t border-border">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Geometric corner accent */}
                <div
                  className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent transition-all duration-300 ${hoveredId === project.id ? "opacity-100" : "opacity-0"}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
