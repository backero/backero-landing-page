import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  FlaskConical,
  Factory,
  Sparkles,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section - Innovative Personal Care Manufacturing and R&D Solutions">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="State-of-the-art personal care manufacturing facility and R&D laboratory with modern equipment"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(215 50% 20%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center fade-in w-full px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6 sm:mb-8 text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" aria-hidden="true" />
          <span>Research · Manufacturing · Innovation</span>
        </div>

        <h1 className="mb-5 sm:mb-6 text-foreground leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight">
          Innovative Personal Care{" "}
          <span className="text-primary">Manufacturing & R&D</span> Solutions
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 max-w-3xl mx-auto font-light leading-relaxed px-2">
          Backero Private Limited is a research-driven cosmetics manufacturing
          partner for brands that need private label formulation, contract
          production, and fast quote delivery.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto font-light px-2">
          Request a custom quote today and get expert product development support
          for skincare, haircare, and personal care launches.
        </p>

        <div className="flex flex-col xs:flex-row sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 px-2">
          <Button
            size="lg"
            className="group w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
            asChild
          >
            <a href="#contact" aria-label="Request a quote for cosmetics manufacturing">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
            asChild
          >
            <a href="#contact" aria-label="Talk to our sales team">Talk To Sales</a>
          </Button>
        </div>

        {/* Quick stats */}
        <ul className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto list-none p-0">
            {[
            {
              icon: FlaskConical,
              label: "In-House R&D",
              sub: "Formulation Experts",
            },
            {
              icon: Factory,
              label: "Own Manufacturing",
              sub: "Scalable Capacity",
            },
            {
              icon: Sparkles,
              label: "2 Brands Owned",
              sub: "Treyfa & Kumarie",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center p-2.5 sm:p-3 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40"
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1 sm:mb-1.5" aria-hidden="true" />
              <div className="text-[10px] sm:text-xs font-semibold text-foreground leading-tight text-center">
                {item.label}
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                {item.sub}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#highlights"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down to explore highlights"
      >
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
      </a>
    </section>
  );
};

export default HeroSection;
