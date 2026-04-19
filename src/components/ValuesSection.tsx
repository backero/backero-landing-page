import { motion } from "framer-motion";
import {
  FlaskConical,
  Factory,
  Package,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

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
    <section id="values" className="py-20 md:py-28 bg-muted/40 border-t border-border/50">
      <div className="container-custom">
        {/* Left-aligned header */}
        <AnimatedSection className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-text">Our Strengths</span>
          </div>
          <h2>Why Brands<br />Choose Backero</h2>
          <p>
            We don't just manufacture products — we build partnerships that
            help brands grow through technical excellence and reliable delivery.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              className={`p-6 rounded-2xl bg-card border border-border shadow-card group cursor-default ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              whileHover={{
                scale: 1.02,
                y: -6,
                boxShadow: "0 16px 32px -8px rgba(0,0,0,0.1)",
                borderColor: "hsl(215 50% 20% / 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ backgroundColor: "hsl(215 50% 20%)", scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <value.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
              </motion.div>
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ValuesSection;
