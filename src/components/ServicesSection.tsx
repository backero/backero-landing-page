import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const capabilities = [
  {
    title: "Research & Development",
    description:
      "Our R&D division focuses on innovative formulation development using scientifically backed ingredients and modern cosmetic research methodologies.",
    points: [
      "Product formulation development",
      "Ingredient research and testing",
      "Stability testing",
      "Prototype creation",
      "Customization based on brand requirements",
    ],
    gradient: "from-primary/[0.08] via-primary/[0.02] to-transparent",
    labelColor: "text-primary",
    borderHover: "hsl(var(--primary) / 0.35)",
  },
  {
    title: "Manufacturing Capabilities",
    description:
      "We provide scalable manufacturing solutions tailored to your brand's volume, timeline, and quality requirements.",
    points: [
      "Hair Care Products",
      "Skin Care Products",
      "Personal Hygiene Products",
      "Soaps & Cleansers",
      "Herbal & Specialty Formulations",
    ],
    gradient: "from-accent/[0.12] via-accent/[0.03] to-transparent",
    labelColor: "text-accent",
    borderHover: "hsl(var(--accent) / 0.35)",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Our own operations run on a custom-built workflow automation platform — task automation and WhatsApp alerts — so partner brands get real-time visibility into every order, not just a status email.",
    points: [
      "Automated task & approval workflows",
      "WhatsApp-integrated real-time alerts",
      "Automated attendance & leave tracking",
      "Live production & order dashboards",
    ],
    gradient: "from-coral/[0.16] via-coral/[0.03] to-transparent",
    labelColor: "text-coral",
    borderHover: "hsl(var(--coral) / 0.35)",
  },
];

const process = [
  {
    step: "01",
    title: "Concept Discussion",
    desc: "We understand your brand vision, target market, and product requirements.",
  },
  {
    step: "02",
    title: "Research & Formulation",
    desc: "Our R&D team develops the optimal formula using proven ingredients.",
  },
  {
    step: "03",
    title: "Prototype Approval",
    desc: "Review and approve the prototype before moving to full-scale testing.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    desc: "Rigorous stability and safety testing to ensure product excellence.",
  },
  {
    step: "05",
    title: "Manufacturing & Packaging",
    desc: "Scalable production with quality control at every stage.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-background lattice-bg"
      aria-label="Our Manufacturing and R&D Services"
    >
      <div className="container-custom relative">
        {/* Left-aligned header */}
        <AnimatedSection className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-text">Manufacturing & R&D</span>
          </div>
          <h2>End-to-End Product<br />Development</h2>
          <p>
            From concept to commercialization — we provide the scientific
            expertise and manufacturing infrastructure that B2B brands need to
            succeed.
          </p>
        </AnimatedSection>

        {/* Capabilities -- even 3-col grid, gradient-tinted, no icons */}
        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {capabilities.map((cap, index) => (
            <motion.article
              key={index}
              variants={staggerItemVariants}
              className={`relative overflow-hidden flex flex-col rounded-2xl p-8 bg-gradient-to-br ${cap.gradient} border border-border/60`}
              whileHover={{ y: -6, borderColor: cap.borderHover }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <span
                className={`absolute -right-3 -top-8 font-mono text-[7rem] font-bold leading-none select-none pointer-events-none ${cap.labelColor} opacity-[0.07]`}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative text-xl font-bold text-foreground mb-3 tracking-tight">
                {cap.title}
              </h3>
              <p className="relative text-muted-foreground mb-5 leading-relaxed text-sm">
                {cap.description}
              </p>
              <ul className="relative space-y-2 list-none p-0">
                {cap.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.3 }}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${cap.labelColor.replace("text-", "bg-")} flex-shrink-0`} aria-hidden="true" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </StaggerContainer>

        {/* Process */}
        <div className="mb-20">
          <AnimatedSection className="mb-12">
            <div className="eyebrow">
              <span className="eyebrow-text">How It Works</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Product Development Process
            </h3>
          </AnimatedSection>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10"
              aria-hidden="true"
            />
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
              staggerChildren={0.08}
            >
              {process.map((step, index) => (
                <motion.li
                  key={index}
                  variants={staggerItemVariants}
                  className="flex flex-col items-center text-center group list-none"
                >
                  <motion.div
                    className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center mb-4 shadow-card"
                    whileHover={{
                      scale: 1.12,
                      borderColor: "hsl(215 50% 20%)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <span className="text-sm font-bold text-primary tabular-nums" aria-label={`Step ${step.step}`}>
                      {step.step}
                    </span>
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-1.5 text-sm tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.li>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Quality banner */}
        <AnimatedSection direction="none" delay={0.1}>
          <motion.aside
            className="rounded-2xl bg-gradient-to-r from-primary to-primary/85 p-8 md:p-12 text-center text-primary-foreground overflow-hidden relative"
            whileHover={{ boxShadow: "0 24px 48px -12px hsl(215 50% 20% / 0.35)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 0%, transparent 50%)" }} aria-hidden="true" />
            <span className="relative z-10 inline-block font-mono text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-primary-foreground/70 mb-3">
              Quality Assurance
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 relative z-10 tracking-tight">
              Our Quality Commitment
            </h3>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
              Strict quality standards throughout the production process to ensure
              safety, consistency, and performance — because your brand reputation
              depends on it.
            </p>
            <motion.a
              href="#contact"
              className="relative z-10 inline-flex items-center gap-2 bg-white text-primary font-semibold px-7 py-3 rounded-full text-sm shadow-card-md"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 12px 24px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-label="Discuss your project with our team"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.aside>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
