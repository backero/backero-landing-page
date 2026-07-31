import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const achievements = [
  {
    icon: Trophy,
    year: "2024",
    subtitle: "Safety & Trust",
    title: "India's Most Trusted & Safest Cosmetics Brand",
    recipient: "Surya Raj B",
    role: "Managing Director",
    description:
      "Recognized for setting new benchmarks in consumer safety and product integrity. Treyfa's commitment to non-toxic, scientifically validated formulations has earned it the distinction of being one of India's most trusted names in personal care.",
  },
  {
    icon: Star,
    year: "2025",
    subtitle: "Industry Excellence",
    title: "Vetri Nayagigal Virudhugal 2025 — Excellence in Cosmetics Industry",
    recipient: "Dr. Parimala Gnana Soundari",
    role: "Founder",
    description:
      "Honored with the prestigious 'Successful Women Awards 2025' for outstanding leadership and innovation in the cosmetics sector — celebrating visionary approach in steering Treyfa towards sustainable growth.",
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="py-14 md:py-20 bg-secondary/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-text">Recognition</span>
          </div>
          <h2>Awards &<br />Accolades</h2>
          <p>
            Our commitment to excellence and safety has been recognized by
            industry leaders and institutions.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          {achievements.map((item, index) => (
            <motion.article
              key={index}
              variants={staggerItemVariants}
              className="bg-card border border-border rounded-2xl p-7 shadow-card flex flex-col gap-5"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -8px rgba(0,0,0,0.09)",
                borderColor: "hsl(215 50% 20% / 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Top row: icon + year + subtitle */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-xs font-bold text-muted-foreground tabular-nums">{item.year}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground leading-snug tracking-tight mb-3">
                  {item.title}
                </h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Recipient */}
              <div className="pt-1 border-t border-border/60 flex items-center gap-3">
                <Award className="w-4 h-4 text-primary/60 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Honored Recipient</p>
                  <p className="text-sm font-semibold text-foreground">{item.recipient} <span className="text-muted-foreground font-normal">· {item.role}</span></p>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AchievementsSection;
