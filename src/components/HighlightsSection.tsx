import { motion } from "framer-motion";
import { FlaskConical, Factory, Package, CheckCircle, ArrowRight } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const highlights = [
  {
    icon: FlaskConical,
    number: "R&D",
    label: "Formulation Lab",
    description: "Ingredient research & in-house testing",
  },
  {
    icon: Factory,
    number: "Custom",
    label: "Manufacturing",
    description: "Scalable production lines, your volume",
  },
  {
    icon: Package,
    number: "2",
    label: "Owned Brands",
    description: "Treyfa & Kumarie — built from scratch",
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Quality Focus",
    description: "Safety & compliance at every stage",
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-20 md:py-28 bg-muted/40 border-y border-border/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">

          {/* Left: Text block */}
          <AnimatedSection direction="left">
            <div className="eyebrow">
              <span className="eyebrow-text">Why Partner With Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.12] mb-5">
              Our Core<br />Capabilities
            </h2>
            <p className="text-[1.0625rem] text-muted-foreground leading-relaxed mb-8 max-w-sm">
              From formulation to finished product — Backero delivers
              end-to-end personal care manufacturing solutions built for brands
              that want to grow.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full text-sm shadow-card-md"
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 12px 24px -4px rgba(0,0,0,0.18)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </AnimatedSection>

          {/* Right: 2×2 feature card grid */}
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className="p-5 sm:p-6 rounded-2xl bg-card border border-border cursor-default"
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 16px 32px -8px rgba(0,0,0,0.1)",
                  borderColor: "hsl(215 50% 20% / 0.25)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ backgroundColor: "hsl(215 50% 20%)", scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <highlight.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1 tracking-tight">
                  {highlight.number}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {highlight.label}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed hidden sm:block">
                  {highlight.description}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
