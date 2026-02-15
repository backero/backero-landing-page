import { ArrowRight, ExternalLink } from "lucide-react";
import treyfaLogo from "@/assets/treyfa-logo.png";
import kymarieLogo from "@/assets/kymarie-logo.png";

const brands = [
  {
    id: "treyfa",
    name: "Treyfa",
    logo: treyfaLogo,
    tagline: "Natural & Herbal Beauty Essentials",
    description:
      "India's First Certified Cancer-Free Cosmetics, Handcrafted with Ayurvedic Heritage. Treyfa merges ancient wisdom with modern safety standards to create products that nurture without harm.",
    website: "https://www.treyfa.in",
    bgGradient: "from-[#F9FBE7] to-[#F0F4C3]", // Soft herbal green/yellow
    accentColor: "text-accent",
    buttonColor: "bg-accent hover:bg-accent/90",
    categories: ["Skin Care", "Hair Care", "Bath & Body"],
  },
  {
    id: "kymarie",
    name: "Kymarie",
    logo: kymarieLogo,
    tagline: "Cruelty-Free & Eco-Friendly Beauty",
    description:
      "Handcrafted soaps and specialty care products made with natural ingredients. Kymarie represents the playful yet responsible side of beauty, ensuring every wash is a guilt-free indulgence.",
    website: "#",
    bgGradient: "from-[#E3F2FD] to-[#BBDEFB]", // Soft blue
    accentColor: "text-primary",
    buttonColor: "bg-primary hover:bg-primary/90",
    categories: ["Natural Soaps", "Specialty Care", "pH Balanced Formulas"],
  },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="relative">
      <div className="text-center py-20 bg-background container-custom">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-6 inline-block tracking-tight">
          Our Brands
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
          Pioneering ethical and clean beauty with{" "}
          <strong className="text-foreground font-medium">
            India's First Certified Cancer-Free Cosmetics
          </strong>
          .
        </p>
      </div>

      <div className="container-custom flex flex-col gap-20 pb-20">
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            className={`
              relative w-full min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-stretch
              overflow-hidden rounded-3xl shadow-lg border border-border/50
              ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Visual Half */}
            <div
              className={`
              w-full md:w-1/2 min-h-[300px] md:min-h-auto
              bg-gradient-to-br ${brand.bgGradient}
              relative flex items-center justify-center p-8 md:p-12
              group
            `}
            >
              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[60px] border-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 ease-out z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[40px] border-white/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out delay-100 z-0" />

              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500 ease-out w-full max-w-xs md:max-w-md flex justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-auto h-auto max-h-[180px] md:max-h-[250px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Content Half */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-20 bg-card z-10">
              <span
                className={`text-sm font-bold uppercase tracking-widest mb-4 ${brand.accentColor} flex items-center gap-2`}
              >
                <span className="w-8 h-[2px] bg-current"></span>
                Official Brand
              </span>

              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                {brand.name}
              </h3>

              <p className="text-lg md:text-xl font-medium text-foreground/80 mb-4 md:mb-6 italic font-serif">
                "{brand.tagline}"
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 md:mb-10 font-light">
                {brand.description}
              </p>

              <div className="space-y-8 mt-auto">
                <div>
                  <h4 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider mb-4">
                    Key Categories
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {brand.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-secondary/50 rounded-full text-foreground/80 text-xs md:text-sm font-medium border border-border"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-semibold tracking-wide text-sm md:text-base
                    transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                    ${brand.buttonColor}
                  `}
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
