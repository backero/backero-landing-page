import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Award,
  Microscope,
  Activity,
  FlaskConical,
  FileCheck,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const certifications = [
  {
    icon: ShieldCheck,
    title: "FSSAI Licensed",
    description:
      "Meets India's food safety and quality authority standards — essential for any brand sold through modern trade or e-commerce channels.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001:2015 Certified",
    description:
      "Internationally recognised quality management system — consistent output, full traceability, and documented processes every single batch.",
  },
  {
    icon: Award,
    title: "GMP Certified",
    description:
      "Pharmaceutical-grade hygiene and process controls — the gold standard in personal care manufacturing. Every batch, every time.",
  },
];

const qcSteps = [
  {
    icon: Microscope,
    step: "01",
    title: "Raw material inspection",
    description: "Identity, purity & microbial safety tested before production",
  },
  {
    icon: Activity,
    step: "02",
    title: "In-process QC checks",
    description: "pH, viscosity, colour & texture verified at every control point",
  },
  {
    icon: FlaskConical,
    step: "03",
    title: "Finished product testing",
    description: "Microbiological, stability & dermatological evaluation",
  },
  {
    icon: FileCheck,
    step: "04",
    title: "COA issued on dispatch",
    description: "Certificate of Analysis with every order, no exceptions",
  },
];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 bg-background"
      aria-label="Certifications and compliance"
    >
      <div className="container-custom">
        <AnimatedSection className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-text">Quality & Trust</span>
          </div>
          <h2>Certifications &<br />Compliance</h2>
          <p>
            Every product we manufacture is backed by certified processes and
            a documented quality control chain, from raw material to
            dispatch.
          </p>
        </AnimatedSection>

        {/* Certification cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-5 md:gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              className="p-6 rounded-2xl bg-card border border-border shadow-card group cursor-default"
              whileHover={{
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
                <cert.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
              </motion.div>
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* QC flow */}
        <AnimatedSection delay={0.1}>
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-8">
            Our Quality Control Flow
          </h3>
        </AnimatedSection>
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          delay={0.15}
        >
          {qcSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              className="relative p-5 rounded-2xl bg-card border border-border shadow-card cursor-default"
              whileHover={{
                scale: 1.02,
                y: -4,
                boxShadow: "0 12px 24px -4px rgba(0,0,0,0.08)",
                borderColor: "hsl(215 50% 20% / 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-muted-foreground tabular-nums">
                  {step.step}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1 tracking-tight">
                {step.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < qcSteps.length - 1 && (
                <div
                  className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 items-center justify-center text-primary/40"
                  aria-hidden="true"
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CertificationsSection;
