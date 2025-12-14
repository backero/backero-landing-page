import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Clean beauty products with natural ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center fade-in">
        <h1 className="mb-6 text-foreground">
          Complete Cosmetics Solution <br />
          <span className="text-primary">From Production to Export</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          India's first certified cancer-free cosmetics brand. B2B & B2C solutions delivering premium, research-backed beauty products through Ayurvedic heritage and modern science.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="group" asChild>
            <a href="#brands">
              Explore Our Brands
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#story">Learn Our Story</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#highlights"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
};

export default HeroSection;
