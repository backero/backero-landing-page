import { motion } from "framer-motion";
import { ArrowRight, PackageCheck } from "lucide-react";
import { useLenis } from "@/hooks/useLenis";
import { useSEO } from "@/hooks/use-seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";
import { HashLink } from "@/components/ui/HashLink";
import { productCategories } from "@/data/products";
import {
  generateSEOConfig,
  generateCollectionPageSchema,
} from "@/lib/seo";

const seoConfig = generateSEOConfig({
  title: "Product Categories | Backero Private Limited",
  description:
    "Explore Backero's cosmetic manufacturing range — hair care, soaps, skin care, lip care, and colour cosmetics. Private label available from 50 units, developed in-house and GMP-manufactured.",
  keywords:
    "cosmetics product range, private label hair care, private label soaps, private label skin care, contract manufacturing catalogue, Backero products",
  url: "https://backero.in/products",
});

const collectionSchema = generateCollectionPageSchema(
  productCategories.map((category) => ({
    name: category.name,
    description: category.description,
    url: `https://backero.in/products#${category.id}`,
  }))
);

const Products = () => {
  useLenis();
  useSEO(seoConfig, collectionSchema, "products-schema");

  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        {/* Page header */}
        <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-gradient-to-b from-muted/40 to-background">
          <div className="container-custom">
            <AnimatedSection className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-text">Our Range</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.12] mb-5">
                Product Categories
              </h1>
              <p className="text-[1.0625rem] text-muted-foreground leading-relaxed">
                Every formulation is developed in our in-house R&D lab and
                manufactured under GMP conditions in Coimbatore. Private
                label and white label available from 50 units MOQ.
              </p>
            </AnimatedSection>

            {/* Chip nav */}
            <div className="flex flex-wrap gap-2.5 mt-10">
              {productCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <category.icon className="w-3.5 h-3.5" />
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Category sections */}
        {productCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-16 md:py-24 ${
              index % 2 === 1 ? "bg-muted/40 border-y border-border/50" : "bg-background"
            }`}
          >
            <div className="container-custom">
              <AnimatedSection className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {category.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">{category.tagline}</p>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {category.description}
                </p>
              </AnimatedSection>

              {category.variants && category.variants.length > 0 && (
                <StaggerContainer className="flex flex-wrap gap-2 mb-6">
                  {category.variants.map((variant) => (
                    <motion.span
                      key={variant}
                      variants={staggerItemVariants}
                      className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm text-foreground/80"
                    >
                      {variant}
                    </motion.span>
                  ))}
                </StaggerContainer>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-primary flex-shrink-0" />
                  {category.variantNote}
                </p>
                <HashLink
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors sm:ml-auto"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </HashLink>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
