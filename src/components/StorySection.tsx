import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const milestones = [
  {
    year: "2020",
    title: "Inception of Backero",
    description:
      "Established with a visionary mandate to revolutionize personal care through non-toxic, scientifically-backed formulations.",
  },
  {
    year: "2021",
    title: "Debut of Treyfa",
    description:
      "Unveiling our flagship clean beauty brand, setting a new industry standard for cancer-free, botanical-first cosmetics.",
  },
  {
    year: "2022",
    title: "Strategic B2B Expansion",
    description:
      "Scaled operations to empower a network of retailers and partners with our certified safe product ecosystem.",
  },
  {
    year: "2023",
    title: "National Footprint",
    description:
      "Achieved pan-India distribution, penetrating remote markets and cementing consumer trust through consistent quality.",
  },
  {
    year: "2024",
    title: "Diversification with Kumarie",
    description:
      "Launched our premium color cosmetics line, reinforcing our commitment to safety without compromising on performance.",
  },
  {
    year: "2025",
    title: "Vertical Integration",
    description:
      "Inaugurated state-of-the-art R&D and manufacturing facilities to ensure end-to-end quality control and acceleration of global exports.",
  },
  {
    year: "2026",
    title: "The Biotech Leap",
    description:
      "Evolved from formulation to bio-innovation, applying fermentation, enzymatic processes and biomaterial engineering to create actives that are more effective, stable and sustainable.",
  },
];

const StorySection = () => {
  return (
    <section
      id="story"
      className="py-20 md:py-28 bg-background"
    >
      <div className="container-custom">
        {/* Left-aligned header */}
        <AnimatedSection className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-text">Our Journey</span>
          </div>
          <h2>6 Years of Building<br />Something Real</h2>
          <p>
            Key milestones in our mission to deliver safe, sustainable, and
            innovative personalized care products that stand the test of time.
          </p>
        </AnimatedSection>

        {/* Connected vertical timeline -- a continuous rail joins every
            milestone node, each one rendered as a normal card */}
        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-3 bottom-3 w-px bg-border" aria-hidden="true" />
          <StaggerContainer className="space-y-5">
            {milestones.map((milestone, index) => {
              const accent = ["text-primary", "text-accent", "text-coral"][index % 3];
              const dot = ["bg-primary", "bg-accent", "bg-coral"][index % 3];
              const gradient = [
                "from-primary/[0.08] via-primary/[0.02] to-transparent",
                "from-accent/[0.10] via-accent/[0.02] to-transparent",
                "from-coral/[0.12] via-coral/[0.02] to-transparent",
              ][index % 3];
              const borderHover = [
                "hsl(var(--primary) / 0.3)",
                "hsl(var(--accent) / 0.3)",
                "hsl(var(--coral) / 0.3)",
              ][index % 3];
              return (
                <motion.div key={index} variants={staggerItemVariants} className="relative pl-10 sm:pl-12">
                  <motion.span
                    className={`absolute left-4 sm:left-5 top-6 -translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-[3px] border-background z-10 ${dot}`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    aria-hidden="true"
                  />
                  <motion.div
                    className={`relative overflow-hidden bg-card bg-gradient-to-br ${gradient} border border-border/60 rounded-2xl p-5 sm:p-6`}
                    whileHover={{ y: -3, borderColor: borderHover }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <span className={`font-mono text-xs uppercase tracking-[0.14em] font-semibold mb-2 block ${accent}`}>
                      {milestone.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
