import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Factory, Package, CheckCircle } from "lucide-react";
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
    gradient: "from-primary/[0.08] via-primary/[0.02] to-transparent",
    accentClass: "text-primary",
    borderHover: "hsl(var(--primary) / 0.3)",
  },
  {
    icon: Factory,
    number: "Custom",
    label: "Manufacturing",
    description: "Scalable production lines, your volume",
    gradient: "from-accent/[0.10] via-accent/[0.02] to-transparent",
    accentClass: "text-accent",
    borderHover: "hsl(var(--accent) / 0.3)",
  },
  {
    icon: Package,
    number: "2",
    label: "Owned Brands",
    description: "Treyfa & Kumarie — built from scratch",
    gradient: "from-coral/[0.12] via-coral/[0.02] to-transparent",
    accentClass: "text-coral",
    borderHover: "hsl(var(--coral) / 0.3)",
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Quality Focus",
    description: "Safety & compliance at every stage",
    gradient: "from-primary/[0.08] via-primary/[0.02] to-transparent",
    accentClass: "text-primary",
    borderHover: "hsl(var(--primary) / 0.3)",
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="relative py-20 md:py-28 bg-muted/40 border-y border-border/50 lattice-bg overflow-hidden">
      {/* Oversized ghost numeral -- decorative, breaks the grid-bound feel */}
      <div
        className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 font-mono text-[16rem] font-bold text-primary/[0.03] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        04
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">

          {/* Left: Text block, on the lab-rail */}
          <AnimatedSection direction="left" className="lab-rail">
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
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 12px 24px -4px hsl(var(--primary) / 0.3)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </AnimatedSection>

          {/* Right: 2×2 feature card grid -- offset rhythm + per-card accent
              color instead of four identical white tiles */}
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className={`relative overflow-hidden flex flex-col p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${highlight.gradient} border border-border/60 cursor-default ${index % 2 === 1 ? "sm:mt-6" : ""}`}
                whileHover={{ y: -4, borderColor: highlight.borderHover }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <highlight.icon
                  className={`absolute -right-3 -bottom-4 w-20 h-20 sm:w-24 sm:h-24 ${highlight.accentClass} opacity-[0.08] pointer-events-none`}
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <div className={`relative text-2xl sm:text-3xl font-extrabold mb-1 tracking-tight ${highlight.accentClass}`}>
                  {highlight.number}
                </div>
                <div className="relative text-sm font-semibold text-foreground mb-1">
                  {highlight.label}
                </div>
                <div className="relative text-xs text-muted-foreground leading-relaxed hidden sm:block">
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
