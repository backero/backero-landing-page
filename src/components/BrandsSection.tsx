import { ArrowRight, ExternalLink } from "lucide-react";
import treyfaLogo from "@/assets/treyfa-logo.png";
import kumarieLogo from "@/assets/kumarie-logo.png";

const brands = [
  {
    id: "treyfa",
    name: "Treyfa", 
    logo: treyfaLogo,
    tagline: "Premium Personal Care Solutions",
    description:
      "Treyfa is Backero's flagship consumer brand — delivering premium personal care solutions designed for effective daily care. Built on the foundation of stringent quality standards and scientifically backed formulations.",
    website: "https://www.treyfa.in",
    bgGradient: "from-[#F9FBE7] to-[#F0F4C3]",
    accentColor: "text-accent",
    buttonColor: "bg-accent hover:bg-accent/90",
    categories: ["Skin Care", "Hair Care", "Bath & Body"],
    proof: "Live consumer brand with active market presence",
  },
  {
    id: "kumarie",
    name: "Kumarie",
    logo: kumarieLogo,
    tagline: "Customized Handcrafted Soaps",
    description:
      "Kumarie showcases Backero's artisanal formulation expertise — customized handcrafted soaps designed with creativity and quality ingredients, demonstrating our ability to execute niche product development at scale.",
    website: "https://www.kumarie.in",
    bgGradient: "from-[#E3F2FD] to-[#BBDEFB]",
    accentColor: "text-primary",
    buttonColor: "bg-primary hover:bg-primary/90",
    categories: ["Natural Soaps", "Specialty Care", "pH Balanced Formulas"],
    proof: "Specialty handcrafted product line",
  },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="relative">
      <div className="text-center py-10 md:py-14 bg-background container-custom">
        <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Our Portfolio
        </span>
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-4 inline-block tracking-tight">
          Our Brands
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          We develop and manage our own consumer brands — demonstrating our
          ability to execute{" "}
          <strong className="text-foreground font-medium">
            from formulation to market success.
          </strong>{" "}
          This is your proof that we can do it for you too.
        </p>
      </div>

      <div className="container-custom flex flex-col gap-8 pb-12">
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            className={`
              relative w-full min-h-[320px] md:min-h-[380px] flex flex-col md:flex-row items-stretch
              overflow-hidden rounded-2xl shadow-md border border-border/50
              ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Visual Half */}
            <div
              className={`
              w-full md:w-2/5 min-h-[180px] md:min-h-auto
              bg-gradient-to-br ${brand.bgGradient}
              relative flex items-center justify-center p-6 md:p-8
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
                  className="w-auto h-auto max-h-[120px] md:max-h-[150px] object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Content Half */}
            <div className="w-full md:w-3/5 flex flex-col justify-center p-6 md:p-8 lg:p-10 bg-card z-10">
              <span
                className={`text-sm font-bold uppercase tracking-widest mb-4 ${brand.accentColor} flex items-center gap-2`}
              >
                <span className="w-8 h-[2px] bg-current"></span>
                Owned Brand
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
                {brand.name}
              </h3>

              <p className="text-sm md:text-base font-medium text-foreground/80 mb-2 md:mb-3 italic font-serif">
                "{brand.tagline}"
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4 font-light">
                {brand.description}
              </p>

              {/* Proof badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-semibold mb-4 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {brand.proof}
              </div>

              <div className="space-y-4 mt-auto">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                    Key Categories
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-foreground/80 text-xs font-medium border border-border"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {brand.website !== "#" && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold tracking-wide text-sm
                      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                      ${brand.buttonColor}
                    `}
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA below brands */}
      <div className="container-custom pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Want Backero to Build Your Brand?
          </h3>
          <p className="text-muted-foreground mb-5 max-w-2xl mx-auto leading-relaxed text-base">
            If we can build Treyfa and Kumarie from scratch — we can do it for
            you too. Let's discuss your product vision.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors duration-200"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
