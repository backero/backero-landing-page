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
          <h2>5 Years of Building<br />Something Real</h2>
          <p>
            Key milestones in our mission to deliver safe, sustainable, and
            innovative personalized care products that stand the test of time.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              className="flex flex-col items-start text-left group relative"
            >
              {/* Year Bubble */}
              <motion.div
                className="mb-5 px-4 py-1.5 flex items-center justify-center rounded-full bg-card border border-primary/15 shadow-card"
                whileHover={{
                  scale: 1.06,
                  borderColor: "hsl(215 50% 20% / 0.4)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className="font-bold text-primary text-sm tracking-wide tabular-nums">
                  {milestone.year}
                </span>
              </motion.div>

              {/* Card */}
              <motion.div
                className="bg-card p-6 rounded-2xl border border-border shadow-card w-full h-full flex flex-col"
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px -8px rgba(0,0,0,0.1)",
                  borderColor: "hsl(215 50% 20% / 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <h3 className="text-base font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StorySection;
