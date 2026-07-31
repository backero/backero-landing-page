import { motion } from "framer-motion";
import {
  FlaskConical,
  Factory,
  Package,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const expertise = [
  { icon: FlaskConical, title: "R&D Formulation Development" },
  { icon: Factory, title: "Custom Product Manufacturing" },
  { icon: Package, title: "Private Label Solutions" },
  { icon: Lightbulb, title: "Brand Development Support" },
  { icon: ShieldCheck, title: "Quality & Compliance Focus" },
];

const whyUs = [
  {
    title: "Research-Driven Approach",
    desc: "Every product starts with science, not shortcuts.",
  },
  {
    title: "Flexible Manufacturing",
    desc: "Scale from pilot batches to full production seamlessly.",
  },
  {
    title: "Quality-Focused Processes",
    desc: "Strict quality control at every production stage.",
  },
  {
    title: "Innovation-Led Development",
    desc: "Modern cosmetic science with proven ingredients.",
  },
  {
    title: "End-to-End Support",
    desc: "From concept to market — we're with you throughout.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30"
      aria-label="About Backero Private Limited"
    >
      <div className="container-custom">
        {/* Left-aligned header */}
        <AnimatedSection className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-text">Who We Are</span>
          </div>
          <h2>Built on Science,<br />Driven by Purpose</h2>
          <p>
            Backero Private Limited is an innovation-focused personal care
            company specializing in research, formulation development, and
            manufacturing of cosmetic and wellness products.
          </p>
        </AnimatedSection>

        {/* Vision & Mission */}
        <StaggerContainer className="grid md:grid-cols-2 gap-5 mb-16">
          <motion.article
            variants={staggerItemVariants}
            className="bg-card border border-border rounded-2xl p-7 shadow-card"
            whileHover={{
              y: -5,
              boxShadow: "0 16px 32px -8px rgba(0,0,0,0.09)",
              borderColor: "hsl(215 50% 20% / 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4" aria-hidden="true">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">Our Vision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To become a trusted global partner in cosmetic innovation and
              manufacturing by delivering scientifically advanced and
              consumer-centric products.
            </p>
          </motion.article>

          <motion.article
            variants={staggerItemVariants}
            className="bg-card border border-border rounded-2xl p-7 shadow-card"
            whileHover={{
              y: -5,
              boxShadow: "0 16px 32px -8px rgba(0,0,0,0.09)",
              borderColor: "hsl(95 55% 47% / 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4" aria-hidden="true">
              <ShieldCheck className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To empower brands with high-quality formulations, reliable
              manufacturing, and innovative product development support that
              drives real market success.
            </p>
          </motion.article>
        </StaggerContainer>

        {/* Core Expertise */}
        <AnimatedSection className="mb-16">
          <div className="eyebrow mb-4">
            <span className="eyebrow-text">What We Do</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-8">
            Our Core Expertise
          </h3>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3" staggerChildren={0.07}>
            {expertise.map((item, index) => (
              <motion.li
                key={index}
                variants={staggerItemVariants}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border shadow-card group list-none cursor-default"
                whileHover={{
                  scale: 1.04,
                  y: -4,
                  boxShadow: "0 12px 24px -4px rgba(0,0,0,0.08)",
                  borderColor: "hsl(215 50% 20% / 0.25)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3"
                  whileHover={{ backgroundColor: "hsl(215 50% 20%)", scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <p className="text-xs font-semibold text-foreground leading-tight">{item.title}</p>
              </motion.li>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Why Choose Backero */}
        <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-7 md:p-10 mb-16 border border-border/60" delay={0.05}>
          <div className="eyebrow mb-4">
            <span className="eyebrow-text">Our Advantage</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-6">
            Why Choose Backero
          </h3>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerChildren={0.07}>
            {whyUs.map((item, index) => (
              <motion.li
                key={index}
                variants={staggerItemVariants}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/70 border border-border/50 list-none"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  x: 3,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1 tracking-tight">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Founder Message */}
        <AnimatedSection className="max-w-2xl mb-16" delay={0.1}>
          <div className="eyebrow mb-4">
            <span className="eyebrow-text">Founder's Message</span>
          </div>
          <blockquote className="text-lg text-foreground/80 leading-relaxed font-light border-l-[3px] border-primary/40 pl-6">
            "Backero was founded with the belief that product quality should
            never be compromised. Our goal is to create formulations that are
            both effective and safe while helping businesses build successful
            brands through strong technical support and manufacturing excellence."
          </blockquote>
        </AnimatedSection>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-20">
          {[
            { value: "2020", label: "Founded" },
            { value: "2", label: "Consumer Brands" },
            { value: "B2B", label: "& B2C Ready" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              className="bg-card border border-border rounded-2xl p-5 sm:p-6 text-center shadow-card cursor-default"
              whileHover={{
                scale: 1.04,
                y: -4,
                boxShadow: "0 12px 24px -4px rgba(0,0,0,0.08)",
                borderColor: "hsl(215 50% 20% / 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Leadership */}
        <AnimatedSection className="text-center mb-10 md:mb-12" delay={0.05}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-0.5 bg-primary rounded-full" />
            <span className="eyebrow-text">Leadership</span>
            <div className="w-6 h-0.5 bg-primary rounded-full" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
            Meet Our Visionaries
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Driven by passion and purpose, our leaders combine technical
            expertise with entrepreneurial vision
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto" staggerChildren={0.15}>
          {/* Founder */}
          <motion.div
            variants={staggerItemVariants}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <motion.div
                className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-card-2xl"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  alt="Parimala Gnana Soundari - Founder"
                  className="w-full h-full object-cover"
                  src="/images/dr-parimala-gnana-soundari.jpg"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-full bg-primary/8 blur-2xl transition-all duration-500 group-hover:bg-primary/16" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1 tracking-tight">
              Parimala Gnana Soundari
            </h4>
            <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3 opacity-80">
              Founder
            </p>
            <div className="w-8 h-0.5 bg-primary/30 mb-3 rounded-full" />
            <p className="text-muted-foreground leading-relaxed max-w-xs text-sm">
              Pioneering the vision of safe, effective cosmetic formulations —
              committed to building brands that last through scientific excellence.
            </p>
          </motion.div>

          {/* Managing Director */}
          <motion.div
            variants={staggerItemVariants}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <motion.div
                className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-card-2xl"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  alt="Suryaraj - Managing Director"
                  className="w-full h-full object-cover object-center"
                  src="/images/surya-raj-b.png"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute -z-10 top-4 -left-4 w-full h-full rounded-full bg-accent/8 blur-2xl transition-all duration-500 group-hover:bg-accent/16" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1 tracking-tight">
              Suryaraj
            </h4>
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3 opacity-80">
              Managing Director
            </p>
            <div className="w-8 h-0.5 bg-accent/30 mb-3 rounded-full" />
            <p className="text-muted-foreground leading-relaxed max-w-xs text-sm">
              Leading strategic growth and operations — driving Backero's
              evolution from a regional manufacturer to a trusted industry partner.
            </p>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AboutSection;
