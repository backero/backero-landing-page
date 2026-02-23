import {
  FlaskConical,
  Factory,
  Package,
  ShieldCheck,
  Lightbulb,
  Users,
} from "lucide-react";

const expertise = [
  { icon: FlaskConical, title: "R&D Formulation Development" },
  { icon: Factory, title: "Custom Product Manufacturing" },
  { icon: Package, title: "Private Label Solutions" },
  { icon: Lightbulb, title: "Brand Development Support" },
  { icon: ShieldCheck, title: "Quality & Compliance Focus" },
];

const whyUs = [
  {
    title: "Research-Driven Approach",
    desc: "Every product starts with science, not shortcuts.",
  },
  {
    title: "Flexible Manufacturing",
    desc: "Scale from pilot batches to full production seamlessly.",
  },
  {
    title: "Quality-Focused Processes",
    desc: "Strict quality control at every production stage.",
  },
  {
    title: "Innovation-Led Development",
    desc: "Modern cosmetic science with proven ingredients.",
  },
  {
    title: "End-to-End Support",
    desc: "From concept to market — we're with you throughout.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 slide-up px-4">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3 md:mb-4">
            Who We Are
          </span>
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8">
            About Backero Private Limited
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Backero Private Limited is an innovation-focused personal care
              company specializing in research, formulation development, and
              manufacturing of cosmetic and wellness products.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our mission is to bridge the gap between scientific research and
              commercial product success by delivering high-performance, safe,
              and market-ready solutions.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div
          className="grid md:grid-cols-2 gap-6 mb-16 slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a trusted global partner in cosmetic innovation and
              manufacturing by delivering scientifically advanced and
              consumer-centric products.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower brands with high-quality formulations, reliable
              manufacturing, and innovative product development support that
              drives real market success.
            </p>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="mb-16 slide-up" style={{ animationDelay: "0.15s" }}>
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-2">
              What We Do
            </span>
            <h3 className="text-2xl font-bold text-foreground">
              Our Core Expertise
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Backero */}
        <div
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-16 slide-up border border-border"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-2">
              Our Advantage
            </span>
            <h3 className="text-2xl font-bold text-foreground">
              Why Choose Backero
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/60 border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Message */}
        <div
          className="text-center max-w-3xl mx-auto slide-up"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            Founder's Message
          </span>
          <blockquote className="text-lg md:text-xl text-foreground/80 leading-relaxed italic font-light border-l-4 border-primary/30 pl-6 text-left">
            "Backero was founded with the belief that product quality should
            never be compromised. Our goal is to create formulations that are
            both effective and safe while helping businesses build successful
            brands through strong technical support and manufacturing
            excellence."
          </blockquote>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-16 slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
              2020
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Founded
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
              2
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Consumer Brands
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
              B2B
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              & B2C Ready
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div
          className="text-center mt-16 mb-8 md:mb-12 slide-up"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3 md:mb-4">
            Leadership
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 md:mb-3">
            Meet Our Visionaries
          </h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Driven by passion and purpose, our leaders combine technical
            expertise with entrepreneurial vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto px-4">
          {/* Founder */}
          <div
            className="group slide-up flex flex-col items-center text-center"
            style={{ animationDelay: "0.4s" }}
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
              Pioneering the vision of safe, effective cosmetic formulations —
              committed to building brands that last through scientific
              excellence.
            </p>
          </div>

          {/* Managing Director */}
          <div
            className="group slide-up flex flex-col items-center text-center"
            style={{ animationDelay: "0.45s" }}
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
              Leading strategic growth and operations — driving Backero's
              evolution from a regional manufacturer to a trusted industry
              partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
