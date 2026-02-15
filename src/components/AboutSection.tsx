const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-muted/30"
    >
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
              Founded in 2020, Backero Private Limited is a complete cosmetics
              solution provider—from production to export, serving both B2B and
              B2C markets. We are the parent company behind Treyfa and Kymarie,
              India's first cancer-free cosmetics brands.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our commitment to safety, innovation, and transparency drives our
              mission to revolutionize the personal care industry through
              Ayurvedic heritage combined with modern science.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-20 slide-up"
          style={{
            animationDelay: "0.1s",
          }}
        >
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
              2020
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Founded
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
              2
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Brands
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
              100%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Safe
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div
          className="text-center mb-8 md:mb-12 slide-up"
          style={{
            animationDelay: "0.2s",
          }}
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3 md:mb-4">
            Leadership
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 md:mb-3">
            Meet Our Visionaries
          </h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Driven by passion and purpose, our leaders are redefining clean
            beauty standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto px-4">
          {/* Founder */}
          <div
            className="group slide-up flex flex-col items-center text-center"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img
                  alt="Parimala Gnana Soundari - Founder"
                  className="w-full h-full object-cover"
                  src="/images/dr-parimala-gnana-soundari.jpg"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-1 ring-black/5 pointer-events-none" />
              {/* Decorative accent behind */}
              <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-serif">
              Parimala Gnana Soundari
            </h4>
            <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
              Founder
            </p>
            <div className="w-12 h-1 bg-primary/20 mb-4 rounded-full" />
            <p className="text-muted-foreground leading-relaxed max-w-sm font-light text-lg">
              Pioneering the vision of cancer-free cosmetics in India, committed
              to delivering safe and effective beauty solutions.
            </p>
          </div>

          {/* Managing Director */}
          <div
            className="group slide-up flex flex-col items-center text-center"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img
                  alt="Suryaraj - Managing Director"
                  className="w-full h-full object-cover object-center"
                  src="/images/surya-raj-b.png"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-1 ring-black/5 pointer-events-none" />
              {/* Decorative accent behind */}
              <div className="absolute -z-10 top-4 -left-4 w-full h-full rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-serif">
              Suryaraj
            </h4>
            <p className="text-accent font-bold tracking-widest text-sm uppercase mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
              Managing Director
            </p>
            <div className="w-12 h-1 bg-accent/20 mb-4 rounded-full" />
            <p className="text-muted-foreground leading-relaxed max-w-sm font-light text-lg">
              Leading operations and strategic growth, driving Backero's mission
              from production to global export.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
