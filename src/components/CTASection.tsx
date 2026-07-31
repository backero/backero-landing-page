import { motion } from "framer-motion";
import { FlaskConical, Factory, Award, ArrowRight } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const proofs = [
  {
    icon: FlaskConical,
    stat: "In-House R&D",
    detail: "Advanced formulation lab — no outsourcing",
  },
  {
    icon: Factory,
    stat: "Own Manufacturing",
    detail: "Full control from raw material to finished product",
  },
  {
    icon: Award,
    stat: "2 Live Brands",
    detail: "Treyfa & Kumarie — proof we deliver",
  },
];

const CTASection = () => {
  return (
    <section className="bg-primary relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.7, 0.5, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-10 sm:mb-12 px-4" direction="none">
          <span className="inline-block text-xs font-semibold text-primary-foreground/50 uppercase tracking-widest mb-3">
            Why Brands Trust Backero
          </span>
          <h2 className="text-primary-foreground text-2xl sm:text-3xl md:text-4xl font-bold mb-0">
            We Are Experts. Work With Us.
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12"
          delay={0.1}
        >
          {proofs.map((p, i) => (
            <motion.div
              key={i}
              variants={staggerItemVariants}
              className="flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4 sm:p-6 sm:text-center cursor-default"
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.18)",
                scale: 1.02,
                y: -4,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground font-bold text-sm sm:text-base leading-tight">
                  {p.stat}
                </p>
                <p className="text-primary-foreground/65 text-xs sm:text-sm mt-0.5 leading-snug">
                  {p.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center" direction="none" delay={0.3}>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base shadow-lg"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 16px 32px -8px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Request a Quote Today
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
