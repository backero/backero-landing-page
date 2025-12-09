import { Laptop, ShoppingCart, FlaskConical, Rocket, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Laptop,
    title: "Technology & Digital Services",
    description: "Leading innovation in IT services with AI-driven solutions and digital transformation."
  },
  {
    icon: ShoppingCart,
    title: "Marketplace Operations",
    description: "Expert presence across Amazon, Flipkart, JioMart, and other major e-commerce platforms."
  },
  {
    icon: FlaskConical,
    title: "Cosmetic Research & Manufacturing",
    description: "In-house R&D facilities ensuring cancer-free, research-backed beauty products."
  },
  {
    icon: Rocket,
    title: "Brand Development",
    description: "Building purpose-driven brands with strong e-commerce integration and market presence."
  },
  {
    icon: Truck,
    title: "Quick Commerce & Omnichannel",
    description: "Pan-India distribution including remote areas through omnichannel retail strategy."
  }
];

const ValuesSection = () => {
  return (
    <section id="values" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Our Focus Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Under visionary leadership, Backero continues to evolve as a multidisciplinary 
            company blending technology, wellness, and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
