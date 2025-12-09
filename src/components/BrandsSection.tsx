import { Card } from "@/components/ui/card";
import treyfaLogo from "@/assets/treyfa-logo.png";
import kymarieLogo from "@/assets/kymarie-logo.png";

const brands = [
  {
    name: "Treyfa",
    logo: treyfaLogo,
    tagline: "Everyday Wellness & Ayurvedic Heritage",
    description: "A holistic range of daily wellness products blending modern science with traditional Ayurvedic knowledge for skin, hair, and body care.",
    color: "from-accent/20 to-accent/5",
    categories: [
      { name: "Skin Care", benefit: "Hydration, Brightening, Anti-Aging" },
      { name: "Hair Care", benefit: "Growth, Strengthening, Scalp Health" },
      { name: "Bath & Body", benefit: "Moisturization, Stress Relief" }
    ]
  },
  {
    name: "Kymarie",
    logo: kymarieLogo,
    tagline: "Color & Specialty Division",
    description: "Specialized division dedicated to expanding the cancer-free promise into color cosmetics and specialized personal care, ensuring beauty doesn't compromise health.",
    color: "from-primary/20 to-primary/5",
    categories: [
      { name: "Natural Soaps", benefit: "Purify & Nourish Gently" },
      { name: "Color Cosmetics", benefit: "Cancer-Free Beauty" },
      { name: "Specialty Care", benefit: "pH Balanced Formulas" }
    ]
  }
];

const BrandsSection = () => {
  return (
    <section id="brands" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Our Brands</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Treyfa and Kymarie are pioneers in ethical and clean beauty, dedicated to providing 
            <strong className="text-foreground"> India's First Certified Cancer-Free Cosmetics</strong>—achieved 
            through rigorous research ensuring products are completely free from known carcinogenic compounds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${brand.color}`} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 flex items-center">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="h-full w-auto object-contain max-w-[160px]"
                    />
                  </div>
                </div>
                <p className="text-sm font-medium text-accent mb-4">
                  {brand.tagline}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {brand.description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">Product Categories:</p>
                  <div className="grid gap-2">
                    {brand.categories.map((cat, i) => (
                      <div key={i} className="flex items-center justify-between bg-muted rounded-lg px-4 py-2">
                        <span className="font-medium text-foreground">{cat.name}</span>
                        <span className="text-sm text-muted-foreground">{cat.benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
