import { FlaskConical, Factory, Package, CheckCircle } from "lucide-react";

const highlights = [
  {
    icon: FlaskConical,
    number: "R&D",
    label: "Formulation Lab",
    description: "Ingredient Research & Testing",
  },
  {
    icon: Factory,
    number: "Custom",
    label: "Manufacturing",
    description: "Scalable Production Lines",
  },
  {
    icon: Package,
    number: "2",
    label: "Owned Brands",
    description: "Treyfa & Kymarie",
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Quality Focus",
    description: "Safety & Compliance First",
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-12 sm:py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 sm:mb-3 block">
            Why Partner With Us
          </span>
          <h2 className="text-primary mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Our Core Capabilities
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            From formulation to finished product — Backero delivers end-to-end
            personal care manufacturing solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center slide-up group p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <highlight.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                {highlight.number}
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-0.5 sm:mb-1">
                {highlight.label}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
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
