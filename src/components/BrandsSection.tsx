import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import treyfaLogo from "@/assets/treyfa-logo.png";
import kumarieLogo from "@/assets/kumarie-logo.png";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

const brands = [
  {
    id: "treyfa",
    name: "Treyfa Natural Care",
    logo: treyfaLogo,
    tagline: "Pure · Natural · Effective",
    description:
      "India's 1st certified cancer-free cosmetics brand, rooted in South Indian Ayurvedic traditions. Every formulation bridges ancient herbal wisdom with modern science using 100% natural ingredients.",
    website: "https://www.treyfa.in",
    accentColor: "text-accent",
    accentBg: "bg-accent/8",
    accentBorder: "border-accent/20",
    buttonColor: "bg-accent hover:bg-accent/90",
    categories: ["Hair Care", "Face Care", "Bath & Body"],
    proof: "500+ reviews · 4.8★ · Cancer-free certified",
  },
  {
    id: "kumarie",
    name: "Kumarie",
    logo: kumarieLogo,
    tagline: "Soap, the way nature intended",
    description:
      "Artisanal cold-processed soap bars crafted with Ayurvedic herbs and cold-pressed oils, cured for six weeks. Completely free from SLS, parabens, and phthalates.",
    website: "https://www.kumarie.in",
    accentColor: "text-primary",
    accentBg: "bg-primary/8",
    accentBorder: "border-primary/20",
    buttonColor: "bg-primary hover:bg-primary/90",
    categories: ["Natural Soaps", "Ayurvedic Formulas", "Cruelty-Free"],
    proof: "Est. 2020 · Cold-process handcrafted · SLS & paraben-free",
  },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-14 md:py-20 bg-background">
      <div className="container-custom">
        <AnimatedSection className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-text">Our Portfolio</span>
          </div>
          <h2>Our Brands</h2>
          <p>
            We develop and manage our own consumer brands — proof that we can
            take a product{" "}
            <strong className="text-foreground font-medium">
              from formulation to market success.
            </strong>
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-5 mb-8">
          {brands.map((brand) => (
            <motion.article
              key={brand.id}
              variants={staggerItemVariants}
              className="bg-card border border-border rounded-2xl p-6 shadow-card flex flex-col gap-5"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -8px rgba(0,0,0,0.09)",
                borderColor: "hsl(215 50% 20% / 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Logo + brand name row */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl ${brand.accentBg} border ${brand.accentBorder} flex items-center justify-center p-2 shrink-0`}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground tracking-tight leading-tight">
                    {brand.name}
                  </h3>
                  <p className={`text-xs font-medium mt-0.5 ${brand.accentColor} italic`}>
                    "{brand.tagline}"
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/60" />

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {brand.description}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap gap-1.5">
                {brand.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 bg-secondary/60 rounded-full text-foreground/70 text-xs font-medium border border-border"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Footer: proof + CTA */}
              <div className="flex items-center justify-between gap-3 pt-1 border-t border-border/60 mt-auto">
                <p className={`text-xs font-medium ${brand.accentColor} leading-tight`}>
                  {brand.proof}
                </p>
                {brand.website !== "#" && (
                  <motion.a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white font-semibold text-xs shrink-0 ${brand.buttonColor} transition-colors duration-200`}
                    whileHover={{ scale: 1.04, y: -1, boxShadow: "0 6px 16px rgba(0,0,0,0.14)" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    Visit <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Want Backero to Build Your Brand?
            </h3>
            <p className="text-muted-foreground mb-5 max-w-xl mx-auto leading-relaxed text-sm">
              If we can build Treyfa and Kumarie from scratch — we can do it
              for you too. Let's discuss your product vision.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-full text-sm"
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BrandsSection;
