import { Sparkles, MapPin, Leaf, Users } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    number: "6+",
    label: "Unique Brands",
    description: "Across beauty & personal care"
  },
  {
    icon: MapPin,
    number: "700+",
    label: "Districts",
    description: "Omni-channel presence"
  },
  {
    icon: Leaf,
    number: "100%",
    label: "Sustainable",
    description: "Commitment to planet"
  },
  {
    icon: Users,
    number: "10M+",
    label: "Happy Customers",
    description: "Trust our brands"
  }
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
