import {
  Laptop,
  ShoppingCart,
  FlaskConical,
  Rocket,
  Truck,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Laptop,
    title: "Digital Innovation",
    description:
      "Driving growth through AI-powered IT solutions and seamless digital transformation services.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Excellence",
    description:
      "Dominating major marketplaces like Amazon, Flipkart, and JioMart with strategic operations.",
  },
  {
    icon: FlaskConical,
    title: "Scientific R&D",
    description:
      "State-of-the-art labs formulating cancer-free, scientifically validated beauty products.",
  },
  {
    icon: Rocket,
    title: "Brand Strategy",
    description:
      "Cultivating purpose-driven brands with robust market positioning and consumer trust.",
  },
  {
    icon: Truck,
    title: "Omnichannel Logistics",
    description:
      "Efficient pan-India distribution network ensuring product accessibility everywhere.",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Our Focus Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Under visionary leadership, Backero continues to evolve as a
            multidisciplinary company blending technology, wellness, and
            sustainability.
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
