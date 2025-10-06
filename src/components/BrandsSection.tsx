import { Card } from "@/components/ui/card";

const brands = [
  {
    name: "Pureté",
    tagline: "Clean Skincare Essentials",
    description: "Science-backed formulations with natural ingredients for radiant, healthy skin.",
    color: "from-primary/20 to-primary/5"
  },
  {
    name: "Verdant",
    tagline: "Eco-Luxury Haircare",
    description: "Sustainable luxury haircare that nurtures your hair and the environment.",
    color: "from-accent/20 to-accent/5"
  },
  {
    name: "Lumière",
    tagline: "Mindful Cosmetics",
    description: "Clean beauty makeup that celebrates natural radiance and authenticity.",
    color: "from-primary-light/30 to-primary-light/10"
  },
  {
    name: "Essence",
    tagline: "Wellness & Self-Care",
    description: "Holistic personal care products for mind, body, and soul.",
    color: "from-accent-light/30 to-accent-light/10"
  },
  {
    name: "Haven",
    tagline: "Home & Lifestyle",
    description: "Thoughtfully designed products that transform everyday spaces into sanctuaries.",
    color: "from-primary/20 to-primary/5"
  },
  {
    name: "Bloom",
    tagline: "Youth Beauty",
    description: "Gen-Z focused beauty brand championing self-expression and diversity.",
    color: "from-accent/20 to-accent/5"
  }
];

const BrandsSection = () => {
  return (
    <section id="brands" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Our Brand Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each brand in our family is purpose-built to serve specific consumer needs 
            with authenticity and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${brand.color}`} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {brand.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
