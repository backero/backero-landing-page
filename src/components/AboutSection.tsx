const AboutSection = () => {
  return <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 slide-up px-4">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3 md:mb-4">
            Who We Are
          </span>
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8">
            About Backero Private Limited
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Founded in 2020, Backero Private Limited is a complete cosmetics solution provider—from production 
              to export, serving both B2B and B2C markets. We are the parent company behind Treyfa and Kymarie, 
              India's first cancer-free cosmetics brands.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our commitment to safety, innovation, and transparency drives our mission to revolutionize the 
              personal care industry through Ayurvedic heritage combined with modern science.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-20 slide-up" style={{
        animationDelay: "0.1s"
      }}>
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">2020</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Founded</div>
          </div>
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">2</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Brands</div>
          </div>
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Safe</div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-8 md:mb-12 slide-up" style={{
        animationDelay: "0.2s"
      }}>
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3 md:mb-4">
            Leadership
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 md:mb-3">Meet Our Visionaries</h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Driven by passion and purpose, our leaders are redefining clean beauty standards
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto px-4">
          {/* Founder */}
          <div className="group slide-up" style={{
          animationDelay: "0.3s"
        }}>
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                  <img alt="Parimala Gnana Soundari - Founder" className="w-full h-full object-cover" src="/images/55db6556-6aaf-4023-9da6-15820c661e6c.jpg" />
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">Parimala Gnana Soundari</h4>
              <p className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4">Founder</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Pioneering the vision of cancer-free cosmetics in India, committed to delivering safe and effective beauty solutions.
              </p>
            </div>
          </div>

          {/* Managing Director */}
          <div className="group slide-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-accent/20 shadow-2xl">
                  <img alt="Suryaraj - Managing Director" className="w-full h-full object-cover object-center" src="/images/2273286a-6556-4662-8c28-4d308e0c4dca.png" />
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">Suryaraj</h4>
              <p className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4">Managing Director</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Leading operations and strategic growth, driving Backero's mission from production to global export.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;