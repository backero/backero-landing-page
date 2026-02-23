import {
  FlaskConical,
  Factory,
  Package,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: FlaskConical,
    title: "Research-Driven Approach",
    description:
      "Every product begins in our R&D lab — using scientifically validated ingredients and modern cosmetic research to deliver formulations that work.",
  },
  {
    icon: Factory,
    title: "Flexible Manufacturing",
    description:
      "From pilot batch to full-scale production, our manufacturing adapts to your brand's growth stage and volume requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Processes",
    description:
      "Strict quality control standards are maintained throughout every stage of production — ensuring safety, consistency, and performance.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Led Development",
    description:
      "We stay ahead of market trends, constantly developing new formulations and product concepts to keep your brand competitive.",
  },
  {
    icon: Package,
    title: "End-to-End Brand Support",
    description:
      "From concept ideation and formulation to manufacturing and packaging — we support your brand journey at every milestone.",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Our Strengths
          </span>
          <h2 className="text-primary mb-4">Why Brands Choose Backero</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            We don't just manufacture products — we build partnerships that help
            brands grow through technical excellence and reliable delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
