import { motion } from "framer-motion";
import { Factory, FlaskConical, ShieldCheck, Package, MapPin, Calendar } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const facts = [
  { icon: MapPin, label: "Coimbatore, Tamil Nadu" },
  { icon: FlaskConical, label: "In-house R&D lab" },
  { icon: Calendar, label: "Founded 2020" },
];

interface FacilityPanel {
  icon: typeof Factory;
  label: string;
  imageUrl?: string;
}

const panels: FacilityPanel[] = [
  { icon: Factory, label: "Manufacturing" },
  { icon: FlaskConical, label: "R&D Lab" },
  { icon: ShieldCheck, label: "Quality Testing" },
  { icon: Package, label: "Packaging" },
];

const ManufacturingSection = () => {
  return (
    <section
      id="manufacturing"
      className="py-20 md:py-28 bg-muted/40 border-y border-border/50"
      aria-label="Manufacturing facility"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
          {/* Left: Text block */}
          <AnimatedSection direction="left">
            <div className="eyebrow">
              <span className="eyebrow-text">Manufacturing</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.12] mb-5">
              Built for<br />Quality at Scale
            </h2>
            <p className="text-[1.0625rem] text-muted-foreground leading-relaxed mb-8 max-w-sm">
              From our GMP-certified facility in Coimbatore, we develop and
              manufacture personal care products that brands across India
              trust to carry their name. Every formula begins in our in-house
              R&D lab, where each ingredient is selected for both performance
              and safety.
            </p>

            <StaggerContainer className="space-y-4" delay={0.1}>
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{fact.label}</span>
                </motion.div>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          {/* Right: 2×2 facility panel grid — decorative icon panels, not photos
              (no real facility photography exists yet; swap `imageUrl` in when it does) */}
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4">
            {panels.map((panel, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-border flex flex-col items-center justify-center gap-3 cursor-default"
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 16px 32px -8px rgba(0,0,0,0.1)",
                  borderColor: "hsl(215 50% 20% / 0.25)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={
                  panel.imageUrl
                    ? {
                        backgroundImage: `url(${panel.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              >
                {!panel.imageUrl && (
                  <div className="w-12 h-12 rounded-xl bg-card/80 flex items-center justify-center shadow-card">
                    <panel.icon className="w-6 h-6 text-primary" />
                  </div>
                )}
                <span
                  className={`text-sm font-semibold ${
                    panel.imageUrl ? "text-white drop-shadow" : "text-foreground"
                  }`}
                >
                  {panel.label}
                </span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
