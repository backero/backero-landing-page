import parimalaImage from "@/assets/parimala.png";
import suryarajImage from "@/assets/suryaraj.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20 slide-up">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Who We Are
          </span>
          <h2 className="text-primary mb-8">About Backero Private Limited</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2020, Backero Private Limited is a complete cosmetics solution provider—from production 
              to export, serving both B2B and B2C markets. We are the parent company behind Treyfa and Kymarie, 
              India's first cancer-free cosmetics brands.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to safety, innovation, and transparency drives our mission to revolutionize the 
              personal care industry through Ayurvedic heritage combined with modern science.
            </p>
          </div>
        </div>

        {/* Stats & Company Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-primary mb-2">2020</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Founded</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Premium Brands</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Cancer-Free</div>
          </div>
        </div>

        {/* Company Details Card */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-20 max-w-3xl mx-auto slide-up" style={{ animationDelay: "0.15s" }}>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary"></span>
            Company Information
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">CIN</p>
              <p className="text-foreground font-medium">U72900TZ2020PTC034030</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Incorporation Date</p>
              <p className="text-foreground font-medium">July 7, 2020</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Registered Address</p>
              <p className="text-foreground font-medium">
                No.101/1A4, Kovilyagappanpatti, Thamaraipadi, Dindigul, Tamil Nadu, 624005, India
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-12 slide-up" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Leadership
          </span>
          <h3 className="text-3xl font-bold text-foreground mb-3">Meet Our Visionaries</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Driven by passion and purpose, our leaders are redefining clean beauty standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Founder */}
          <div className="group slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                  <img 
                    src={parimalaImage}
                    alt="Parimala Gnana Soundari - Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-1">Parimala Gnana Soundari</h4>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Founder</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pioneering the vision of cancer-free cosmetics in India, committed to delivering safe and effective beauty solutions.
              </p>
            </div>
          </div>

          {/* Managing Director */}
          <div className="group slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-accent/20 shadow-2xl">
                  <img 
                    src={suryarajImage}
                    alt="Suryaraj - Managing Director" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-1">Suryaraj</h4>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Managing Director</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading operations and strategic growth, driving Backero's mission from production to global export.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
