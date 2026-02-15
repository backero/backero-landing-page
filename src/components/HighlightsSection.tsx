import { Sparkles, MapPin, Package, ShoppingBag } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    number: "2",
    label: "Signature Brands",
    description: "Treyfa & Kymarie",
  },
  {
    icon: Package,
    number: "B2B & B2C",
    label: "Global Reach",
    description: "Production to Export",
  },
  {
    icon: MapPin,
    number: "Pan-India",
    label: "Presence",
    description: "Serving even remote areas",
  },
  {
    icon: ShoppingBag,
    number: "100%",
    label: "Safety Assured",
    description: "Certified Cancer-Free",
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <highlight.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {highlight.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {highlight.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {highlight.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
