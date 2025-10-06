import { Heart, Lightbulb, Shield, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Consumer First",
    description: "Every decision starts and ends with our consumers. We listen, learn, and evolve based on real needs and feedback."
  },
  {
    icon: Lightbulb,
    title: "Innovation & R&D",
    description: "Continuous research and development ensures our products leverage the latest scientific breakthroughs and natural discoveries."
  },
  {
    icon: Target,
    title: "Data-Driven",
    description: "Technology and analytics power our understanding of trends, preferences, and opportunities to serve better."
  },
  {
    icon: Shield,
    title: "Sustainability",
    description: "Responsible sourcing, eco-friendly packaging, and carbon-neutral operations define our commitment to the planet."
  }
];

const ValuesSection = () => {
  return (
    <section id="values" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Our DNA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The core principles that guide everything we do, from product development 
            to customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
