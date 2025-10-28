export function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Geometric accent */}
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-accent/10 rotate-45"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-accent">Fikdev</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-4 leading-relaxed">
              I'm a passionate developer and designer with a keen eye for detail and a love for creating seamless user
              experiences. With expertise in modern web technologies, I transform ideas into elegant digital solutions.
            </p>
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
              My approach combines strategic thinking with creative execution, ensuring every project not only looks
              stunning but also performs exceptionally well.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Design</h3>
                  <p className="text-foreground/60">Creating beautiful and intuitive interfaces</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Development</h3>
                  <p className="text-foreground/60">Building robust and scalable applications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">03</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Innovation</h3>
                  <p className="text-foreground/60">Pushing boundaries with cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Geometric shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-accent/30 rotate-45"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/5 rounded-full"></div>

            <div className="relative z-10 bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-accent mb-2">5+</div>
                    <p className="text-foreground/60">Years of Experience</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">50+</div>
                    <p className="text-sm text-foreground/60">Projects</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">30+</div>
                    <p className="text-sm text-foreground/60">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
